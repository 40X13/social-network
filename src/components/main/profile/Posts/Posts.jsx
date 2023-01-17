import Post from "./Post";
import {useState} from "react";
import styles from './Posts.module.css';

import {addPostAC} from "../../../../redusers/profile-reduser";



const Posts=({posts,dispatch})=>{

    const [postText,setPostText]=useState('');


    return(
        <div className={styles.posts} >
            <div>
                <h3>My posts</h3>
                <textarea onChange={event=>{setPostText(event.currentTarget.value)}} value={postText}/>
                <button onClick={()=>dispatch(addPostAC(postText))}>send</button>
            </div>
            <div>
                {posts.map(post=><Post key={String(post.id)} postText={post.text}/>)}
            </div>
        </div>
    );
}

export default Posts;