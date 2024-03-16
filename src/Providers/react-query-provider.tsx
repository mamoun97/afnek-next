'use client';
import { PropsWithChildren } from 'react';
import {QueryClient,QueryClientProvider} from "react-query"
// import {ReactQueryDevtools} from"react-query/devtools"
import { useState } from 'react';


const ReactQueryPvorider: React.FC<PropsWithChildren> = ({ children }) => {
  // State
  const [queryClientStore] = useState(
    () => new QueryClient()
  );
  // Return Provider
  return (
    <QueryClientProvider client={queryClientStore}>
      {children}
      {/* <ReactQueryDevtools position='top-left' initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
};

export default ReactQueryPvorider;