import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Bem-vindo ao Project.AI</h1>
    <p>Escolha uma opção:</p>
    <Link to="/login"><button>Acessar</button></Link>
    <Link to="/register" style={{ marginLeft: '1rem' }}><button>Registrar</button></Link>
  </div>
);

export default Home;