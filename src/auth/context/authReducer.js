import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            console.log('login : ', action.payload);
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        
        case types.logout:
            return {
                logged: false
            };

        default:
            return state; 
    }
}