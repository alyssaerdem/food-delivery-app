import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="products" element={ <Products/> } />
        <Route path="cart" element={ <Cart/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="/product/:name" element = {<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;