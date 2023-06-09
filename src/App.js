import { Sidebar } from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css';
import { Home } from "./pages/home/Home";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { ProductList } from "./pages/productList/ProductList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Product } from "./pages/product/Product";

function App() {
  return (
    <>
      <Router>
     <Topbar/>
     <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<UserList/>}/>
        <Route exact path="/users/:userId" element={<User/>}/>
        <Route exact path="/products" element={<ProductList/>}/>
        <Route exact path="/product/:productId" element={<Product/>}/>
    
        </Routes>
     </div>
      </Router>
      </>
  );
}

export default App;
