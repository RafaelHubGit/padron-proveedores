import React, { useState } from 'react'
import { SelectComponent } from '../../generalComponents/selectPicker/SelectComponent'
import { DateTimePickerComponent } from '../../generalComponents/dateTimePicker/DateTimePickerComponent'

export const InactivarSectionComponent = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Selected date:", date);
    };

  return (
    <div className='inactivar-section-container row'>
        <div className='row col-md-6'>
            <div className="row">
                <div className='row'>
                    <div className='col-sm-9'>
                        <SelectComponent />
                    </div>
                    <div className='status-toggle mb-2 col-sm-3'>
                        <div className="form-check form-switch custom-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-3 '>
                <div className='col-sm-4 col-md-6'>
                    <DateTimePickerComponent
                        titulo="Fecha Inicio "
                        setDate={handleDateChange}
                    />
                </div>
                <div className='col-sm-4 col-md-6'>
                    <DateTimePickerComponent
                        titulo="Fecha Fin "
                        setDate={handleDateChange}
                    />
                </div>
                <div className='col-sm-4 col-md-12 mt-md-2'>
                    <DateTimePickerComponent
                        titulo="Fecha DOF "
                        setDate={handleDateChange}
                    />
                </div>
            </div>
        </div>
        <div className='col-md-6'>
            <div className="form-floating">
                <textarea className="form-control" style={{height: '150px'}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Observaciones</label>
            </div>
        </div>
    </div>
  )
}
