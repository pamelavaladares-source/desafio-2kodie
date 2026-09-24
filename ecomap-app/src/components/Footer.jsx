import React from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      <p>Desenvolvido para o Desafio de API Pública com React + Vite</p>
      <p>© {new Date().getFullYear()} - Painel Logístico EcoMap</p>
    </footer>
  );
}

export default Footer;
