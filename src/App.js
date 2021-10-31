import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Menubar from './Components/MenuBar/Menubar';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AuthProvider from './Components/ContextApi/AuthProvider';
import AddContent from './Components/Admin/AddContent';
import Admin from './Components/Admin/Admin';
import BookNow from './Components/BookNow/BookNow';
import MyBooking from './Components/MyBooking/MyBooking';
import AllOrders from './Components/Admin/AllOrders/AllOrders';
import NotFound from './Components/NotFound/NotFound';
import UpdateOffers from './Components/Admin/UpdateOffers/UpdateOffers';
import BookedItem from './Components/Admin/BookedItem';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">

              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:id">
            <BookNow></BookNow>
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
            <MyBooking></MyBooking>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/addcontent">
              <AddContent></AddContent>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/bookeditems/update/:id">
              <UpdateOffers></UpdateOffers>
            </Route>
            <Route path="/allorders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/bookeditems">
              <BookedItem></BookedItem>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Route>
              <Footer></Footer>
            </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
