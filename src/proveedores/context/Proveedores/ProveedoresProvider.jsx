import React, { useReducer } from 'react'
import { ProveedoresContext } from './ProveedoresContext'
import { proveedoresReducer } from './proveedoresReducer';
import { types } from '../../types/types';

export const ProveedoresProvider = ({ children }) => {

    const [state, dispatch] = useReducer( proveedoresReducer, {} );

    const setProveedorSelected = ( proveedor ) => {
        dispatch({
            type: types.setProveedorSelected,
            payload: proveedor
        })
    }

    const setProveedor = ( proveedor ) => {
        dispatch({
            type: types.setProveedor,
            payload: proveedor
        })
    }

    const setGirosComerciales = ( giroC ) => {
        dispatch({
            type: types.setGirosComerciales,
            payload: giroC
        })
    }

    const setEstadosProveedores = ( estadoP ) => {
        dispatch({
            type: types.setEstadosProveedores,
            payload: estadoP
        })
    } 
  return (
    <ProveedoresContext.Provider value={{
            ...state,
            setProveedorSelected,
            setProveedor,
            setGirosComerciales,
            setEstadosProveedores
        }} >
        { children }
    </ProveedoresContext.Provider>
  )
}
