import {authApi} from "../../api/api";

const IS_AUTORIZED = 'sn/auth-reducer/IS_AUTORIZED';
const SET_AUTH_USER = 'sn/auth-reducer/SET_AUTH_USER';
const CAPTCHA = 'sn/auth-reducer/CAPTCHA';

const initialState = {
    authUser: null,
    isAuth: false,
    captcha: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER:
            return {...state, authUser: action.authUser}
        case IS_AUTORIZED:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            }

        default:
            return state;
    }
}

const setAuthUserAC = (authUser) => {
    return {
        type: SET_AUTH_USER,
        authUser
    }
}
const isAutorizedAC = (isAuth) => {
    return {
        type: IS_AUTORIZED,
        isAuth
    }
}
const captchaAC = (captcha) => {
    return {
        type: CAPTCHA,
        captcha,
    }
}

export const authThunk = () => async dispatch => {
    const res = await authApi.auth();
    if (res.resultCode === 0) {
        dispatch(setAuthUserAC(res.data));
        dispatch(isAutorizedAC(true));
    }
}
export const loginThunk = (loginData, setStatus) => async dispatch => {
    const data = await authApi.login(loginData);
    if (data.resultCode === 0) {
        dispatch(authThunk());
        dispatch(captchaAC(null));
    } else {
        if (data.resultCode === 10) {
            dispatch(setCaptchaThunk());
        } else {
            setStatus(data.messages)
        }
    }
}
export const logoutThunk = () => async dispatch => {
    if (window.confirm('are you sure?')) {
        const data = await authApi.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserAC(null));
            dispatch(isAutorizedAC(false));
        }
    }
}
const setCaptchaThunk = () => async dispatch => {
    const res = await authApi.captcha();
    dispatch(captchaAC(res.url));
}

export default authReducer;