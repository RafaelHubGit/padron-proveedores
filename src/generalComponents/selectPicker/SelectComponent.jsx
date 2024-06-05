import React, { useState, useMemo, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export const SelectComponent = ({ options, initialValue = [], title = 'no title', isDisabled = false, isMulti = false, showSelected = false, onSelect, ...props }) => {
  const animatedComponents = makeAnimated();

  useEffect(() => {
    if (Array.isArray(options) && options.length > 0) {
      const selected = isMulti ?
        options.filter(option => Array.isArray(initialValue) && initialValue.includes(option.value)) :
        options.find(option => option.value === initialValue);

      setSelectedValue(selected);
    }
  }, [initialValue])

  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedValue(selectedOptions || (isMulti ? [] : null));
    onSelect(selectedOptions); // Llamar a la función onSelect con el valor seleccionado
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
                  {selectedValue.map(option => option.label).join(', ')}
                </div>
                <div>
                  Seleccionados: {selectedValue.length}
                </div>
              </div>
              : null
        }
      </div>
    </div>
  );
};
