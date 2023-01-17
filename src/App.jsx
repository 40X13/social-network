
import {BrowserRouter, Route, Routes} from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/main/profile/Profile";
import Dialogs from "./components/main/dialogs/Dialogs";
import Messages from "./components/main/messages/Messages";
import Footer from "./components/footer/Footer";


function App({store}) {

    return (
        <BrowserRouter>
            <div className={styles.appConatiner}>
                <Header/>
                <Sidebar/>
                    <div className={styles.main}>
                        <Routes>
                            <Route path="/" element={<Profile dispatch={store.dispatch.bind(store)} profile={store.state.profile}/>}/>
                            <Route path="dialogs/*" element={<Dialogs />}/>
                            <Route path="messages" element={<Messages/>}/>
                            <Route path="*" element={<h1>Errore</h1>}/>
                        </Routes>
                    </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;


