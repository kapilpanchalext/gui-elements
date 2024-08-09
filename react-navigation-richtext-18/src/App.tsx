import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import RootLayout from './components/layout/RootLayout';
import RichTextEditor from './components/richTextEditor/RichTextEditor';

function App() {
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
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/richtext',
          element: <RichTextEditor layoutHeight={800} />
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