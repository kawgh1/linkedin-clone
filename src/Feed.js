import React, {useState} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'

function Feed() {

    const [posts, setPosts] = useState([]);

    const sendPost = event => {
        event.preventDefault();

    }

    return (
        <div className='feed'>

            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type='text' />
                        <button onClick={sendPost}type='submit'>Send</button>
                    </form>
                </div>

                 {/* User Post Options */}
            
                <div className="feed__inputOptions">
                    {/* InputOption */}
                    <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9'/>
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#e7a33e'/>
                    <InputOption title='Event' Icon={EventNoteIcon} color='#c0cbcd'/>
                    <InputOption title='Write' Icon={CalendarViewDayIcon} color='#7fc15e'/>
                </div>

            </div>

           {/* FEED POSTS */}
            {/* <Post name='Sonny Sangha' description='this is a test' message='this is a message'  /> */}
            {posts.map((post) => {
                <Post  />
            })}
            
        </div>
    )
}

export default Feed
