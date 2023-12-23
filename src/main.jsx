import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './MainPage'
import About from './AbousUs'
import Events from './Events'
import Artwork from './Artwork'
import History from './History'
import Merch from './Merch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/artwork",
    element: <Artwork />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/merch",
    element: <Merch />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
