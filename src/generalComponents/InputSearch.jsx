import React from 'react'

export const InputSearch = ({ onSearchTextChange, className = ''  }) => {

    const handleChange = (event) => {
        onSearchTextChange(event.target.value);
    };

  return (
    <div className='searchContainer ${ className }'>
        <input type="text" onChange={ handleChange } />
        <span className="material-symbols-outlined">
            search
        </span>
    </div>
  )
}
