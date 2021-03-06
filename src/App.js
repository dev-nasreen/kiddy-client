import React, { createContext, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import AddServices from "./Components/Dashboard/Admin/AddServices";
import Book from "./Components/Dashboard/User/Book";
import MakeAdmin from "./Components/Dashboard/Admin/MakeAdmin";
import BookingList from "./Components/Dashboard/User/BookingList";
import ManageServices from "./Components/Dashboard/Admin/ManageServices";
import Review from "./Components/Dashboard/User/Review";
import AdminList from "./Components/Dashboard/Admin/AdminList";
import OrderList from "./Components/Dashboard/Admin/OrderList";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
         
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
