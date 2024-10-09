import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// 引入 Service Worker 注册函数
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);

// 注册 Service Worker 以启用离线功能
serviceWorkerRegistration.register();
