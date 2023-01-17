import styles from './Posts.module.css';

const Post = ({postText,id}) => {

  return(
      <div className={styles.post} >
          <img src="https://fs.kinomania.ru/file/news/3/f1/3f1758e2046963d72757bdbedcaa2039.jpeg" alt="avatar"/>
          <p>{postText}</p>
      </div>

  );
}

export default Post;