
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<nav className={styles.sidebar}>
			<NavLink to='.'>Profile</NavLink>
			<NavLink to='dialogs'>Dialogs</NavLink>
			<NavLink to='messages'>Messages</NavLink>
		</nav>
	);
}

export default Sidebar;