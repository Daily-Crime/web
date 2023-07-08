import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { GlobalStyle } from 'styles/GlobalStyle';
import AppContextProvider from 'context';

import { App } from 'pages/App';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
      staleTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const RootApp = () => {
  return (
    <AppContextProvider>
      <Root />
    </AppContextProvider>
  );
};

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  );
};

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<RootApp />);
