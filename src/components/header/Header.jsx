import styles from './Header.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <img src="/img/header-logo.png" alt="header-logo"/>
            <input type="text" placeholder='Search'/>
        </div>
    );
}

export default Header;