import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {connect} from "react-redux";
import {compose} from "redux";

import {
    getProfileThunk,
    getStatusThunk,
    setAvatarThunk,
    setStatusThunk,
    setProfileDescriptionThunk
} from "../../../redux/redusers/profile-reduser";

import defaultAvatar from "../../../pic/avatar-is-empty.png";
import WithRedirectHOK from "../../../hoc/WithRedirectHOK";
import Loader from "../../Loader/Loader";
import UnauthorizedProfile from "./UnauthorizedProfile/UnauthorizedProfile";
import AuthorizedProfile from "./AuthorizedProfile/AuthorizedProfile";
import {
    selectAuthUser,
    selectIsAuth,
    selectIsProfileSet,
    selectProfile,
    selectProfileStatus
} from "../../../redux/reselect";

const Profile = ({
                     getProfileThunk, profile, isProfileSet, getStatusThunk, setStatusThunk,
                     profileStatus, authUserId, isAuth, setAvatarThunk, setProfileDescriptionThunk
                 }) => {
    const {idParams} = useParams();

    useEffect(() => {
        getProfileThunk(idParams)
    }, [idParams]);
    useEffect(() => {
        getStatusThunk(idParams)
    }, [profileStatus]);


    if (!isProfileSet) return <Loader/>
    return (
        <>
            {
                (idParams === authUserId || authUserId && !idParams)
                    ?
                    <AuthorizedProfile
                        profile={profile}
                        profileStatus={profileStatus}
                        setStatusThunk={setStatusThunk}
                        setAvatarThunk={setAvatarThunk}
                        setProfileDescriptionThunk={setProfileDescriptionThunk}
                        defaultAvatar={defaultAvatar}
                    />
                    :
                    <UnauthorizedProfile profileStatus={profileStatus}
                                         defaultAvatar={defaultAvatar}
                                         isAuth={isAuth}
                                         profile={profile}
                    />
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        profile: selectProfile(state),
        authUserId: selectAuthUser(state)?.id.toString()||'',
        isAuth: selectIsAuth(state),
        isProfileSet: selectIsProfileSet(state),
        profileStatus: selectProfileStatus(state)
    }
}

const mapDispatchToProps = () => {
    return {
        getProfileThunk,
        setStatusThunk,
        getStatusThunk,
        setAvatarThunk,
        setProfileDescriptionThunk
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps()),
    WithRedirectHOK
)(Profile);





