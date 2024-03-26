import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/listedbooks",
      element: <ListedBooks/>,
    },
    {
      path: "/pages-to-read",
      element: <PagesToRead/>,
    },
  ]);


export default router;