import styles from "./BarPostCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import {Post} from "../services/blog";
import BarPostAuthorAndCreatedAt from "./barPostAuthorAndCreatedAt";
import BarTagContainer from "./barTagContainer";

type Props = {
  post: Post
};

const BarPostCard = ({post}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <Image src={post.coverUrl} alt={post.title} layout="fill" objectFit="cover"/>
      </div>
      <div className={styles.postInfo}>
        <h3 className={styles.postTitle}>
          <Link href={'/blog' + post.slug}>
            <a>{post.title}</a>
          </Link>
        </h3>
        <p className={styles.postSummary}>{post.summary}</p>
        <BarTagContainer post={post}/>
        <BarPostAuthorAndCreatedAt post={post}/>
      </div>
    </div>
  );
};

export default BarPostCard;
