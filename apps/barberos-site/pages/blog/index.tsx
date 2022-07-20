import BarLayout from '../../components/barLayout';
import BarPostCard from "../../components/barPostCard";
import {BlogProvider} from "../../services/blog";

const blog = new BlogProvider().get();

const BlogPosts = () => (
  <BarLayout title="Barberos - Blog">
    <h1>Blog</h1>

    {blog.posts.map(post => (
      <BarPostCard key={post.id} post={post}/>
    ))}
  </BarLayout>
);

export default BlogPosts;
