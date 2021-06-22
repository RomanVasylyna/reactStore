import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Home from './Home';
import About from './About';
import Cart from './Cart';

// Importing Router
import {
  BrowserRouter as Router,
  Switch,
  Route
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

              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>

            </Nav>

            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Navbar>


        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/product/:id">
            <SingleProduct/>
          </Route>

          <Route path="/cart">
            <Cart/>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default Navigation
