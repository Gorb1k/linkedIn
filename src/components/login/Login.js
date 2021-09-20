import React, {useState} from 'react';
import './Login.css'
import {auth} from "../../firebase";
import {useDispatch} from "react-redux";
import {login} from "../../store/slices/userSlice";

const Login = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
            }).catch(error => alert(error))
    }
    const register = () => {
        if (!name) {
            return alert('Please enter a name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            }).catch(error => alert(error))
    }

    return (
        <div className='login'>
            <img
                src="https://gadgetshelp.com/wp-content/uploads/images/cdnwrep/content/uploads/2013/11/download-LinkedIn.png"
                alt=""/>
            <form action="">
                <input value={name}
                       onChange={e => setName(e.target.value)}
                       placeholder='Full name'
                       type="text"/>
                <input value={profilePic}
                       onChange={e => setProfilePic(e.target.value)}
                       placeholder='Profile URL'
                       type="text"/>
                <input value={email}
                       onChange={e => setEmail(e.target.value)}
                       placeholder='Email'
                       type="text"/>
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                       placeholder='Password'
                       type="password"/>
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{' '}
                <span onClick={register}
                      className='login__register'
                >
                    Register now!
                </span>
            </p>
        </div>
    );
};

export default Login;