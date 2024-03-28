import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import BooksDetails from "../Pages/BooksDetails";
import ReadBook from "../components/ReadBook";
import WishListBooks from "../components/WishListBooks";




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
            path: '/read-books',
            element: <ReadBook/>,
        },
        {
            path: '/wishList-books',
            element: <WishListBooks/>
        },
        {
            path: '/pages-to-read',
            element: <PagesToRead/>,
        },
        {
            path: '/books-details/:id',
            element: <BooksDetails/>,
        },
        
      ],
    },
    
  ])

  export default router;


