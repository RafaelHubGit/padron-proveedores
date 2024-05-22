import React from 'react'
import { ProveedorDetalleRouter } from '../../../router/ProveedorDetalleRouter'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const ProveedorDetalle = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate(`/home/busqueda`);
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
                <button type="button" className="btn btn-success"> Guardar </button>
            </div>
        </div>

        <div className='header-container mb-4'>
            <div className='proveedor-data'>
                <p className='nombre-proveedor'>Innovaciones Tecológicas Futuro S.A. de C.V.</p>
                <p className='rfc'> RFC: ITF210513ABC </p>
                <p className='refrendo'>Refrendo: 3</p>
            </div>
            <div className='proveedor-status'>
                <div className='status-toggle mb-2'>
                    <div className="form-check form-switch custom-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                    <div>
                        <span className="badge text-bg-success">Activo</span>
                    </div>
                </div>
                <div className='inactive-detail-button'>
                    <button type="button" className="btn btn-danger"> Ver detalle inactividad </button>
                </div>
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
