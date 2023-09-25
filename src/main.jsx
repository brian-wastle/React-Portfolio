import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: '/Profile/:userId',
        element: <PortfolioPage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
