import { types } from "../../types/types";


export const proveedoresReducer = ( state= {}, action ) => {

    switch ( action.type ) {
        case types.selectedProveedor:
            return {
                ...state,
                proveedorSelected: action.payload
            }
        case types.setProveedor:
            return {
                ...state,
                proveedor: action.payload
            }

        case types.setGirosComerciales:
            return {
                ...state,
                girosComerciales: action.payload
            }
        
        case types.setEstadosProveedores:
            return {
                ...state,
                estadosProveedores: action.payload
            }

        default:
            return state;
    } 

}
