import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('analista');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
        role: email === 'eduardoabreu81@gmail.com' ? 'admin' : role
      });
      alert('Registro realizado com sucesso');
      navigate('/login');
    } catch (err) {
      alert('Erro ao registrar usuário');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} /><br/>
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="analista">Analista</option>
          <option value="gerente_projetos">Gerente de Projetos</option>
          <option value="gerente_portfolio">Gerente de Portfólio</option>
        </select><br/><br/>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;