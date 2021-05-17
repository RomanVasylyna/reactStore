import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Products from './Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SingleProduct from './SingleProduct';

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

              <LinkContainer to="about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>

            </Nav>

            <Nav>
              <LinkContainer to="cart">
                <Nav.Link><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/" exact>
            <h1>Home</h1>
          </Route>

          <Route path="/about" exact>
            <h1>About</h1>
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>

          <Route path="/product/:id" exact>
            <SingleProduct />
          </Route>

          <Route path="/cart" exact>
            <h1>Cart</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default Navigation
