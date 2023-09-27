import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Question from './components/questions/Question';
import Login from './components/admin/login/Login';
import Table from './components/admin/table/Table';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "Encuesta",
    element: <Question />
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "Tabla",
    element: <Table />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

reportWebVitals();
