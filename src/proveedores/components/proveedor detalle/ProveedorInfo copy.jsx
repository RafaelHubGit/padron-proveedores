import React, { useState } from 'react'

import { DateTimePickerComponent } from '../../../generalComponents/dateTimePicker/DateTimePickerComponent';
import { SubirDocumento } from '../../../generalComponents/SubirDocumento';
import { SelectComponent } from '../../../generalComponents/selectPicker/SelectComponent';
import { CardGeneral } from '../CardGeneral';
import { TableDocumentsComponent } from '../documentos tabla/TableDocumentsComponent';
import { DireccionComponent } from '../DireccionComponent';
import { InactivarSectionComponent } from '../InactivarSectionComponent';
// import 'react-clock/dist/Clock.css';

export const ProveedorInfo = () => {

    const [value, onChange] = useState(new Date());


    const [selectedDate, setSelectedDate] = useState(null);


    /**
     * Handles the change of the selected date.
     *
     * @param {Date} date - The selected date.
     * @returns {void}
     */
    const handleDateChange = (date) => {
        // crea un if, si esta null que no haga nada y si no que haga el set

        setSelectedDate(date);
        console.log("Selected date:", date);
    };

  return (
    <div className='proveedor-info-container mt-4 row'>
        <div className='row'>
            <div className='col-md-6 col-sm-12 mb-4'>
                <div className='repse-fecha-container '>
                    <div className='fechas-container d-flex justify-content-between mb-4'>
                        <DateTimePickerComponent
                            titulo="Fecha de alta "
                            setDate={handleDateChange}
                        />
                        <DateTimePickerComponent
                            titulo="Fecha de refrendo "
                            setDate={handleDateChange}
                        />
                    </div>
                    <div className='repse-container mb-3'>
                        <div className='repse-document-wrap row'>
                            <div className="repse-wrap col-sm-12 col-md-6">
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Es repse
                                    </label>
                                </div>
                                <DateTimePickerComponent
                                    titulo="Fecha repse "
                                    setDate={handleDateChange}
                                />
                            </div>
                            <div className='col-sm-12 col-md-6'>
                                <SubirDocumento/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-floating">
                            <textarea 
                                className="form-control" 
                                placeholder="Leave a comment here" 
                                id="floatingTextarea2" 
                                style={{ height: '100px' }} // Usar el objeto de estilo en React
                            ></textarea>
                            <label htmlFor="floatingTextarea2">Observaciones</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-12' >
                    <div className='boton-wrap mb-3'>
                        <button type="button" class="btn btn-primary w-100"> Nuevo Refrendo </button>
                    </div>
                    <div className='tipo-giros-wrap mb-3'>

                        <SelectComponent 
                            options= {[
                                { value: 'chocolate', label: 'Tipo Proveedor 1' },
                                { value: 'strawberry', label: 'Tipo Proveedor 2' },
                                { value: 'vanilla', label: 'Tipo Proveedor 3' }
                              ]}
                              title= "Tipo Proveedor"
                        />
                        <SelectComponent 
                            title= "Giros Comerciales"
                            closeMenuOnSelect={false}
                            // defaultValue={[colourOptions[4], colourOptions[5]]}
                            isMulti
                            showSelected = {true}
                            options= {[
                                { value: 'chocolate', label: 'Tipo Proveedor 1' },
                                { value: 'strawberry', label: 'Tipo Proveedor 2' },
                                { value: 'vanilla', label: 'Tipo Proveedor 3' },
                                { value: 'vanilla2', label: 'Tipo Proveedor 2' },
                                { value: 'vanilla3', label: 'Tipo Proveedor 4' }
                              ]}
                        />
                    </div>
                    <div className='web-wrap d-flex align-items-center mb-3 mt-5'>
                        <div className="form-floating w-100">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Página Web</label>
                        </div>
                    </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Tiene Documentos
                    </label>
                </div>
                <div className='mt-4'>
                    <CardGeneral
                        title="Documetos"
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>

                            <button type="button" className="btn btn-success">Nuevo</button>
                        </div>
                        <TableDocumentsComponent
                            key={'documentos'}
                            classBody={{ height: '135px' }}
                            headers={ ['Documento', 'Tipo'] }
                            body={ [
                                    {document:'holis.pdf', type:'pdf'},
                                    {document:'holis.pdf', type:'pdf'},
                                    {document:'holis.pdf', type:'pdf'},
                                    {document:'holis.pdf', type:'pdf'},
                                    {document:'holis.pdf', type:'pdf'},
                                    {document:'holis.pdf', type:'pdf'}
                                ] }
                        />
                    </CardGeneral>
                </div>
            </div>
            <div className='col-md-6 mt-5'>
                <CardGeneral
                        title="Dirección"
                    >
                        <DireccionComponent />
                </CardGeneral>
            </div>
        </div>

        <div className="row mt-5">
            <div className='col-md-6'>
                <CardGeneral
                    title="Representantes"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>

                        <button type="button" className="btn btn-success">Nuevo</button>
                    </div>
                    <TableDocumentsComponent
                        key={'representantes '}
                        classBody={{ height: '135px' }}
                        headers={ ['Representantes', 'Tipo'] }
                        body={ [
                            {document:'Juacinto Ibarra de la Barrera', type:'Vendedor'},
                            {document:'Juan Gabriel Gonzalez Gonzalez', type:'Vendedor'},
                            {document:'Rogelio Rojas del Rosal', type:'Legal'},
                            {document:'Sancho Panza Quijotence ', type:'Legal'}
                        ] }
                    />
                </CardGeneral>
            </div>
            <div className='col-md-6'>
                <CardGeneral
                    title="Contacto"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>

                        <button type="button" className="btn btn-success">Nuevo</button>
                    </div>
                    <TableDocumentsComponent
                        key={'contactos'}
                        classBody={{ height: '135px' }}
                        headers={ ['Contacto', 'Tipo'] }
                        body={ [
                                {document:'55-70-22-34-55', type:'Telefono'},
                                {document:'javier@gmail.com', type:'email'},
                                {document:'55-32-44-35', type:'Fax'},
                                {document:'55-33-24-35', type:'Beeper'}
                            ] }
                    />
                </CardGeneral>
            </div>
        </div>

        <div className='mt-5'>
            <CardGeneral
                title='Inactivar'
                className='cardGeneral-red'
            >
                <InactivarSectionComponent />
            </CardGeneral>
        </div>

        <div className='w-100 mt-5'>
            <button type="button" className="btn btn-success w-100">Guardar</button>
        </div>
    </div>
  )
}
