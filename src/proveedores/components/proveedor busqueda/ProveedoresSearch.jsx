import React, { useContext, useEffect, useState } from 'react';
import { InputSearch } from '../../../generalComponents/InputSearch';
import { ProveedorTable } from './ProveedorTable';
import { GeneralContext } from '../../context/General/GeneralContext';
import useDivHeight from '../../hooks/useDivHeight';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import ENDPOINTS from '../../../config/urls';
import Swal from 'sweetalert2';
import { showToast } from '../../../generalComponents/showToast';

const pageSize = 500;

export const ProveedoresSearch = () => {
    const navigate = useNavigate();
    const [proveedores, setProveedores] = useState([]);
    const [searchContainerRef, searchContainerHeight] = useDivHeight();
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searching, setSearching] = useState(false);
    const { setHeight } = useContext(GeneralContext);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [fetchUrl, setFetchUrl] = useState(ENDPOINTS.SCROLLPROVEEDORES(page, pageSize)); // URL state

    const { data, loading, error } = useFetch(fetchUrl);


    // Update fetch URL based on searchText and page
    useEffect(() => {
        if (!searchText) {
            // setProveedores([]);
            setFetchUrl(ENDPOINTS.SCROLLPROVEEDORES(page, pageSize));
        } else {
            setFetchUrl(null); // To prevent fetch if there is search text
        }
    }, [searchText, page]);

    // Sync data with proveedores state when data changes and searchText is empty
    useEffect(() => {
        if (!loading && data && !searchText) {
            // setProveedores( [...proveedores, ...data] );
            setProveedores(prevProveedores => prevProveedores.concat( data.map( d => { 
                                                                                return { 
                                                                                    ...d, 
                                                                                    activo : d.activo == "Activo" ? 1 : 0  
                                                                                }
                                                                            })));
            showToast(`${proveedores.length} Mostrados`, "info");
            if (data.length < pageSize) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }
        }
    }, [data, loading]);

    useEffect(() => {
        if (searchText) {
            setProveedores([]);
            setSearching(true);
            const timeout = setTimeout(() => {
                fetch(ENDPOINTS.TYPESENSE(searchText))
                    .then(response => {
                        if ( !response.ok ){
                            if ( response.status == 413 ){
                                Swal.fire({
                                    title: "Su consulta tiene más de 250 registros",
                                    text: "Ajuste su consulta.",
                                    icon: "warning"
                                  });
                            }
                        }
                        return response.json()
                    })
                    .then(data => {
                        const proveedores = data.hits.map(h => {
                            const PROVEEDORES = h.document;

                            return {
                                ...PROVEEDORES,
                                activo : PROVEEDORES.activo == "Activo" ? 1 : 0
                            }
                        });
                        setProveedores(proveedores);
                        showToast(`${proveedores.length} Mostrados`, "info");
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
        navigate(`/home/detalle/${proveedor.numeroProveedor}/proveedorInfo`);
    };

    const fetchMoreData = () => {
        setPage(prevPage => prevPage + 1);
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

                <ProveedorTable
                    proveedores={proveedores}
                    handleProveedorSelected={handleProveedorSelected}
                    fetchMoreData={fetchMoreData}
                    hasMore={hasMore}
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
};
