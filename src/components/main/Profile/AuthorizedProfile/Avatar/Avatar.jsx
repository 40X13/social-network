import SubmitIMGForm from "./SubmitIMGForm/SubmitIMGForm";

const Avatar = ({setAvatarThunk,avatar,defaultAvatar}) => {

    return (
        <div>
            <img src={avatar ? avatar : defaultAvatar} alt="ava"/>
            <SubmitIMGForm setIMG={setAvatarThunk}/>
        </div>
    );
}

export default Avatar;


