import {useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {connect} from "react-redux";
import {authThunk} from "../redux/redusers/auth-reducer";
import {selectIsAuth} from "../redux/reselect";

const mapStateToProps = state => {
    return {
        isAuth:selectIsAuth(state),
    }
}

const WithRedirectHOK = (Component) => {

    const RedirectComponent = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            props.authThunk()
            !props.isAuth && navigate('/login')
        }, [props.isAuth]);

        return (
            props.isAuth && <Component {...props}/>
        );

    }

    return connect(mapStateToProps, {authThunk})(RedirectComponent);
}

export default WithRedirectHOK;

