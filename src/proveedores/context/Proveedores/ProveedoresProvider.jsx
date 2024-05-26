import React, { useReducer } from 'react'
import { ProveedoresContext } from './ProveedoresContext'
import { proveedoresReducer } from './proveedoresReducer';
import { types } from '../../types/types';

export const ProveedoresProvider = ({ children }) => {

    const [state, dispatch] = useReducer( proveedoresReducer, {} );

    const selectedProveedor = ( proveedor ) => {
        dispatch({
            type: types.selectedProveedor,
            payload: proveedor
        })
    }

    const setProveedor = ( proveedor ) => {
        dispatch({
            type: types.setProveedor,
            payload: proveedor
        })
    }

  return (
    <ProveedoresContext.Provider value={{
            ...state,
            selectedProveedor,
            setProveedor
        }} >
        { children }
    </ProveedoresContext.Provider>
  )
}
