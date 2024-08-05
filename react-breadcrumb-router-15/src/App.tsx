import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Category from './components/category/Category';
import SubCategory from './components/subcategory/SubCategory';
import Types from './components/types/Types';
import BreadCrumb from './components/breadcrumb/BreadCrumb';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: '/',
          element: <Navigate to="/home" replace />,
        },
        {
          path: '/home',
          element: <Home />,
          children:[
            {
              path: "category/",
              element: <Category />,
              children: [
                {
                  path: "subcategory/",
                  element: <SubCategory />,
                  children: [
                    {
                      path: "types/",
                      element: <Types />,
                    }
                  ]
                }
              ]
            },
          ]
        },
      ],
    },
  ]);

  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;