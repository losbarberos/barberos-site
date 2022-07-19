
export interface Blog {
  posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  summary: string;
  slug: string;
  author: Author;
  createdAt: string;
  coverUrl: string;
  content: string;
  tags: string[];
}

export interface Author {
  id: number;
  lastName: string;
  firstName: string;
  avatarUrl: string;
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
          slug: '/2022/06/mon-article',
          author: {
            id: 1,
            firstName: 'Loïc',
            lastName: 'Barbier',
            avatarUrl: 'https://placeimg.com/48/48/people',
          },
          createdAt: '2022-06-01T13:30:00.000Z',
          coverUrl: 'https://placeimg.com/640/480/any',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in felis posuere, vestibulum nibh placerat, pretium nunc. Vivamus turpis ex, scelerisque ac quam porta, varius fermentum odio. Ut ullamcorper posuere sapien quis lobortis. Vivamus turpis quam, gravida vitae nisl sed, suscipit ullamcorper tortor. Vestibulum faucibus volutpat imperdiet. Nullam vel iaculis odio. Pellentesque porttitor, elit ut semper efficitur, nibh risus condimentum quam, id sollicitudin enim tortor ac elit. Nullam ornare auctor efficitur.\n' +
            '\n' +
            'Sed in ipsum nec quam dapibus dapibus. Vestibulum lobortis ex et risus vehicula, vel molestie sapien scelerisque. Nunc vestibulum mi a pellentesque hendrerit. Pellentesque lacinia risus non urna facilisis pellentesque. Aliquam egestas dictum eleifend. Phasellus augue leo, cursus vel maximus quis, viverra ut nisl. Cras interdum dictum ex quis vestibulum. Mauris eget tortor ac orci semper tempus. Vestibulum nec quam neque. Donec sit amet orci vulputate, cursus eros non, molestie dui. Sed luctus ac sem sit amet pharetra. Sed id turpis nisi. Morbi vel eleifend felis, ac rutrum orci. Aliquam vitae erat id purus interdum condimentum a quis eros.\n' +
            '\n' +
            'Aenean aliquet lectus sed sapien bibendum pretium. Etiam ornare efficitur ex, sed condimentum lectus sagittis sed. Ut id tincidunt est. Nam ornare blandit nulla vel sagittis. Duis rhoncus finibus sagittis. Nullam eget scelerisque urna. Vivamus sagittis lacus id lectus gravida, vitae interdum leo tristique. Integer id justo vitae nibh imperdiet efficitur et sit amet ipsum. Mauris sit amet ultricies sem. Aenean blandit ipsum in arcu semper, in sodales nisl egestas. Aliquam elementum sem lorem, eu tristique ex rutrum sit amet. Sed iaculis purus enim, non consectetur est mollis ut. Sed sodales ultricies ipsum vitae congue. In luctus tortor at eleifend laoreet. Praesent viverra bibendum felis, nec consectetur orci egestas non. In scelerisque augue non orci tempus aliquam.\n' +
            '\n' +
            'In eu velit blandit, vehicula leo eget, tincidunt turpis. Suspendisse hendrerit ante a nisl finibus, at ultrices odio mollis. Donec quis interdum orci. Integer vel lobortis eros. Curabitur tristique non tellus venenatis accumsan. Duis vitae varius velit. Etiam vel elit varius, tincidunt neque et, pellentesque risus. Aenean sem dui, porta et interdum eu, feugiat nec massa. Morbi ac volutpat neque. Quisque nec augue id tellus dictum ultricies et ac ex. Sed odio libero, porttitor eget tristique nec, ullamcorper ut neque. Vivamus hendrerit tempor augue sit amet scelerisque. Suspendisse interdum nisl nec velit fermentum, eget consequat enim pulvinar. Aenean a volutpat nibh, a aliquet justo. Morbi non commodo nunc.\n' +
            '\n' +
            'Maecenas egestas fringilla sem, et mattis nunc convallis volutpat. Aenean turpis nisi, ultricies non varius et, porta sed magna. Pellentesque cursus elementum dapibus. Donec quis arcu id elit malesuada malesuada. Maecenas facilisis porta nisi, ac aliquet nunc. Morbi ultricies, nunc ut condimentum elementum, odio ante pulvinar purus, vitae tempor dui elit ac magna. Proin orci odio, finibus vitae nisi vel, lobortis dignissim libero. Maecenas viverra interdum erat, a consectetur nulla molestie vel. Vivamus dolor augue, venenatis in ante id, auctor dictum arcu.',
          tags: ['tag1', 'tag2', 'tag3'],
        }
      ]
    };
  }

  get(): Blog {
    return this.blog;
  }

  getBySlug(slug: string[]): Post {
    return this.blog.posts.find(post => post.slug === BlogProvider.slugToHref(slug));
  }

  private static slugToHref(slug: string[]): string {
    return ['', ...slug].join('/');
  }
}
