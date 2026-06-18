import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BlogProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BlogProvider>
    </AuthProvider>
  </React.StrictMode>
);
