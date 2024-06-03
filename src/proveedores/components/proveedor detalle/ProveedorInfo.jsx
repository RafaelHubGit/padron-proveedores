import React, { useContext, useEffect, useState } from 'react'


import { DateTimePickerComponent } from '../../../generalComponents/dateTimePicker/DateTimePickerComponent';
import { SubirDocumento } from '../../../generalComponents/SubirDocumento';
import { SelectComponent } from '../../../generalComponents/selectPicker/SelectComponent';
import { CardGeneral } from '../CardGeneral';
import { TableDocumentsComponent } from '../documentos tabla/TableDocumentsComponent';
import { DireccionComponent } from '../DireccionComponent';
import { InactivarSectionComponent } from '../InactivarSectionComponent';
import { TablaRepresentanteContactoComponent } from '../representante contacto tabla/TablaRepresentanteContactoComponent';
import { ProveedoresContext } from '../../context/Proveedores/ProveedoresContext';

import tProveedor from '../../../data/tipoProveedor.json';
// import 'react-clock/dist/Clock.css';

const TIPOPROVEEDOR = tProveedor.tipoProveedor;

export const ProveedorInfo = () => {


    // Uso del contexto para acceder al estado del proveedor seleccionado
    const { proveedor, girosComerciales } = useContext(ProveedoresContext);
    
    // Estados locales para manejar los detalles específicos del proveedor
    const [dProveedor, setDProveedor] = useState({});
    const [contactos, setContactos] = useState([]);
    const [domicilio, setDomicilio] = useState({});
    const [giros, setGiros] = useState([]);
    const [representantes, setRepresentantes] = useState([]);
    const [refrendo, setRefrendo] = useState({});
    const [inactivo, setInactivo] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (proveedor?.DatosProveedores) {
            const DPROVEEDOR = proveedor.DatosProveedores.find(dp => dp.activo === 1);
            setDProveedor(DPROVEEDOR || {});
            setContactos(DPROVEEDOR?.Contacto || []);
            setDomicilio(DPROVEEDOR?.Domicilio[0] || {});
            setGiros(DPROVEEDOR?.GirosComerciales || []);
            setRepresentantes(DPROVEEDOR?.Representantes || []);
            setRefrendo( DPROVEEDOR.Refrendo?.find( r => r.idrefrendo == DPROVEEDOR.idrefrendo ) || {} );
            setInactivo( DPROVEEDOR.Inactivo?.[0] || {} );
        }
    }, [proveedor]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

  return (
    <div className='proveedor-info-container mt-4 row'>
        <div className='row mt-3'>
            <div className="col-md-6">
                <div className='fechas-container d-flex justify-content-evenly mb-4'>
                    <DateTimePickerComponent
                        titulo="Fecha de alta "
                        setDate={handleDateChange}
                        disabled = { proveedor?.activo == 0 ? true : false }
                        initialValue={proveedor?.fecha_alta}
                    />
                    <DateTimePickerComponent
                        titulo="Fecha de refrendo "
                        setDate={handleDateChange}
                        disabled = { proveedor?.activo == 0 ? true : false }
                        initialValue={ refrendo?.fecha_refrendo }
                    />
                </div>
            </div>
            <div className="col-md-6">
                <button type="button" 
                        className={`btn ${proveedor?.activo ? 'btn-primary' : 'btn-secondary'} w-100`}
                        disabled={!proveedor?.activo}>  {/* El botón se deshabilita si proveedor.activo es falso */}
                    Nuevo Refrendo
                </button>
            </div>
        </div>
        <div className="row mt-4">
            <div className='col-md-6 repse-container mb-3'>
                <div className='repse-document-wrap row h-100  '> 
                    <div className="repse-wrap col-sm-6 col-md-6 d-flex flex-column justify-content-center ">
                        <div className="form-check mb-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckChecked" 
                                checked={ proveedor?.es_repse === 1 }
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Es repse
                            </label>
                        </div>
                        {
                            proveedor?.es_repse && proveedor?.activo ? 
                            (<DateTimePickerComponent
                                titulo="Fecha repse "
                                setDate={handleDateChange}
                            />) : ""
                        }
                    </div>
                    <div className=' col-sm-6 h-100 d-flex align-items-center'>
                        {
                            proveedor?.es_repse && proveedor?.activo ? 
                            (<SubirDocumento/>) : ""
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className='tipo-giros-wrap mb-3'>
                    <SelectComponent 
                        options={ TIPOPROVEEDOR }
                        initialValue = { proveedor?.tipo_proveedor }
                        title= "Tipo Proveedor"
                        isDisabled = { proveedor?.activo == 0 ? true : false }
                    />
                    <SelectComponent 
                        title= "Giros Comerciales"
                        closeMenuOnSelect={false}
                        isMulti
                        showSelected = {true}
                        options = { girosComerciales?.map( gc => {
                            return {
                                value: gc.idgiros_comerciales,
                                label: gc.giro_comercial
                            }
                        } ) }
                        initialValue={ giros?.map( g => g.idgiros_comerciales ) }
                        isDisabled = { proveedor?.activo == 0 ? true : false }
                    />
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-md-6">
                <div className="form-floating">
                    <textarea 
                        className="form-control" 
                        placeholder="Observaciones" 
                        id="observacionesTextareaId" 
                        style={{ height: '100px' }} // Usar el objeto de estilo en React
                        value={ dProveedor?.observaciones }
                    ></textarea>
                    <label htmlFor="observacionesTextareaId">Observaciones</label>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className='web-wrap h-100 d-flex align-items-center  mt-md-2'>
                    <div className="form-floating w-100">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="webInputId" 
                            placeholder="name@example.com"
                            value={ dProveedor?.sitio_web }
                        />
                        <label htmlFor="webInputId">Página Web</label>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-md-6">
                <TableDocumentsComponent
                    key={'documentos'}
                    classBody={{ height: '135px' }}
                    headers={ ['Documento', 'Tipo'] }
                    body={ [
                            {document:'holis.pdf', type:'pdf', nota:'Nota de la esa madre muajaja'},
                        ] }
                />
            </div>
            <div className="col-md-6 mt-5">
                <CardGeneral
                        title="Dirección"
                    >
                        <DireccionComponent 
                            direccion={ domicilio }
                        />
                </CardGeneral>
            </div>
        </div>
        
        <div className="row mt-5">
            <div className="col-md-6">
                <TablaRepresentanteContactoComponent 
                    key={'representantes '}
                    classBody={{ height: '135px' }}
                    title="Representantes"
                    headers={ ['Representantes', 'Tipo'] }
                    body={ representantes?.map( r => {
                        return {
                            id: r.iddatos_proveedores,
                            detalle: r.nombre,
                            nota: "",
                            tipo: r.tipo_representante,
                            activo: r.activo
                        }
                    }) }
                />
            </div>

            <div className="col-md-6">
                <TablaRepresentanteContactoComponent 
                    key={'contacto '}
                    classBody={{ height: '135px' }}
                    title="Contacto"
                    headers={ ['Contacto', 'Tipo'] }
                    body={ contactos?.map( r => {
                        return {
                            id: r.iddatos_proveedores_contacto,
                            detalle: r.detalle_contacto,
                            nota: r.notas,
                            tipo: r.descripcion_contacto,
                            activo: r.activo
                        }
                    }) }
                />
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-12">
                <CardGeneral
                    title='Inactivar'
                    className='cardGeneral-red'
                >
                    <InactivarSectionComponent
                        initialValue={ inactivo }
                    />
                </CardGeneral>
            </div>
        </div>

        <div className='w-100 mt-5'>
            <button type="button" className="btn btn-success w-100">Guardar</button>
        </div>


    </div>
  )
}
