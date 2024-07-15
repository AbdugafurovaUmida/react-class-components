import * as React from 'react'
import Home from './pages/home/Home'
import NotFound from './pages/notfound/Notfound'
import './App.css'
import Detail from './pages/detail/Detail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorElement from './components/error-elements/ErrorElement'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'detail/:name',
        element: <Detail />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
