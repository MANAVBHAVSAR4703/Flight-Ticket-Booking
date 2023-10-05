import {
    FLIGHT_LIST_FAIL,
    FLIGHT_LIST_REQUEST,
    FLIGHT_LIST_SUCCESS,
    FLIGHT_DETAILS_FAIL,
    FLIGHT_DETAILS_REQUEST,
    FLIGHT_DETAILS_SUCCESS
} from '../constants/flightconstant'
export const flightsListReducers=(state={flights:[]},action)=>{
switch(action.type)
{
    case FLIGHT_LIST_REQUEST:
        return { loading:true,flights:[]}
    case FLIGHT_LIST_SUCCESS:
        return {loading:false,flights:action.payload}
    case FLIGHT_LIST_FAIL:
        return {loading:false,error:action.payload}
    default:
        return state
}
}

export const listFlightDetails=(state={flight:[]},action)=>{
    switch(action.type)
    {
        case FLIGHT_DETAILS_REQUEST:
            return { loading:true,flight:[]}
        case FLIGHT_DETAILS_SUCCESS:
            return {loading:false,flight:action.payload}
        case FLIGHT_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}