import Avatar from "./Avatar/Avatar";
import Status from "./Status/Status";
import Contacts from "./Contacts/Contacts";
import Posts from "./Posts/Posts";

const AuthorizedProfile = ({profile,defaultAvatar,setProfileDescriptionThunk,
                               setAvatarThunk,setStatusThunk,profileStatus}) => {
    return (
        <div>
            <h1>{profile.fullName}</h1>
            <Avatar
                setAvatarThunk={setAvatarThunk}
                avatar={profile.photos.large}
                defaultAvatar={defaultAvatar}
            />
            <Status
                profileStatus={profileStatus}
                setStatusThunk={setStatusThunk}
            />
            <Contacts setProfileDescriptionThunk={setProfileDescriptionThunk} profile={profile}/>
            <Posts/>
        </div>
    );
}

export default AuthorizedProfile

