import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProductListPage from "./components/ProductListPage";
import ProductDetail from "./components/ProductDetail";
import CartDetail from "./components/CartDetail";
import MainHeader from "./components/mainHeader";
import { Link } from "react-router-dom";
function App() {
   return (
      <Router>
         <div>
            <MainHeader />
            <div className="container">
               <Route path="/" exact component={ProductListPage} />
               <Route path="/products/:id" component={ProductDetail} />
               <Route path="/cart-detail" component={CartDetail} />
            </div>
         </div>
      </Router>
   );
}

export default App;
