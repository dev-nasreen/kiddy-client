import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../../Home/Home/Home";
import AddServices from "../Admin/AddServices";
import MakeAdmin from "../Admin/MakeAdmin";
const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div></div>,
      main: () =>   <Home />
    },
    {
      path: "/makeAdmin",
      sidebar: () => <div></div>,
      main: () => <MakeAdmin />
    },
    {
      path: "/addServices",
      sidebar: () => <div></div>,
      main: () =>  <AddServices />
    }
  ];
const NewSidebar = () => {
    return (
        <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="/addServices">Add Services</Link>
              </li>
            </ul>
  
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>
  
          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
};

export default NewSidebar;