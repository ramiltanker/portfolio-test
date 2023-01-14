export interface PostType {
  id: string;
  title: string;
  text: string;
  image: string;
  date: string;
}

export interface BlogSchema {
  posts: PostType[];
  isLoading: boolean;
  error?: string;
}
