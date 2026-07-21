import { useState } from 'react';
import { useBlog } from '../context/BlogContext';

type Post = {
  _id?: string;
  title: string;
  description: string;
  category: string;
  publishedAt?: string;
};

function Blog() {
  const { posts, loading } = useBlog();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <section className="page-content blog-page">
      <div className="section-header">
        <div>
          <h1>Latest Blog from Kuldeep Sharma</h1>
          <p className="intro">Investigative posts, personal essays, and short reflections — updated when new content is published.</p>
        </div>
      </div>

      <div className="blog-list-grid">
        {loading ? (
          <div className="blog-empty">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="blog-empty">No posts yet.</div>
        ) : (
          posts.map((post, index) => (
            <article
              key={post._id}
              className="blog-card reveal"
              style={{ animationDelay: `${index * 80}ms`, cursor: 'pointer' }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="card-meta">
                <span className="card-category">{post.category}</span>
                <span className="card-date">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </article>
          ))
        )}
      </div>

      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPost(null)}>×</button>
            <div className="modal-header">
              <span className="modal-category">{selectedPost.category}</span>
              <span className="modal-date">{selectedPost.publishedAt ? new Date(selectedPost.publishedAt).toLocaleDateString() : ''}</span>
            </div>
            <h1>{selectedPost.title}</h1>
            <p className="modal-body">{selectedPost.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;

