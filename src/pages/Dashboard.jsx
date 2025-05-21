import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo, {user.name} ({user.role})</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Dashboard;