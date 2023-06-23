import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlacementInputForm from './routes/PlacementInputForm';
import PlacementsTable from './routes/PlacementsTable';
import PlacementGetAll from './routes/PlacementGetAll';
import PlacementGetById from './routes/PlacementGetById';
import PlacementDelte from './routes/PlacementDelete';
import PlacementPut from './routes/PlacementPut';
import Root from './routes/root';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter( [
  {
    path:"/",
    element: <Root />
  },
  {
    path:"/pForm",
    element: <PlacementInputForm />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
