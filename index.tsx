import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Elemento raiz 'root' não encontrado. Verifique o seu index.html.");
}

const root = ReactDOM.createRoot(container);

// Acesso seguro ao ambiente do Vite
const env = (import.meta as any).env;
const isProduction = env ? env.PROD : false;

// Service Worker para PWA
if ('serviceWorker' in navigator && isProduction) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('CaliPRO SW pronto:', reg.scope))
      .catch(err => console.error('Erro no registro do SW:', err));
  });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
