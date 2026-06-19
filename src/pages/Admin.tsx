import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "http://localhost:4000";

type PostForm = {
  title: string;
  category: string;
  description: string;
};

type Post = {
  _id?: string;
  title: string;
  description: string;
  category: string;
  publishedAt?: string;
};

function Admin() {
  const { token, isAuthenticated, login, logout } = useContext(AuthContext);
  const { posts, addPost, removePost, refreshPosts } = useBlog();
  const [form, setForm] = useState<PostForm>({ title: '', category: '', description: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      refreshPosts();
    }
  }, [isAuthenticated, refreshPosts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', loginForm);
      login(res.data.token);
      setLoginForm({ username: '', password: '' });
      setMessage('Signed in successfully. Now publish or manage posts.');
    } catch (err: any) {
      setMessage(err?.response?.data?.message || 'Login failed');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) return;
    if (!token) {
      setMessage('Login first to publish a post.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await axios.post('/api/content', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      addPost(res.data);
      setForm({ title: '', category: '', description: '' });
      setMessage('Blog published successfully.');
    } catch (err: any) {
      setMessage(err?.response?.data?.message || 'Publish failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id || !token) return;
    const confirmed = window.confirm('Delete this post permanently?');
    if (!confirmed) return;

    try {
      await axios.delete(`/api/content/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      removePost(id);
      setMessage('Post deleted successfully.');
    } catch (err: any) {
      setMessage(err?.response?.data?.message || 'Delete failed.');
    }
  };

  return (
    <section className="page-content admin-page">
      <div className="admin-header reveal">
        <h1>Admin Dashboard</h1>
        <p>Manage your blog — publish new posts or remove outdated entries.</p>
      </div>

      {!isAuthenticated ? (
        <div className="blog-form reveal">
          <h3>Admin Login</h3>
          <form onSubmit={handleLogin}>
            <input name="username" placeholder="Username" value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} />
            <input type="password" name="password" placeholder="Password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
            <button className="button" type="submit">Sign in</button>
          </form>
        </div>
      ) : (
        <>
          <div className="blog-form reveal" style={{ animationDelay: '0.1s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>✏️ Publish a new blog</h3>
              <button className="button-secondary" onClick={logout}>Sign out</button>
            </div>
            <form onSubmit={handleSubmit}>
              <input name="title" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <input name="category" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              <textarea name="description" placeholder="Write post content" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={8} />
              <button className="button" type="submit" disabled={submitting}>{submitting ? 'Publishing...' : 'Publish'}</button>
            </form>
          </div>

          <div className="manage-posts-section reveal" style={{ animationDelay: '0.2s' }}>
            <h3>📋 Manage Posts ({posts.length})</h3>
            {posts.length === 0 ? (
              <p className="no-posts">No posts yet. Publish your first post above!</p>
            ) : (
              <div className="posts-grid">
                {posts.map((post, index) => (
                  <article key={post._id} className="admin-post-card reveal" style={{ animationDelay: `${0.25 + index * 0.08}s` }}>
                    <div className="post-info">
                      <h4>{post.title}</h4>
                      <p>{post.category} • {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</p>
                    </div>
                    <button className="button-secondary delete-btn" onClick={() => handleDelete(post._id)} title="Delete post">🗑️</button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {message && <p className="admin-message reveal" style={{ animationDelay: '0.1s' }}>{message}</p>}
    </section>
  );
}

export default Admin;
