import Post from "./Post";
import {useState} from "react";
import styles from './Posts.module.css';

import {connect} from "react-redux";
import {addPostAC} from "../../../../../redux/redusers/profile-reduser";

const Posts = ({posts, addPost}) => {
    const [postText, setPostText] = useState('');

    return (
        <div className={styles.posts}>
            <div>
                <h3>My posts</h3>
                <textarea onChange={event => {
                    setPostText(event.currentTarget.value)
                }} value={postText}/>
                <button onClick={() => {
                    addPost(postText);
                    setPostText('');
                }}>send
                </button>
            </div>
            <div>
                {posts.map(post => <Post key={String(post.id)} postText={post.text}/>)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
    }
}

const mapDispatchToProps = () => {
     return {
         addPost:addPostAC
     }
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps())(Posts);

export default PostsContainer;