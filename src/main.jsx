import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './MainPage'
import AboutUs from './AbousUs'
import Events from './Events'
import Artwork from './Artwork'
import History from './History'
import Merch from './Merch';
import Posts from './Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
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
  },
  {
    path: "/posts",
    element: <Posts />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
