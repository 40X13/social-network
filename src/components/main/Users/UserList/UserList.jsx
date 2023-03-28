import User from "../User";

const UserList = ({
                      userList, followThunk, unFollowThunk
                      , followingInProgress,
                  }) => {
    return (
        userList.map(u => <User key={u.id} followThunk={followThunk}
                                unFollowThunk={unFollowThunk}
                                followingInProgress={followingInProgress}
                                user={u}
        />)
    );
}

export default UserList;