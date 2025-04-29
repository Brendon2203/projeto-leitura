import { useState } from 'react';
import './Login.css';
import { auth, provider } from "../services/firebase";
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(isRegistering ? 'Cadastrar' : 'Entrar', email, password);
  }

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Usuário logado com Google:', user);
      alert(`Bem-vindo, ${user.displayName}!`);
    } catch (error) {
      console.error('Erro no login com Google:', error);
      alert('Erro ao fazer login com Google.');
    }
  }

  return (
    <div className="login-background">
      <div className="login-container">
        <h2 className="login-title">{isRegistering ? 'Cadastrar' : 'Entrar'}</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            {isRegistering ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="google-button">
          {isRegistering ? 'Cadastrar' : 'Entrar'} com Google
        </button>

        <p className="toggle-text">
          {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}{' '}
          <span className="toggle-link" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Entrar' : 'Cadastrar'}
          </span>
        </p>
      </div>
    </div>
  );
}
