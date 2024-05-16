import { types } from "../types/types";

export const generalReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.setHeight:
            return {
                ...state,
                [action.payload.id]: action.payload.height
            }
    
        default:
            return state;
    }

}