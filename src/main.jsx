import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/RouteProvider'
 
import { HelmetProvider } from 'react-helmet-async'

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
        <Toaster />
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </HelmetProvider>
      </AuthProvider>

  </React.StrictMode>,
)
