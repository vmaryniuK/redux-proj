import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom";
import CartPage from "../pages/cart-page";
import HomePage from "../pages/home-page";


const App = () => {
    return (
       <Router>
        <div className="routing">
            <Routes>
                <Route
                    path = "/"
                    component={HomePage}
                />
                <Route
                    path = "/cart"
                    component={CartPage}
                />
            </Routes> 
        </div>
       </Router>
    )
}

export default App;