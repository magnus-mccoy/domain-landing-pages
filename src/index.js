import React from 'react';
import { createRoot } from 'react-dom/client';
import { DomainLanding } from './components/DomainLanding';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(DomainLanding));
