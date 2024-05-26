import React, { useContext, useEffect, useState } from 'react'
import { InputSearch } from '../../../generalComponents/InputSearch'
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
    const { setHeight } = useContext(GeneralContext);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const { data, loading, error } = useFetch(ENDPOINTS.SCROLLPROVEEDORES(page, pageSize));
    
    useEffect(() => {
        if (!loading && data) {

            console.log('PROVES  : ', data);

            setProveedores(prevProveedores => {
                // Evita agregar datos duplicados
                const newProveedores = data.filter(newProveedor => 
                    !prevProveedores.some(prevProveedor => prevProveedor.idProveedor === newProveedor.idProveedor)
                );
                return [...prevProveedores, ...newProveedores];
            });
            if (data.length < pageSize) {
                setHasMore(false);
            }
        }
    }, [data, loading]);

    useEffect(() => {
        setHeight('searchContainer', searchContainerHeight);
    }, [searchContainerHeight])

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const handleProveedorSelected = (proveedor) => {
        selectedProveedor(proveedor);
        navigate(`/home/detalle`);
    }

    const fetchMoreData = () => {
        setTimeout(() => {
            setPage(prevPage => prevPage + 1);
        }, 1000); // Agrega un retraso de 1 segundo entre las solicitudes
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
                        pageSize= { pageSize }
                    />
            </div>
        </div>
    )
}
