import {Route, Routes,} from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/main/Profile/Profile";
import Dialogs from "./components/main/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import Users from "./components/main/Users/Users";
import About from "./components/About/About";
import LoginPage from "./components/main/LoginPage/LoginPage";
import {connect} from "react-redux";
import {authThunk} from "./redux/redusers/auth-reducer";
import {compose} from "redux";
import {useEffect} from "react";
import {initializeThunk} from "./redux/redusers/app-reduser";
import Loader from "./components/Loader/Loader";

import React, {Suspense, lazy} from 'react';
import {selectInitialaized, selectIsAuth} from "./redux/reselect";

const Messages = lazy(() => import('./components/main/Messages/Messages'));


function App({initializeThunk, isInitialized}) {
    useEffect(() => {
        initializeThunk()
    }, [isInitialized]);

    return (
        !isInitialized ?
            <Loader/>
            :
            <div className={styles.appConatiner}>
                <Header/>
                <Sidebar/>
                <div className={styles.main}>
                    <Suspense fallback={<Loader/>}>
                        <Routes>
                            <Route path="/" element={<About/>}/>
                            <Route path="/profile/:idParams?" element={<Profile/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/dialogs/:partner?" element={<Dialogs/>}/>
                            <Route path="/messages" element={<Messages/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="*" element={<h1>Error</h1>}/>
                        </Routes>
                    </Suspense>
                </div>
                <Footer/>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialized: selectInitialaized(state),
        isAuth: selectIsAuth(state)
    }
}


function mapDispatchToProps() {
    return {
        authThunk,
        initializeThunk
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps()),
)(App);


