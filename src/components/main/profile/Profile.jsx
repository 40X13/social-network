import styles from './Profile.module.css';
import Posts from "./Posts/Posts";



const Profile = ({profile,dispatch}) => {
	return (
		<div className={styles.profile}>
			<img src="/img/profile-header-pic.png" alt="profile header pic"/>
			<div className={styles.profileDescription}>
				<img src="https://fs.kinomania.ru/file/news/3/f1/3f1758e2046963d72757bdbedcaa2039.jpeg" alt="avatar"/>
				<div>
					<h3>Name</h3>
					<p>Date</p>
					<p>City</p>
					<p>Education</p>
					<p>Web</p>
				</div>
			</div>
			<Posts dispatch={dispatch} posts={profile.posts}/>
		</div>
	);
}

export default Profile;