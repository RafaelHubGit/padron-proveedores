import React, { useState, useMemo, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export const SelectComponent = ({ options, initialValue = [], title = 'no title', isDisabled = false, isMulti = false, showSelected = false,  ...props }) => {
    const animatedComponents = makeAnimated();

    // Asegura que options es un array y contiene elementos antes de intentar encontrar valores iniciales
    // const initialOptions = useMemo(() => {
    //     if (Array.isArray(options) && options.length > 0) {
    //         return isMulti ?
    //             options.filter(option => Array.isArray(initialValue) && initialValue.includes(option.value)) :
    //             options.find(option => option.value === initialValue);
    //     }
    //     return isMulti ? [] : null;
    // }, [initialValue]);

    useEffect(() => {
      if (Array.isArray(options) && options.length > 0) {
          const selected =  isMulti ?
              options.filter(option => Array.isArray(initialValue) && initialValue.includes(option.value)) :
              options.find(option => option.value === initialValue);

          setSelectedValue( selected );
      }
    }, [initialValue])
    
    

    const [selectedValue, setSelectedValue] = useState([]);

    const handleChange = (selectedOptions) => {
        setSelectedValue(selectedOptions || (isMulti ? [] : null));
    };

    return (
        <div className='select-container'>
            <div className="text-wrap">
                <p>{title}</p>
            </div>
            <div className='select-wrap'>
                <Select 
                    options={options}
                    value={selectedValue}
                    onChange={handleChange}
                    components={animatedComponents}
                    isDisabled={isDisabled}
                    isMulti={isMulti}
                    {...props}
                />
            </div>

            <div className='downText'>
              {
                !showSelected ? '' : 
                  isMulti
                  ? <div className='down-text-wrap'> 
                      <div>
                        { selectedValue.map(option => option.label).join(', ') } 
                      </div>
                      <div>
                        Seleccionados: { selectedValue.length }
                      </div>
                    </div> 
                  : null
              }
            </div>
        </div>
    );
};
