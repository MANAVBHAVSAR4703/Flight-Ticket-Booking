import axios from 'axios'

import { SEAT_SAVE_REQUEST,
    SEAT_SAVE_SUCCESS,
    SEAT_SAVE_FAIL,
} from "../constants/seatconstant";

export const SaveSeat = (flight,seatList) => async (dispatch) => {
        
try {
        dispatch({
            type: SEAT_SAVE_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `/api/book/`,
            {"flight":flight,"passenger_details":passenger_details},
            config
        )
        dispatch({
            type: SEAT_SAVE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: SEAT_SAVE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

