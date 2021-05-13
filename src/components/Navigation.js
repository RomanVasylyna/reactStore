import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Products from './Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SingleProduct from './SingleProduct';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">My Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="products">Products</Nav.Link>
              <Nav.Link href="productID">Single Product</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/users">

          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/productID">
            <SingleProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navigation
