import {connect} from "react-redux";
import {useEffect} from "react";
import {
    isFetchingAC,
    loadUsersAC,
    setCurrentPageAC,
    setUserTotalCountAC,
    getUsersThunk, followThunk, unFollowThunk,

} from "../../../redux/redusers/users-reducer";
import Loader from "../../Loader/Loader";
import React from "react";
import Pagination from "./Pagination/Pagination";
import {
    selectFollowingInProgress,
    selectIsFetching,
    selectQueryParams,
    selectUserList,
    selectUsersTotalCount,

} from "../../../redux/reselect";
import UserList from "./UserList/UserList";

const Users = ({
                   userList, isFetching, queryParams, setCurrentPageAC, usersTotalCount,
                   followingInProgress, getUsersThunk, followThunk, unFollowThunk,
               }) => {

    useEffect(() => {
            getUsersThunk(queryParams.page, queryParams.count);
        }, [queryParams.page]
    );

    return (
        <>
            <Pagination setCurrentPageAC={setCurrentPageAC}
                        queryParams={queryParams}
                        usersTotalCount={usersTotalCount}
            />
            {!isFetching
                ?
                <Loader/>
                :
                <UserList userList={userList}
                          followThunk={followThunk}
                          unFollowThunk={unFollowThunk}
                          followingInProgress={followingInProgress}
                />
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        userList: selectUserList(state),
        isFetching: selectIsFetching(state),
        queryParams: selectQueryParams(state),
        usersTotalCount: selectUsersTotalCount(state),
        followingInProgress: selectFollowingInProgress(state),
    }
}
const mapDispatchToProps = () => {
    return {
        loadUsersAC,
        isFetchingAC,
        setUserTotalCountAC,
        setCurrentPageAC,
        getUsersThunk,
        followThunk,
        unFollowThunk,

    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Users);









