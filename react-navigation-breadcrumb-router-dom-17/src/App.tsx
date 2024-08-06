import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import RootLayout from './components/layout/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: '',      
      children: [
        {
          path: '/',
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
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