import {Post} from "../services/blog";
import styles from "./BarPostAuthorAndCreatedAt.module.scss";

type Props = {
  post: Post
};

const BarPostAuthorAndCreatedAt = ({ post }: Props) => {
  return (
    <div>
      <div className={styles.author}>
        {post.author}
      </div>
      <div className={styles.createdAt}>
        {post.createdAt}
      </div>
    </div>
  );
};

export default BarPostAuthorAndCreatedAt;
