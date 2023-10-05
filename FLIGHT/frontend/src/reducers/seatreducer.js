import { SEAT_SAVE_REQUEST,
    SEAT_SAVE_SUCCESS,
    SEAT_SAVE_FAIL,
} from "../constants/seatconstant";


export const AddSeatReducers = (state =[], action) => {
    console.log(action.payload);

    switch (action.type) {
        case SEAT_SAVE_REQUEST:
            return { loading: true};
        case SEAT_SAVE_SUCCESS:
            return { loading: false, state:action.payload}; // Append the payload to the existing state array
        case SEAT_SAVE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
