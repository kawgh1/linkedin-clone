import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import InputOption from './InputOption';
// react-flip-move
import { forwardRef } from 'react';

// function Post({name, description, message, photoUrl, timestamp}) {
// React Flip Move implementation
const Post = forwardRef(({ name, description, message, photoUrl, timestamp}, ref) => {
    return (
        <div className='post'>
            <div ref={ref} className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    {/* <p>{description}</p> */}
                    <p>{timestamp}</p>
                </div>

            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

                <div className="post__buttons">
                    <InputOption title='Like' Icon={ThumbUpOutlinedIcon} color='gray' />
                    <InputOption title='Comment' Icon={ChatOutlinedIcon} color='gray' />
                    <InputOption title='Share' Icon={ShareOutlinedIcon} color='gray' />
                    <InputOption title='Send' Icon={SendOutlinedIcon} color='gray' />
                </div>
            
            
            
        </div>
    );
});

export default Post
