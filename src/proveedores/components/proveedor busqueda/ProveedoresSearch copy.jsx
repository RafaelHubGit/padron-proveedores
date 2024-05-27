import React, { useContext, useEffect, useState } from 'react';
import { InputSearch } from '../../../generalComponents/InputSearch';
import { ProveedorTable } from './ProveedorTable';
import { GeneralContext } from '../../context/General/GeneralContext';
import useDivHeight from '../../hooks/useDivHeight';
import { ProveedoresContext } from '../../context/Proveedores/ProveedoresContext';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import ENDPOINTS from '../../../config/urls';
import InfiniteScroll from 'react-infinite-scroll-component';

const pageSize = 20;

export const ProveedoresSearch = () => {
    const navigate = useNavigate();
    const { selectedProveedor } = useContext(ProveedoresContext);
    const [proveedores, setProveedores] = useState([]);
    const [searchContainerRef, searchContainerHeight] = useDivHeight();
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searching, setSearching] = useState(false);
    const { setHeight } = useContext(GeneralContext);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const [fetchUrl, setFetchUrl] = useState(ENDPOINTS.SCROLLPROVEEDORES(page, pageSize)); // URL state

    const { data, loading, error } = useFetch(fetchUrl);

    // Update fetch URL based on searchText and page
    useEffect(() => {
        if (!searchText) {
            console.log('!search  ');
            setFetchUrl(ENDPOINTS.SCROLLPROVEEDORES(page, pageSize));
        } else {
            console.log('el otro   ');
            setFetchUrl(null); // To prevent fetch if there is search text
        }
    }, [searchText, page]);

    // Sync data with proveedores state when data changes and searchText is empty
    useEffect(() => {
        if (!loading && data && !searchText) {
            setProveedores( data );
            // setProveedores(prevProveedores => {
            //     const newProveedores = data.filter(newProveedor => 
            //         !prevProveedores.some(prevProveedor => prevProveedor.idProveedor === newProveedor.idProveedor)
            //     );
            //     return page === 1 ? newProveedores : [...prevProveedores, ...newProveedores];
            // });
            if (data.length < pageSize) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }
        }
    }, [data, loading, searchText]);

    useEffect(() => {
        if (searchText) {
            setSearching(true);
            const timeout = setTimeout(() => {
                fetch(ENDPOINTS.TYPESENSE(searchText))
                    .then(response => response.json())
                    .then(data => {
                        const proveedores = data.hits.map(h => h.document);
                        setProveedores(proveedores);
                        setSearching(false);
                        setHasMore(false);
                    })
                    .catch(() => {
                        setProveedores([]);
                        setSearching(false);
                        setHasMore(false);
                    });
            }, 500); // Retraso de 500 ms

            return () => clearTimeout(timeout);
        } else {
            setPage(1); // Reiniciar la página cuando searchText está vacío
            setProveedores([]); // Limpiar proveedores
            setSearching(false);
            setHasMore(true);
        }
    }, [searchText]);

    useEffect(() => {
        setHeight('searchContainer', searchContainerHeight);
    }, [searchContainerHeight]);

    const handleSearchTextChange = (text) => {
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        const timeout = setTimeout(() => {
            setSearchText(text);
        }, 500);
        setSearchTimeout(timeout);
    };

    const handleProveedorSelected = (proveedor) => {
        selectedProveedor(proveedor);
        navigate(`/home/detalle`);
    };

    const fetchMoreData = () => {
        if (!searchText) {
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className="container mt-4">
            <div className='row'>
                <div ref={searchContainerRef} className='row mb-4 align-items-center'>
                    <div className='col-md-10 col-sm-12'>
                        <InputSearch onSearchTextChange={handleSearchTextChange} />
                    </div>
                    <div className='col-md-2 col-sm-12 mt-sm-2 '>
                        <button type="button" className="btn btn-success w-100">Nuevo</button>
                    </div>
                </div>

                {/* <InfiniteScroll
                    dataLength={proveedores.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={<p>No more data to load</p>}
                > */}
                    <ProveedorTable
                        proveedores={proveedores}
                        handleProveedorSelected={handleProveedorSelected}
                        fetchMoreData={fetchMoreData}
                        hasMore={hasMore}
                        pageSize={pageSize}
                    />
                {/* </InfiniteScroll> */}
            </div>
        </div>
    );
};
