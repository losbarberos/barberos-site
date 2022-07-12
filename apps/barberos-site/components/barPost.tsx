import styles from './BarPost.module.scss';
import Image from "next/image";
import {Post} from "../services/blog";
import BarPostAuthorAndCreatedAt from "./barPostAuthorAndCreatedAt";

/* eslint-disable-next-line */
export interface BarPostProps {
  post: Post;
}

const BarPost = ({post}: BarPostProps) => {
  return (
    <div className={styles['container']}>
      <h4>{post.title}</h4>
      <div className={styles.cover}>
        <Image src={post.coverUrl} alt={post.title} layout="fill" objectFit="cover"/>
      </div>
      <BarPostAuthorAndCreatedAt post={post}/>

      <p>{post.summary}</p>

      <p>{post.content}</p>
    </div>
  );
}

export default BarPost;
