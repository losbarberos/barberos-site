import BarLayout from '../../components/barLayout';
import {useRouter} from "next/router";
import {BlogProvider} from "../../services/blog";
import BarPost from "../../components/barPost";

const BlogPost = () => {
  const router = useRouter();
  const {slug} = router.query;

  const post = slug ? new BlogProvider().getBySlug(slug as string[]) : undefined;

  return (
    <BarLayout title={"Barberos - " + (post ? post.title : 'Post not found')}>
      <h1>Blog</h1>

      { post ? <BarPost post={post}/> : <p>Post not found</p> }
    </BarLayout>
  );
}

export default BlogPost;
