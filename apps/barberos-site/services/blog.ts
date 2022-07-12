
export interface Blog {
  posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  summary: string;
  href: string;
  author: string;
  createdAt: string;
  coverUrl: string;
  content: string;
}

export class BlogProvider {
  private readonly blog: Blog;

  constructor() {
    this.blog = {
      posts: [
        {
          id: 1,
          title: 'Mon article',
          summary: 'Ici un article',
          href: '/2022/06/mon-article',
          author: 'Loïc Barbier',
          createdAt: '2022-06-01T13:30:00.000Z',
          coverUrl: 'https://placeimg.com/640/480/any',
          content: ''
        }
      ]
    };
  }

  get(): Blog {
    return this.blog;
  }

  getBySlug(slug: string[]): Post {
    console.log('slug is', typeof slug, slug);
    return this.blog.posts.find(post => post.href === BlogProvider.slugToHref(slug));
  }

  private static slugToHref(slug: string[]): string {
    return ['', ...slug].join('/');
  }
}
