import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Simulation from './Simulation/Simulation';
const router = createBrowserRouter([

  {
    path: '/',
    element: <Home/>
  },
  {
    path:'planet/:name',
    element: <Simulation/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
    )
}

export default App