import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DetailProject from './pages/DetailProject'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/detail/:id',
    element: <DetailProject />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <Toaster position='top-center' />
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>,
)
