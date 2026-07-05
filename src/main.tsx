import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// index.css must be injected BEFORE component stylesheets so section-level
// media overrides win equal-specificity ties (mirrors the reference cascade).
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
