import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Bem-vindo, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Função: {user?.role}</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
}