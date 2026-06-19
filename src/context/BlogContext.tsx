import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

type Post = {
  _id?: string;
  title: string;
  description: string;
  category: string;
  publishedAt?: string;
};

type BlogContextType = {
  posts: Post[];
  loading: boolean;
  refreshPosts: () => Promise<void>;
  addPost: (post: Post) => void;
  removePost: (id: string) => void;
};

const BlogContext = createContext<BlogContextType>({
  posts: [],
  loading: true,
  refreshPosts: async () => {},
  addPost: () => {},
  removePost: () => {}
});

export function BlogProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

const refreshPosts = async () => {
  setLoading(true);

  try {
    const res = await axios.get<Post[]>('/api/content', {
      timeout: 15000,
    });

    setPosts(res.data || []);
  } catch (err) {
    console.error('Failed to load posts:', err);

    // Retry once after 2 sec
    setTimeout(async () => {
      try {
        const retry = await axios.get<Post[]>('/api/content');
        setPosts(retry.data || []);
      } catch (e) {
        console.error('Retry failed:', e);
      }
    }, 2000);
  } finally {
    setLoading(false);
  }
};

  const addPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const removePost = (id: string) => {
    setPosts((prev) => prev.filter((post) => post._id !== id));
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, loading, refreshPosts, addPost, removePost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
