import axios from 'axios'
import {
    FLIGHT_LIST_FAIL,
    FLIGHT_LIST_REQUEST,
    FLIGHT_LIST_SUCCESS,
    FLIGHT_DETAILS_FAIL,
    FLIGHT_DETAILS_REQUEST,
    FLIGHT_DETAILS_SUCCESS
} from '../constants/flightconstant'

export const ListFlight=()=> async(dispatch)=>{
 try{
    dispatch({type:FLIGHT_LIST_REQUEST})
    const {data}=await axios.get('/api/flights/')
    dispatch({
        type:FLIGHT_LIST_SUCCESS,
        payload:data
    })

 }catch(error)
 {
    dispatch({
        type:FLIGHT_LIST_FAIL,
        payload:error.response && error.response.data.message?error.response.data.message:error.message,
    })
 }
}

export const listFlightDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: FLIGHT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/flights/${id}`)

        dispatch({
            type: FLIGHT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FLIGHT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}