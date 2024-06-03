import React, { useContext, useEffect, useState } from 'react'
import { SelectComponent } from '../../generalComponents/selectPicker/SelectComponent'
import { DateTimePickerComponent } from '../../generalComponents/dateTimePicker/DateTimePickerComponent'
import { ProveedoresContext } from '../context/Proveedores/ProveedoresContext';

export const InactivarSectionComponent = ({ initialValue = null }) => {

    const { estadosProveedores } = useContext(ProveedoresContext);
    const [inactiva, setInactiva] = useState( {
        fecha_inicio: "",
        fecha_fin: "",
        fecha_diario_oficial_federacion: "",
        observacion: "",
        estado_proveedor: ""
    } );
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        // console.log("Selected date:", date);
    };

    useEffect(() => {
      if ( !initialValue  ){
        return;
      }
      setInactiva( initialValue );
    }, [initialValue])
    

  return (
    <div className='inactivar-section-container row'>
        <div className='row col-md-6'>
            <div className="row">
                <div className='row'>
                    <div className='col-sm-9'>
                        <SelectComponent 
                            options={ estadosProveedores?.map( ep => {
                                return {
                                    value: ep.idestado_proveedor,
                                    label: ep.estado_proveedor
                                }
                            } ) }
                            initialValue = { initialValue?.idestado_proveedor }
                            title= "Estado Proveedor"
                            // isDisabled = { proveedor?.activo == 0 ? true : false }
                        />
                    </div>
                    <div className='status-toggle mb-2 col-sm-3'>
                        <div className="form-check form-switch custom-switch">
                            <input 
                                className="form-check-input" 
                                type="checkbox"
                                checked={ inactiva?.fecha_inicio ? 1 : 0 }
                                role="switch" 
                                id="inactivaSwitch" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3 '>
                <div className='col-sm-4 col-md-6'>
                    <DateTimePickerComponent
                        titulo="Fecha Inicio "
                        setDate={handleDateChange}
                        initialValue={ inactiva?.fecha_inicio }
                    />
                </div>
                <div className='col-sm-4 col-md-6'>
                    <DateTimePickerComponent
                        titulo="Fecha Fin "
                        setDate={handleDateChange}
                        initialValue={ inactiva?.fecha_fin }
                    />
                </div>
                <div className='col-sm-4 col-md-12 mt-md-2'>
                    <DateTimePickerComponent
                        titulo="Fecha DOF "
                        setDate={handleDateChange}
                        initialValue={ inactiva?.fecha_diario_oficial_federacion }
                    />
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <div className="form-floating">
                <textarea 
                    className="form-control" 
                    style={{height: '150px'}} 
                    placeholder="Observaciones" 
                    id="observacionInactivoTextareaId"
                    value={ inactiva?.observacion }
                ></textarea>
                <label htmlFor="observacionInactivoTextareaId">Observaciones</label>
            </div>
        </div>
    </div>
  )
}
