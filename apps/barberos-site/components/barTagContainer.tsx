import {Post} from "../services/blog";

type Props = {
  post: Post
};

const BarTagContainer = ({post}: Props) => {
  return (
    <div className="flex flex-row flex-wrap gap-2.5 py-2.5">
      {post.tags.map(tag => (
        <div key={tag} className="rounded-md px-6 bg-bar-blue-200 text-white text-xs">#{tag}</div>
      ))}
    </div>
  );
}

export default BarTagContainer;
