import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="products" element={ <Products/> } />
        <Route path="cart" element={ <Cart/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="/product/:name" element = {<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;