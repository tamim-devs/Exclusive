import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/about/About";
import Homepage from "./pages/home/Index";
import RootLayOut from "./layout/RootLayOut";
import Contactpage from "./pages/contact/Index";
import SignuPage from "./pages/signup/Index";
import ProductPage from "./pages/Product/Index";
import ProductDetails from "./pages/ProductDetails/Index";
import LogIn from "./pages/Login/LogIn";
import WishList from "./pages/wishList/Index";
import AddToCart from "./pages/AddToCart/AddToCart";
import MyAccount from "./pages/account/MyAccount";
import Error from "./pages/Error/Error";
import CheckOut from "./pages/Checkout/CheckOut";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayOut />}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/productDetails" element={<ProductPage />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<SignuPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<AddToCart/>} />
        <Route path="/account" element={<MyAccount/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path={"*"} element={<Error/>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
