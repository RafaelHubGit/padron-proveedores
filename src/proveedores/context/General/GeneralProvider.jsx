import React, { useReducer } from 'react'
import { generalReducer } from './generalReducer'
import { types } from '../../types/types';
import { GeneralContext } from './GeneralContext';




export const GeneralProvider = ({ children }) => {

    const [state, dispatch] = useReducer( generalReducer, {} );

    const setHeight = ( id, height ) => {
        dispatch({ type: types.setHeight, payload: { id, height } });
    }

  return (
    <GeneralContext.Provider value={{ heights: state, setHeight }}>
        { children }
    </GeneralContext.Provider>
  )
}
