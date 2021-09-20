import React, {forwardRef} from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import InputOption from "../InputOptions/InputOption";
import {postInputOptions} from "./postInputOptions";


const Post = forwardRef (({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>
                    {name[0]}
                </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                {postInputOptions.map((item) =>
                    <InputOption
                        key={item.title}
                        color={item.color}
                        Icon={item.Icon}
                        title={item.title}
                    />
                )}
            </div>
        </div>
    );
});

export default Post;