import Login from "./Login";
import {loginThunk} from "../../../redux/redusers/auth-reducer";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
import styles from './LoginPage.module.css';
import {selectCaptcha, selectIsAuth} from "../../../redux/reselect";


const LoginPage = ({loginThunk, isAuth,captcha}) => {

    const navigate = useNavigate();
    useEffect(() => {
            if (isAuth) {
                navigate('/profile')
            }
        },
        [isAuth]);

    return (
        <div>
            <div className={styles.description}>
                <h1 className={styles.logotype}>Social <span>network</span></h1>
                <h3>Welcome</h3>
            </div>
            < Login
                loginThunk={loginThunk}
                captcha={captcha}
            />
        </div>

    );
}

const mapStateToprops = state => {
    return {
        isAuth: selectIsAuth(state),
        captcha: selectCaptcha(state),
    }
}

export default connect(mapStateToprops, {loginThunk})(LoginPage);


