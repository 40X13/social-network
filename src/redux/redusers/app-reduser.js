import {authThunk} from "./auth-reducer";

const IS_INITIALIZED = 'sn/app-reducer/IS_INITIALIZED';

const initialState = { isInitialized: false,}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state;
    }
}

const isInitializedAC = isInitialized => {
    return {
        type: IS_INITIALIZED,
        isInitialized
    }
}

export const initializeThunk = () => async dispatch => {
   await dispatch(authThunk());
   dispatch(isInitializedAC(true));
}

export default appReducer;