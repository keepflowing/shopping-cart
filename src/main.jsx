import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import Index from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Index />}
    />,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
