import Main from '../pages/Main/MainPage';
import Controlled from '../pages/Controlled/Controlled';
import UnControlled from '../pages/UnControlled/UnControlled';
import NotFound from '../pages/NotFound/NotFound';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorElement } from './shared/utils/errorBoundary/ErrorElement';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: 'controlled',
    element: (
      <Layout>
        <Controlled />
      </Layout>
    ),
  },
  {
    path: 'uncontrolled',
    element: (
      <Layout>
        <UnControlled />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
