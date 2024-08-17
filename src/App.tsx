import Main from '../pages/Main/MainPage';
import Controlled from '../pages/Controlled/Controlled';
import UnControlled from '../pages/UnControlled/UnControlled';
import NotFound from '../pages/NotFound/NotFound';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorElement } from './shared/utils/errorBoundary/ErrorElement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorElement />,
  },
  {
    path: 'controlled',
    element: <Controlled />,
  },
  {
    path: 'uncontrolled',
    element: <UnControlled />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
