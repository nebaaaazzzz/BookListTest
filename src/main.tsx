import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Books from './pages/books.page';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Books />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
