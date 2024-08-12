import { useContext } from 'react';
import './App.css';
import Home from './components/home/Home';
import RootLayout from './components/rootlayout/RootLayout';
import { ActiveThemeContext } from './store/ActiveThemeContext';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

function App() {
  const {theme} = useContext(ActiveThemeContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: '',      
      children: [
        {
          path: '/',
          element: <Navigate to="/home" replace />,
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