import React from 'react';
import { createRoot } from 'react-dom/client';
import { DomainLanding } from './components/DomainLanding.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(DomainLanding));
