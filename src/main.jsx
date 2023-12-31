
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Project from './pages/Project.jsx';
import Error from './pages/Error.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ContactForm from './pages/ContactForm.jsx';
import Resume from './pages/Resume.jsx';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Project',
        element: < Project />
      },
      {
        path: '/ContactForm',
        element: < ContactForm />
      },
      {
        path: '/Resume',
        element: < Resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
