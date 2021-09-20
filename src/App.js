import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./store/slices/userSlice";
import Login from "./components/login/Login";
import {auth} from "./firebase";
import Widgets from "./components/widgets/Widgets";

function App() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
            }else {
                dispatch(logout())
            }
        })
    },[])

    return (
        <div className="app">
            <Header/>
            {!user
                ? <Login/>
                : (
                    <div className="app__body">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </div>
                )}

        </div>
    );
}

export default App;
