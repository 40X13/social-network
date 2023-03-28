import styles from './Messages.module.css';
import {compose} from "redux";

import WithRedirectHOK from "../../../hoc/WithRedirectHOK";

const Messages = () => {

    return (
        <div className={styles.messages}>Messages</div>
    );
}

export default compose(
    WithRedirectHOK
)(Messages)
