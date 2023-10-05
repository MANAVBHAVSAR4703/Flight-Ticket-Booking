import {applyMiddleware,combineReducers,legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { flightsListReducers } from './reducers/flightsreducer';
import { listFlightDetails } from './reducers/flightsreducer';
import { AddSeatReducers } from './reducers/seatreducer';
import { userLoginReducer,userRegisterReducer } from './reducers/userreducer';
const reducer=combineReducers({
    flightList:flightsListReducers,
    flightDetails:listFlightDetails,
    seatSave:AddSeatReducers,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    
})
const userInfoFromStorage=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null
const initialState={userLogin:{userInfo:userInfoFromStorage}}
const middleware=[thunk]
const store=legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))



export default store