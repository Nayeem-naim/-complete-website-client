import React, { createContext, useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home/Home';
import LogIn from './Component/LogIn/LogIn';

import Navbar from './Component/Home/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Component/Admin/Admin';
import Order from './Component/Order/Order';
import Shipment from './Component/Shipment/Shipment';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';



export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
               <Home/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/shipment/:shipmentId">
               <Shipment/>
          </PrivateRoute>
          <Route path="/order/:orderId">
            <Order/>
          </Route>
          
          <Route path="/*">
               <h1>Page not Found</h1>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
