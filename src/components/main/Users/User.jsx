import avatarIsEmpty from '../../../pic/avatar-is-empty.png';
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";


const User = ({user, unFollowThunk, followThunk, followingInProgress}) => {

    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small ? user.photos.small : avatarIsEmpty} alt="ava"/>
            </NavLink>
            <h3>{user.name}</h3>

            {user.followed
                ?
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unFollowThunk(user.id);
                }}>
                    Unfollow
                </button>
                :
                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    followThunk(user.id);
                }}>
                    Follow
                </button>}
        </div>
    );
}

export default User;




