import styles from './BarPost.module.scss';
import Image from "next/image";
import {Post} from "../services/blog";
import BarPostAuthorAndCreatedAt from "./barPostAuthorAndCreatedAt";
import BarTagContainer from "./barTagContainer";

/* eslint-disable-next-line */
export interface BarPostProps {
  post: Post;
}

const BarPost = ({post}: BarPostProps) => {
  return (
    <div className={styles['container']}>
      <h4>{post.title}</h4>
      <p>{post.summary}</p>
      <BarPostAuthorAndCreatedAt post={post}/>
      <BarTagContainer post={post}/>
      <div className={styles.cover}>
        <Image src={post.coverUrl} alt={post.title} layout="fill" objectFit="cover"/>
      </div>

      <div className="text-xs mt-8">{post.content}</div>
    </div>
  );
}

export default BarPost;
