import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Falha no login');
    }
  };

  return (
    <div>
      <h2>{t('login.title')}</h2>
      <form onSubmit={handleSubmit}>
        <label>{t('login.email')}</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>{t('login.password')}</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">{t('login.submit')}</button>
      </form>
    </div>
  );
};

export default Login;