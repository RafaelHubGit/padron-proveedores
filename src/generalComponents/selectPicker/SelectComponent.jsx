import React, { useState } from 'react'
import Select from 'react-select'

import makeAnimated from 'react-select/animated';

export const SelectComponent = ( { options, showSelected = false, title = 'no title', ...props }) => {

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]

  const [selectedOption, setSelectedOption] = useState([]);

  const animatedComponents = makeAnimated();

  const handleChange = (selectedOption) => {
    if (Array.isArray(selectedOption)) {
      setSelectedOption(selectedOption.map(option => option.value));
      console.log(selectedOption.map(option => option.value));
    } else if (selectedOption) {
      setSelectedOption([selectedOption.value]);
      console.log(selectedOption.value);
    } else {
      setSelectedOption([]);
    }
  };

  return (
    <div className='select-container'>
        <div className="text-wrap">
          <p>
            { title }
          </p>
        </div>
        <div className='select-wrap'>
          <Select 
            options={options} 
            { ...props }
            onChange={handleChange}
            components={animatedComponents}
          />
        </div>

      <div className='downText'>
        {
          !showSelected ? '' : 
            selectedOption && selectedOption.length > 0
            ? <div className='down-text-wrap'> 
                <div>
                  { selectedOption.map(option => option).join(', ') } 
                </div>
                {/* <div>
                  Seleccionados: { selectedOption.length }
                </div> */}
              </div> 
            : null
        }
      </div>

    </div>
  )
}
