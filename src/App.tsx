import * as React from 'react'
import Home from './pages/home/Home'
import NotFound from './pages/notfound/Notfound'
import './App.css'
import Detail from './pages/detail/Detail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'detail/:name',
        element: <Detail />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
