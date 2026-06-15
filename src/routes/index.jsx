import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';

export const router = createBrowserRouter([
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
