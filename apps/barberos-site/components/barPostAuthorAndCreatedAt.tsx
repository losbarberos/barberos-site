import {Author, Post} from "../services/blog";
import Image from "next/image";
import React from "react";
import {format} from 'date-fns';
import {fr} from "date-fns/locale";

type Props = {
  post: Post
};

const formatAuthorName = (author: Author) => {
  return [author.firstName, author.lastName].join(' ');
}

const formatCreatedAt = (createdAt: string) => {
  return format(new Date(createdAt), 'PPpp', { locale: fr });
}

const BarPostAuthorAndCreatedAt = ({ post }: Props) => {
  const authorName = formatAuthorName(post.author);
  return (
    <div className="px-2.5 py-4 flex flex-row justify-between items-center gap-10">
      <Image src={post.author.avatarUrl} alt={authorName} width={48} height={48} className="rounded-full flex-none" />
      <span className="text-gray-800 text-xs font-bold flex-1">{authorName}</span>
      <span className="text-gray-400 text-xs flex-1 text-right">{formatCreatedAt(post.createdAt)}</span>
    </div>
  );
};

export default BarPostAuthorAndCreatedAt;
