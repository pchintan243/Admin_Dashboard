import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/user/:userId" element={<User />} />
            <Route exact path="/newUser" element={<NewUser />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/product/:productId" element={<User />} />
            <Route exact path="/newproduct" element={<NewUser />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
