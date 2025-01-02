import { createBrowserRouter } from "react-router-dom";
import Default from "./components/Default/Default";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <ProductList />
        <Modal />
      </div>
    ),
  },
  {
    path: "/details",
    element: (
      <div>
        <Navbar />
        <Details />
        <Modal />
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <Navbar />
        <Cart />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <Default />
      </div>
    ),
  },
]);

export default router;
