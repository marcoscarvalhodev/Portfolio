import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BaseballContextProvider } from './context/BaseballContext.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <BaseballContextProvider>
      <App />
    </BaseballContextProvider>
  </>
);
