import { createContext, useEffect, useState, ReactNode } from 'react';

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('blog_admin_token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('blog_admin_token', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('blog_admin_token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
