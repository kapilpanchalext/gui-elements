import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './component/layout/RootLayout';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';
import About from './component/about/About';

function App() {
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
          element: <Home/>
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/about',
          element: <About />
        },
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;