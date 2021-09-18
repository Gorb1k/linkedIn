import React, {useEffect, useState} from 'react';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from "./InputOptions/InputOption";
import {feedInputOptions} from "./feedInputOptions";
import Post from "./Post/Post";
import {db} from "../../firebase";
import firebase from "firebase/compat";

const Feed = () => {

    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    useEffect(() => {
        console.log('render')
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
            })
    }, [])

    const sendPost = (event) => {
        event.preventDefault()
        db.collection('posts').add({
            name: 'Ihor Horb',
            description: 'test desc',
            message: input,
            photoUrl: '',
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
            {posts.map(({id, data: {name, description, message, photoUrl}}) =>
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )}
        </div>
    );
};

export default Feed;