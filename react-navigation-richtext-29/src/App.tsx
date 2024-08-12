import { useContext } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home';
import RootLayout from './components/rootlayout/RootLayout';
import { ActiveThemeContext } from './store/ActiveThemeContext';
import RichTextLayout from './components/richTextLayout/RichTextLayout';
import log from './log';
import Toc from './components/toc/Toc';

function App() {
  log("<App /> rendered");
  const {theme} = useContext(ActiveThemeContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: '',
      children: [
        {
          path: '/',
          element: <Navigate to="/richtext" replace />,
        },
        {
          path: '/richtext',
          element: <RichTextLayout layoutHeight={800} />
        },
        {
          path: '/toc',
          element: <Toc />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Home />
        },
        {
          path: '/about',
          element: <Home />
        },
      ]
    },
  ]);

  return (
    <>
      <div data-app-theme={theme}>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App;