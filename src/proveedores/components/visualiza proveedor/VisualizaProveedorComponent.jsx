import React from 'react'
import { CardGeneral } from '../CardGeneral'
import { InactivoInfoContainer } from '../InactivoInfoContainer'
import { TableDocumentsComponent } from '../documentos tabla/TableDocumentsComponent'
import { TablaRepresentanteContactoComponent } from '../representante contacto tabla/TablaRepresentanteContactoComponent'

export const VisualizaProveedorComponent = () => {
  return (
    <div className='visualiza-proveedor-container'>
        <div className='inactivo-container mt-5'>
            <InactivoInfoContainer/>
        </div>
        <div className="detalle-proveedor mt-5">
            <div className="refrendo-wrap mb-3">
                <h3 className='fw-bold'> Refrendo: 5 </h3>
                <p className='d-flex flex-row'> <p className='fw-semibold me-2'>Fecha :</p>  13/05/2029 </p>
            </div>
            <div className="proveedor-datos-wrap row">
                <div className="proveedor-info col-6">
                    <p className='d-flex flex-row'> <p className='fw-semibold me-2'> Fecha de alta : </p>  13/05/2029 </p>
                    <p className='d-flex flex-row'> <p className='fw-semibold me-2'> Tipo Proveedor : </p>  Proveedor :)  </p>
                    <p className='d-flex flex-row'> <p className='fw-semibold me-2'> Web : </p> www.hola.com.mx </p>
                    <p className='d-flex flex-row'> <p className='fw-semibold me-2'>
                        Dirección: </p> Calle de las Palmas num 35, Colonia. Benito Bodoque, C.P. 56035, Estado. Oaxaca, Entidad. Chimalhuacan
                    </p>
                </div>
                <div className="giros-repse-wrap col-6">
                    <div className="giros-wrap">
                        <p className='fw-semibold'> Giros Comerciales : </p>
                        <small> Desarrollo de software, consultoría tecnológica, servicios de soporte técnico, venta de hardware y 
                                    componentes, seguridad informática, diseño y desarrollo web 
                        </small>
                    </div>
                    <div className="repse-wrap row">
                        <div className='col-6 col-sm-12'>
                            <p className='d-flex flex-row'> <p className='fw-semibold me-2'> Es repse : </p> Sí </p>
                            <p className='d-flex flex-row'> <p className='fw-semibold me-2'> Fecha repse : </p> 13/05/2029 </p>
                        </div>
                        <div className='col-6 col-sm-12'>
                            <button type="button" class="btn btn-primary w-100">Ver Documento Repse</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="observaciones-wrap mb-5">
                <p className='fw-bold'>Observaciones: </p>
                <p>
                    Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>
            <div className="documentos-wrap d-flex justify-content-center mb-5 row">
                <div className=' col-8 col-lg-6'>
                    <TableDocumentsComponent
                        key={'documentos'}
                        classBody={{ height: '135px' }}
                        headers={ ['Documento', 'Tipo'] }
                        body={ [
                                {document:'holis.pdf', type:'pdf', nota:'Nota de la esa madre muajaja'},
                                {document:'holis.pdf', type:'pdf', nota:'Nota de la esa madre muajaja'},
                                {document:'holis.pdf', type:'pdf', nota:'Nota de la esa madre muajaja'},
                                {document:'holis.pdf', type:'pdf', nota:'Nota de la esa madre muajaja'},
                                {document:'holis.pdf', type:'pdf', nota:'Nota de la esa madre muajaja'},
                                {document:'holis.pdf', type:'pdf', nota:'Nota de la esa madre muajaja'}
                            ] }
                    />
                </div>
            </div>
            <div className="representante-contacto-wrap d-flex justify-content-center row">
                <div className="representante-wrap col-md-8 col-lg-6">
                    <TablaRepresentanteContactoComponent 
                        key={'representantes '}
                        classBody={{ height: '135px' }}
                        title="Representantes"
                        headers={ ['Representantes', 'Tipo'] }
                        body={ [
                            {document:'Juacinto Ibarra de la Barrera', type:'Vendedor', nota:"La nota muajaja"},
                            {document:'Juan Gabriel Gonzalez Gonzalez', type:'Vendedor'},
                            {document:'Rogelio Rojas del Rosal', type:'Legal'},
                            {document:'Sancho Panza Quijotence ', type:'Legal'}
                        ] }
                    />
                </div>
                <div className="contacto-wrap col-md-8 col-lg-6  mt-5 mt-md-5 mt-lg-auto">
                    <TablaRepresentanteContactoComponent 
                        key={'contacto '}
                        classBody={{ height: '135px' }}
                        title="Contacto"
                        headers={ ['Representantes', 'Tipo'] }
                        body={ [
                            {document:'55-70-22-34-55', type:'Telefono', nota:"Nota del telefono"},
                            {document:'javier@gmail.com', type:'email'},
                            {document:'55-32-44-35', type:'Fax'},
                            {document:'55-33-24-35', type:'Beeper'}
                        ] }
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
