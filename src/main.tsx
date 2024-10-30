import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BaseballContextProvider } from './context/BaseballContext.tsx';
import { VideoProjectsProvider } from './context/VideoProjectsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <VideoProjectsProvider>
      <BaseballContextProvider>
        <App />
      </BaseballContextProvider>
    </VideoProjectsProvider>
  </>
);
