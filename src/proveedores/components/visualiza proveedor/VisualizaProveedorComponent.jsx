import React, { useContext, useEffect, useState } from 'react'
import { CardGeneral } from '../CardGeneral'
import { InactivoInfoContainer } from '../InactivoInfoContainer'
import { TableDocumentsComponent } from '../documentos tabla/TableDocumentsComponent'
import { TablaRepresentanteContactoComponent } from '../representante contacto tabla/TablaRepresentanteContactoComponent'
import { ProveedoresContext } from '../../context/Proveedores/ProveedoresContext'

import tProveedor from '../../../data/tipoProveedor.json';

const TIPOPROVEEDOR = tProveedor.tipoProveedor;

export const VisualizaProveedorComponent = ({ datosProveedor = null}) => {

    const { proveedor } = useContext( ProveedoresContext );

    const [contactos, setContactos] = useState([]);
    const [domicilio, setDomicilio] = useState({});
    const [giros, setGiros] = useState([]);
    const [representantes, setRepresentantes] = useState([]);
    const [refrendo, setRefrendo] = useState({});
    const [inactivo, setInactivo] = useState({});
    

    useEffect(() => {
        if ( !datosProveedor ){
        return;
        }

        setContactos(datosProveedor?.Contacto || []);
        setDomicilio(datosProveedor?.Domicilio[0] || {});
        setGiros(datosProveedor?.GirosComerciales || []);
        setRepresentantes(datosProveedor?.Representantes || []);
        setRefrendo( datosProveedor.Refrendo?.find( r => r.idrefrendo == datosProveedor.idrefrendo ) || null );
        setInactivo( datosProveedor.Inactivo?.[0] || null );

    }, [datosProveedor])
    

  return (
    <div className='visualiza-proveedor-container mb-5'>
        <div className='inactivo-container mt-5'>
            {
                inactivo ? 
                    (
                        <InactivoInfoContainer
                            initialValue = { inactivo }
                        />
                    ) : ""
            }
        </div>
        <div className="detalle-proveedor mt-5">
            {
                refrendo !== null ? 
                    (
                        <div className="refrendo-wrap mb-3">
                            <h3 className='fw-bold'> Refrendo: { refrendo?.numero_refrendo } </h3>
                            <p className='d-flex flex-row'> <p className='fw-semibold me-2'>Fecha :</p>  { refrendo?.fecha_refrendo } </p>
                        </div>
                    ): ""
            }
            <div className="proveedor-datos-wrap row mb-2">
                <div className="proveedor-info col-6">
                    <p className='d-flex flex-row'> <p className='fw-semibold me-2 mb-2'> Fecha de alta : </p>  { proveedor?.fecha_alta } </p>
                    <p className='d-flex flex-row'>
                    <p className='fw-semibold me-2 mb-2'>Tipo Proveedor:</p>
                        {TIPOPROVEEDOR?.find(tp => tp.value === proveedor?.tipo_proveedor)?.label}
                    </p>
                    <p className='d-flex flex-row'> <p className='fw-semibold me-2 mb-2'> Web : </p> { datosProveedor?.sitio_web || "N/A" } </p>
                    <p className='d-flex flex-column'> <p className='fw-semibold me-2 mb-2'>
                        Dirección: </p> { domicilio?.calle } <br/>
                        Colonia. { domicilio?.colonia } <br/>
                        C.P. { domicilio?.codigo_postal } <br/>
                        Estado. { domicilio?.estado } <br/>
                        Entidad. { domicilio?.entidad_local }
                    </p>
                </div>
                <div className="giros-repse-wrap col-6">
                    <div className="giros-wrap mb-2">
                        <p className='fw-semibold'> Giros Comerciales : </p>
                        <small> 
                            { giros?.map( g => g.giro_comercial ).join(", ") }
                        </small>
                    </div>
                    <div className="repse-wrap row">
                        <div className='col-6 col-sm-12'>
                            <p className='d-flex flex-row'> <p className='fw-semibold me-2'> Es repse : </p> { proveedor?.es_repse === 1 ? "Sí" : "No" } </p>
                            {
                                proveedor?.es_repse ? 
                                (
                                    <p className='d-flex flex-row'> <p className='fw-semibold me-2'> Fecha repse : </p> { proveedor?.fecha_repse || "" } </p>
                                ) : ""

                            }
                        </div>
                        {
                            proveedor?.es_repse ? 
                            (
                                <div className='col-6 col-sm-12'>
                                    <button type="button" class="btn btn-primary w-100">Ver Documento Repse</button>
                                </div>
                            ): ""
                        }
                    </div>
                </div>
            </div>
            <div className="observaciones-wrap mb-5">
                <p className='fw-bold'>Observaciones: </p>
                <p>
                    { datosProveedor?.observaciones }
                </p>
            </div>
            <div className="documentos-wrap d-flex justify-content-center mb-5 row">
                <div className=' col-8 col-lg-6'>
                    <p>Tiene documentos: { proveedor?.tiene_documentos == 1 ? "Sí" : "No" }</p>

                    {
                        proveedor?.tiene_documentos ? 
                            (<div>
                                <table className='table table-hover table-striped'>
                                    <thead>
                                        <tr>
                                            <th> Documento </th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-group-divider'>
                                        <tr>
                                            <td> documentos muajaja </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>) : "No hay documentos que mostrar"
                    }
                </div>
            </div>
            <div className="representante-contacto-wrap d-flex justify-content-center row">
                <div className="representante-wrap col-md-8 col-lg-6">

                    {
                        representantes?.length !== 0 ? 
                        (
                            <table className='table table-hover table-striped'>
                                <thead>
                                    <th>Representante</th>
                                    <th>Tipo</th>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {
                                        representantes?.map( r => {
                                            return (
                                                <tr key={ r.nombre }>
                                                    <td> {r.nombre} </td>
                                                    <td> {r.tipo_representante} </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        ): "No hay representantes que mostrar"
                    }
                </div>
                <div className="contacto-wrap col-md-8 col-lg-6  mt-5 mt-md-5 mt-lg-auto">

                    {
                        contactos?.length !== 0 ? 
                        (
                            <table className='table table-hover table-striped'>
                                <thead>
                                    <th>Contacto</th>
                                    <th>Tipo</th>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {
                                        contactos?.map( c => {
                                            return (
                                                <tr key={ c.iddatos_proveedores_contacto }>
                                                    <td> {c.detalle_contacto} </td>
                                                    <td> {c.descripcion_contacto} </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        ): "No hay contactos que mostrar"
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
