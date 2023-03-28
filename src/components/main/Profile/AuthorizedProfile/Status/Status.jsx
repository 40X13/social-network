import { useState} from "react";

const Status = ({profileStatus, setStatusThunk,}) => {

    const [inProgress, setInProgress] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(profileStatus);

    return (
        inProgress ?
            <div>
                <input autoFocus
                       onChange={e => setCurrentStatus(e.currentTarget.value)}
                       onBlur={() => {
                           setStatusThunk(currentStatus);
                           setInProgress(false)
                       }}
                       value={currentStatus}
                       type="text"
                />
            </div>
            :
            <div>
                <span onDoubleClick={() => {
                    setInProgress(true)
                }}>{currentStatus}</span>
            </div>
    );
}

export default Status;