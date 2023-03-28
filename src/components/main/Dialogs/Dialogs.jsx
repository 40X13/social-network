import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.users}>
                <NavLink to='/dialogs/pasha'>Pasha</NavLink>
                <NavLink to='/dialogs/olga'>Olga</NavLink>
                <NavLink to='/dialogs/sasha'>Sasha</NavLink>
                <NavLink to='/dialogs/ira'>Ira</NavLink>
                <NavLink to='/dialogs/denis'>Denis</NavLink>
            </div>
            <div className={styles.dialogs}>
                <span>hi</span>
                <span>Hello</span>
                <span>I am here</span>
            </div>

        </div>
    );
}

export default Dialogs;