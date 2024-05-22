import React, { useContext, useEffect, useRef, useState } from 'react'
import { InputSearch } from '../../../generalComponents/InputSearch'
import { ProveedorTable } from './ProveedorTable';
import { GeneralContext } from '../../context/GeneralContext';
import useDivHeight from '../../hooks/useDivHeight';



export const ProveedoresSearch = () => {

    const [searchContainerRef, searchContainerHeight] = useDivHeight();
    const [searchText, setSearchText] = useState('');
    const { setHeight } = useContext( GeneralContext );


    useEffect(() => {
        setHeight( 'searchContainer', searchContainerHeight );
    }, [searchContainerHeight])
    

    const handleSearchTextChange = (text) => {
        setSearchText(text);
      };

  return (
    <div className="container mt-4">
        <div className='row'>
            <div ref={ searchContainerRef }  className='row mb-4 align-items-center'>
                <div className='col-md-10 col-sm.12'>
                    <InputSearch onSearchTextChange={ handleSearchTextChange } />
                </div>
                <div className='col-md-2 col-sm-12 mt-sm-2 '>
                    <button type="button" className="btn btn-success w-100">Nuevo</button>
                </div>
            </div>
            <div className='' >
                <ProveedorTable />
            </div>
        </div>
    </div>
  )
}
