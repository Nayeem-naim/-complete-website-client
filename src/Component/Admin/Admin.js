import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';
import AddAdmin from './AddAdmin/AddAdmin';
import AddReview from './AddReview/AddReview';
import AddService from './AddService/AddService';
import ManageService from './ManageService/ManageService';

const Admin = () => {
  const [loggedInUser] = useContext(UserContext)
  const [isAdmin,setIsAdmin] = useState(true)
  useEffect(()=>{
    fetch('http://localhost:3000/isAdmin',{
      method:'POST',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsAdmin(data))
  },[])
    return (
        <Router>
        <div className="container mt-5 mb-5 p-5">
              <div className="row">
            <div className="col-md-4 ">
          <ul>
            
            <li>
              <Link to="/orderList">Order List </Link>
            </li>
            <li>
              <Link to="/review">Review </Link>
            </li>
            {isAdmin && <div>
            <li>
              <Link to="/manageService">ManageService</Link>
            </li>
            <li>
              <Link to="/addService">addService</Link>
            </li>
            <li>
              <Link to="/addAdmin">addAdmin</Link>
            </li>
            </div>}
          </ul>
          </div>
             <div className="col-md-7 text-center">
             <Switch>
            <Route exact path="/manageService">
           <ManageService/>
            </Route>
            <Route path="/admin">
            </Route>
            <Route exact path="/addService">
               <AddService/>
            </Route>
            <Route path="/review">
              <AddReview/>
            </Route>
            <Route path="/addAdmin">
                <AddAdmin/>
            </Route>
            <Route path="/orderList">
               <OrderList/>
             </Route>
          </Switch>
             </div>
             </div>
        </div>
      </Router>
    );
};

export default Admin;