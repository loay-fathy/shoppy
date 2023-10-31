import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/home/Home";
import SingleProduct from "./views/singleProduct/SingleProduct";
import Footer from "./components/footer/Footer";
import Cart from "./views/cart/cart";
import { Suspense, lazy } from "react";
import NotFound from "./views/404/NotFound";

const Collection = lazy(() => import("./views/collection/Collection"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Footer />}>
            <Route index element={<Home />} />
            <Route
              path="collection"
              element={
                <Suspense fallback="Loading ...">
                  <Collection />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path={"/product/:prodId"} element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
