import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { login } = useContext(AuthContext);
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert('Login realizado com sucesso!');
    } catch (err) {
      setError('Falha no login');
    }
  };

  return (
    <div>
      <h2>{t('login.title')}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{t('login.email')}</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>{t('login.password')}</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">{t('login.submit')}</button>
      </form>
    </div>
  );
};

export default Login;