import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App, { loadSsrPagesForPath, type SsrPages } from './App';
import './styles/main.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const renderApp = (ssrPages?: SsrPages) => (
  <React.StrictMode>
    <App ssrPages={ssrPages} />
  </React.StrictMode>
);

const bootstrap = async () => {
  if (rootElement.hasChildNodes()) {
    try {
      const ssrPages = await loadSsrPagesForPath(window.location.pathname);
      hydrateRoot(rootElement, renderApp(ssrPages));
    } catch (error) {
      console.error("Hydration route preload failed", error);
      hydrateRoot(rootElement, renderApp());
    }

    return;
  }

  createRoot(rootElement).render(renderApp());
};

void bootstrap();
