import {usersApi, followApi} from "../../api/api";

const LOAD_USERS = 'sn/users-reducer/LOAD_USERS';
const FOLLOW_UNFOLLOW = 'sn/users-reducer/FOLLOW_UNFOLLOW';
const IS_FETCHING = 'sn/users-reducer/IS_FETCHING';
const TOTAL_COUNT = 'sn/users-reducer/TOTAL_COUNT';
const SET_CURRENT_PAGE = 'sn/users-reducer/SET_CURRENT_PAGE';
const TOGGLE_IS_FOLLOWING = 'sn/users-reducer/TOGGLE_IS_FOLLOWING';

const initialState = {
    userList: [],
    usersTotalCount: 0,
    isFetching: false,
    followingInProgress: [],
    queryParams: {
        count: 10,
        page: 1,
    },
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                userList: [...action.userList]
            }
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                userList: state.userList.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                }),
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOTAL_COUNT:
            return {
                ...state,
                usersTotalCount: action.usersTotalCount,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                queryParams: {...state.queryParams, page: action.currentPage}
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.idInProgress]
                    : state.followingInProgress.filter(id => id !== action.idInProgress)
            }

        default:
            return state;

    }
}

export const loadUsersAC = (userList) => {
    return {
        type: LOAD_USERS,
        userList,
    }
}
const followUnFollowAC = (id) => {
    return {
        type: FOLLOW_UNFOLLOW,
        id
    }
}
export const isFetchingAC = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching,
    }
}
export const setUserTotalCountAC = (usersTotalCount) => {
    return {
        type: TOTAL_COUNT,
        usersTotalCount,
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
const toggleIsFollowing = (isFollowing, idInProgress) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFollowing,
        idInProgress,
    }
}

export const getUsersThunk = (page, count) => async dispatch => {
    dispatch(isFetchingAC(false));
    const data = await usersApi.getUsers(page, count)
    dispatch(loadUsersAC(data.items));
    dispatch(setUserTotalCountAC(data.totalCount));
    dispatch(isFetchingAC(true));
}
export const followThunk = (idForFollow) => async dispatch => {
    if (idForFollow) {
        dispatch(toggleIsFollowing(true, idForFollow));
        const data = await followApi.follow(idForFollow);
        if (!data.resultCode) {
            dispatch(followUnFollowAC(idForFollow));
            dispatch(toggleIsFollowing(false, idForFollow));
        }
    }
}
export const unFollowThunk = (idForUnFollow) => async dispatch => {
    if (idForUnFollow) {
        dispatch(toggleIsFollowing(true, idForUnFollow));
        const data = await followApi.unFollow(idForUnFollow)
        if (!data.resultCode) {
            dispatch(followUnFollowAC(idForUnFollow));
            dispatch(toggleIsFollowing(false, idForUnFollow));
        }
    }
}

export default usersReducer;