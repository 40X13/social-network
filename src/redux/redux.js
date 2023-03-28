import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import profileReducer from "./redusers/profile-reduser";
import usersReducer from "./redusers/users-reducer";
import authReducer from "./redusers/auth-reducer";
import appReduser from "./redusers/app-reduser";
import thunk from "redux-thunk";


const reducers=combineReducers({
    profile:profileReducer,
    users:usersReducer,
    auth:authReducer,
    app:appReduser,
});

const store=createStore(reducers, applyMiddleware(thunk));

export default store;




