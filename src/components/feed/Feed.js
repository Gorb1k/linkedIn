import React, {useEffect, useState} from 'react';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from "./InputOptions/InputOption";
import {feedInputOptions} from "./feedInputOptions";
import Post from "./Post/Post";
import {db} from "../../firebase";
import firebase from "firebase/compat";
import {useSelector} from "react-redux";
import {selectUser} from "../../store/slices/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    useEffect(() => {
        console.log('render')
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                console.log(snapshot.docs)
                setPosts(snapshot.docs.map(doc => {
                    return {id: doc.id, data: doc.data()}
                }))
            })
    }, [])

    const sendPost = (event) => {
        event.preventDefault()
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {feedInputOptions.map((item) =>
                        <InputOption
                            key={item.title}
                            title={item.title}
                            Icon={item.Icon}
                            color={item.color}
                        />
                    )}
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl}}) =>
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                )}
            </FlipMove>
        </div>
    );
};

export default Feed;