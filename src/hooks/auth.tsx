import React, { createContext, useState, useContext } from 'react';

import { login } from 'services/Auth';

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@music-info:logged');

    return !!isLogged;
  });

  const signIn = async (email: string, password: string) => {
    try {
      const {
        data: { user, token },
      } = await login({ email, password });

      localStorage.setItem('@music-info:logged', 'true');
      localStorage.setItem('@music-info:token', token);
      localStorage.setItem('@music-info:user', user.name);

      setLogged(true);
    } catch (error) {
      alert('Senha ou usuário inválidos!');
    }
  };

  const signOut = () => {
    localStorage.removeItem('@music-info:logged');
    localStorage.removeItem('@music-info:token');
    localStorage.removeItem('@music-info:user');

    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
