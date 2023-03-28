//Users branch

const selectUsersBranch=state=>{
    return state.users
}
export const selectUserList = state => {
    return selectUsersBranch(state).userList
}

export const selectIsFetching = state => {
    return selectUsersBranch(state).isFetching
}
export const selectQueryParams = state => {
    return selectUsersBranch(state).queryParams
}

export const selectUsersTotalCount=state=>{
    return selectUsersBranch(state).usersTotalCount
}
export const selectFollowingInProgress=state=>{
    return selectUsersBranch(state).followingInProgress
}

//Auth branch
const selectAuthBranch=state=>{
    return state?.auth
}
export const selectIsAuth=state=>{
    return selectAuthBranch(state).isAuth
}
export const selectAuthUser=state=>{
    return selectAuthBranch(state).authUser;
}
export const selectCaptcha=state=>{
    return selectAuthBranch(state).captcha
}

//App branch

const selectAppBranch=state=>{
    return state.app
}
export const selectInitialaized=state=>{
    return selectAppBranch(state).isInitialized;
}

//Profile branch
const selectProfileBranch=state=>{
    return state.profile
}
export const selectProfile=state=>{
    return selectProfileBranch(state).profile
}
export const selectIsProfileSet=state=>{
    return selectProfileBranch(state).isProfileSet
}
export const selectProfileStatus=state=>{
    return selectProfileBranch(state).profileStatus
}

