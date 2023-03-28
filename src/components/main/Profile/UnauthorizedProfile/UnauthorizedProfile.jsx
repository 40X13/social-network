const UnauthorizedProfile = ({profile, isAuth, defaultAvatar, profileStatus}) => {
    return (
        <div>
            <img src={profile.photos.large ? profile.photos.large : defaultAvatar} alt="avatar"/>
            <span>{profile.fullName}</span><br/>
            <span>{profileStatus}</span>
            {
                !isAuth
                &&
                <div>
                    {
                        Object.keys(profile.contacts)
                        .map(contact=>{
                            return(
                                <div>
                                <span>{contact}</span>
                                <span>{profile.contacts[contact]}</span>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default UnauthorizedProfile