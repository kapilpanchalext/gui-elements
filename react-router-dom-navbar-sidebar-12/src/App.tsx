import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './components/layout/RootLayout';
import Dashboard from './components/dashboard/Dashboard';

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