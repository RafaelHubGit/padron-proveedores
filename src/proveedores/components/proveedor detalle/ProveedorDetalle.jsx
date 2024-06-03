import React, { useContext, useEffect, useState } from 'react'
import { ProveedorDetalleRouter } from '../../../router/ProveedorDetalleRouter'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProveedoresContext } from '../../context/Proveedores/ProveedoresContext'
import { getProveedorById } from '../../helpers/dataJsonFnc'
import ENDPOINTS from '../../../config/urls'
import useFetch from '../../../hooks/useFetch'


export const ProveedorDetalle = () => {

    const { id } = useParams();

    const { data: proveedorData, loading: ProveedorLoading, error: ProveedorError } = useFetch( ENDPOINTS.GETPROVEEDORDATA( id ) );
    const { data: girosCData, loading: girosCLoading, error: girosCError } = useFetch( ENDPOINTS.GETGIROSCOMERCIALES() );
    const { data: estadoPData, loading: estadoPLoading, error: estadoPError } = useFetch( ENDPOINTS.ESTADOSPROVEEDORES() );

    const { proveedorSelected, setProveedor } = useContext( ProveedoresContext );
    const { setGirosComerciales, setEstadosProveedores } = useContext( ProveedoresContext );

    const [proveedor, setProveedorState] = useState({});
    const [dProveedor, setDProveedor] = useState({})
    const [refrendo, setRefrendo] = useState("N/A")
    const navigate = useNavigate();
    const location = useLocation();    
    useEffect(() => {
        if ( !proveedorData.length ){
            return 
        }

        const PROVEEDOR = proveedorData[0].Proveedores[0];
        setProveedor( PROVEEDOR );
        setProveedorState( PROVEEDOR );
        const DPROVEEDOR = PROVEEDOR.DatosProveedores.find( dp => dp.activo == 1 );
        setDProveedor( DPROVEEDOR );

        const REFRENDO = DPROVEEDOR.Refrendo?.find( r => r.idrefrendo == DPROVEEDOR.idrefrendo )?.numero_refrendo || "N/A";
        setRefrendo( REFRENDO );


        console.log("proveedorSelected ; ", proveedorSelected);

    }, [proveedorData, ProveedorLoading])
    
    useEffect(() => {
        setGirosComerciales( girosCData );
    }, [girosCData])

    useEffect( () => {
        setEstadosProveedores( estadoPData );
    }, [estadoPData])
    
    

    const handleBack = () => {
        navigate(-1);
    }

  return (
    <div className='proveedor-detalle-container container-md mt-4 '>
        <div className='navigation-container mb-3'>
            <div className='back-button'>
                <span 
                    style={{ cursor: 'pointer' }}
                    className="material-symbols-outlined"
                    onClick={ () => handleBack() }
                >
                    arrow_back
                </span>
            </div>
            <div className='save-button'>
                {
                    proveedor?.activo === 1 ? 
                    <button type="button" className="btn btn-success"> Guardar </button>
                    : ""
                }
            </div>
        </div>

        <div className='header-container mb-4' >
            <div className={`proveedor-data ${!proveedor?.activo ? 'proveedor-data-red-text' : ''}`}>
                <p className='nombre-proveedor'> { dProveedor.razon_social } </p>
                <p className='rfc'> RFC: { dProveedor.rfc } </p>
                <p className='refrendo'>Refrendo: { refrendo }</p>
            </div>
            <div className='proveedor-status'>
                <div className='status-toggle mb-2'>
                    <div className="form-check form-switch custom-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            checked={proveedor?.activo === 1}  // Asumiendo que 'activo' es 1 o 0
                            // onChange={handleCheckboxChange}  // Manejador para cambios en el checkbox
                        />
                    </div>
                    <div>
                        {
                            proveedor?.activo === 1 ? 
                                (<span className="badge text-bg-success">Activo</span>)
                                : (<span className="badge text-bg-danger">Inactivo</span>)
                        }
                    </div>
                </div>
                {/* <div className='inactive-detail-button'>
                    <button type="button" className="btn btn-danger"> Ver detalle inactividad </button>
                </div> */}
            </div>
        </div>

        <div className="body-container">

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link 
                        className={`nav-link ${location.pathname === '/home/proveedorInfo' ? 'active' : ''}`} 
                        to="proveedorInfo"
                    > 
                        Actual 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className={`nav-link ${location.pathname === '/home/refrendos' ? 'active' : ''}`} 
                        to="refrendos"
                    >
                        Refrendos
                    </Link>
                </li>
            </ul>
            <ProveedorDetalleRouter />

        </div>
    </div>
  )
}
