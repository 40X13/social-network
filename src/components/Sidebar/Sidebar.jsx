import {NavLink} from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {

    return (
        <nav className={styles.sidebar}>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/dialogs'>Dialogs</NavLink>
            <NavLink to='/messages'>Messages</NavLink>
        </nav>
    );
}


export default Sidebar;