import {profileApi} from "../../api/api";
import store from "../redux";

const ADD_POST = 'sn/profile-reducer/ADD_POST';
const GET_PROFILE = 'sn/profile-reducerGET_PROFILE';
const IS_PROFILE_SET = 'sn/profile-reducerIS_PROFILE_SET';
const SET_STATUS = 'sn/profile-reducerSET_STATUS';
const SET_AVATAR = 'sn/profile-reducer/SET_AVATAR';

const initialState = {
    profile: {},
    isProfileSet: false,
    profileStatus: null,
    posts: [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'HI'},
        {id: 3, text: 'Were are the people?'},
        {id: 4, text: 'aaaa'},
        {id: 5, text: 'OMG'},
    ],

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: new Date().toISOString(),
                text: action.text
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case
        GET_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            }
        case
        IS_PROFILE_SET:
            return {
                ...state,
                isProfileSet: action.isProfileSet,
            }
        case
        SET_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        case
        SET_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},

            }
        default:
            return state;
    }
}

export const addPostAC = text => {
    return {
        type: ADD_POST,
        text,
    }
}
const getProfileAC = profile => {
    return {
        type: GET_PROFILE,
        profile
    }
}
const isProfileSetAC = isProfileSet => {
    return {
        type: IS_PROFILE_SET,
        isProfileSet
    }
}
const setStatusAC = status => {
    return {
        type: SET_STATUS,
        status
    }
}
const setAvatarAC = photos => {
    return {
        type: SET_AVATAR,
        photos
    }
}

export const getProfileThunk = (idParams) => async dispatch => {
    const authUserId = store.getState().auth.authUser.id;
    try {
        dispatch(isProfileSetAC(false));
        if (idParams || authUserId) {
            const data = await profileApi.getProfile(idParams, authUserId);
            dispatch(getProfileAC(data));
            dispatch(isProfileSetAC(true));
        }
    } catch (er) {
        window.alert(er.message)
    }
}
export const setStatusThunk = status => async dispatch => {
    const data = await profileApi.setStatus(status)
    if (data.resultCode === 0) dispatch(setStatusAC(status));
}
export const setProfileDescriptionThunk = (profile, setStatus, setEditMode, setSubmitting) => async dispatch => {
    const data = await profileApi.setProfileInfo(profile);
    if (data.resultCode !== 0) {
        setStatus(data.messages);
        setSubmitting(false);
    } else {
        setEditMode(false);
    }
}
export const getStatusThunk = (idParams, authUserId) => async dispatch => {
    const authUserId = store.getState().auth.authUser.id;
    try {
        if (idParams || authUserId) {
            const data = await profileApi.getStatus(idParams, authUserId);
            dispatch(setStatusAC(data));
        }
    } catch (er) {
        window.alert(er.message)
    }
}
export const setAvatarThunk = (photos) => async dispatch => {
    const data = await profileApi.setPhoto(photos);
    if (data.resultCode === 0) dispatch(setAvatarAC(data.data.photos));
}

export default profileReducer;
