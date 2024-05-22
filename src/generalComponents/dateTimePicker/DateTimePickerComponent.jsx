import React, { useEffect, useState } from 'react';

import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
// import './dateTimePicker.css';

export const DateTimePickerComponent = ({ titulo = "", setDate }) => {

    const [value, onChange] = useState(new Date());

    useEffect(() => {
      setDate( value );
    }, [value, setDate])
    

    onHandleValue => {
      
    }
  

  return (
    <div className="date-picker-container">
      <div className='text'>
        <p> { titulo } </p>
      </div>
      <DateTimePicker 
            calendarAriaLabel="Toggle calendar"
            onChange={onChange} 
            disableClock={true}
            format="dd/MM/yyyy"
            clearIcon={null}
            calendarIcon={<i className="material-icons">calendar_month</i>}
            className="my-custom-date-picker"
            value={value} />
     
    </div>
  );
};
