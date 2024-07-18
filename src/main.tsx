import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';

import { App } from '@components/App';

const rootContainer = document.getElementById('root');
if (!rootContainer) {
  throw new Error('Root element not found');
}

const root: Root = createRoot(rootContainer);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
