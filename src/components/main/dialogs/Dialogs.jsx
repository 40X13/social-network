import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.users}>
                <NavLink to='pasha'>Pasha</NavLink>
                <NavLink to='olga'>Olga</NavLink>
                <NavLink to='sasha'>Sasha</NavLink>
                <NavLink to='ira'>Ira</NavLink>
                <NavLink to='denis'>Denis</NavLink>
            </div>
            <div className={styles.dialogs}>
                <span>hi</span>
                <span>Hello</span>
                <span>I am here</span>
            </div>

        </div>
    )
        ;
}

export default Dialogs;