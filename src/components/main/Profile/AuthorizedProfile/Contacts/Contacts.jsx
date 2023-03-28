import {useState} from "react";
import EditContactForm from "./EditContactForm";
import style from '../../Profile.module.css'

const Contacts = ({profile, setProfileDescriptionThunk}) => {
    const [editMode, setEditMode] = useState(false);

    const handleEditMode = el => {
        if (el.target.tagName === 'SPAN') {
            setEditMode(true);
        }
    }

    return (

        !editMode ?
            <div className={style.profileInfo} onDoubleClick={handleEditMode}>
                <div>
                    <span>fullName: </span>
                    <span>{profile.fullName}</span>
                </div>
                <div>
                    <span>aboutMe: </span>
                    <span>{profile.aboutMe}</span>
                </div>
                <div>
                    <span>Looking for a job: </span>
                    <span>{profile.lookingForAJob}</span>
                </div>
                <div>
                    <span>looking for a job description: </span>
                    <span>{profile.lookingForAJobDescription}</span>
                </div>

                {Object.keys(profile.contacts).map(k => {
                    return (
                        <div key={k}>
                            <span>{k}:</span>
                            <span>
                                {profile.contacts[k] ||  `enter you ${k} here` }
                            </span>

                        </div>)
                })}

            </div>

            :
            <EditContactForm setProfileDescriptionThunk={setProfileDescriptionThunk} profile={profile} contacts={profile.contacts} setEditMode={setEditMode}/>

    );
}

export default Contacts;