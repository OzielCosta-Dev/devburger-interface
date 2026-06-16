import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
]);
