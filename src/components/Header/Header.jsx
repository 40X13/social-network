import {connect} from "react-redux";
import {Link} from "react-router-dom";

import headerLogo from '../../pic/header-logo.png';
import styles from './Header.module.css';
import {logoutThunk} from "../../redux/redusers/auth-reducer";
import Button from "../../UI-components/Button";
import {selectAuthUser, selectIsAuth} from "../../redux/reselect";


const Header = ({logoutThunk, authUser, isAuth}) => {

    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div>
                    <img src={headerLogo} alt="header-logo"/>
                    <input type="text" placeholder='Search'/>
                </div>

                <div>
                    {isAuth
                        ? <>
                            <Link to='profile'>{authUser.login}</Link>
                            <Button onClick={() => logoutThunk()} title={'push if you wont log out'}>
                                Log out
                            </Button>
                        </>
                        :
                        <div>
                            <Link className={styles.btn} to='users'>People</Link>
                            <Link className={styles.btn} to='login'>Sign in</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authUser: selectAuthUser(state),
        isAuth: selectIsAuth(state)
    }
}

export default connect(mapStateToProps, {logoutThunk})(Header);

