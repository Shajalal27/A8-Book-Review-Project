import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";




const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/listed-books',
            element: <ListedBooks/>,
        },
        {
            path: '/pages-to-read',
            element: <PagesToRead/>,
        },
        
      ],
    },
    
  ])

  export default router;


