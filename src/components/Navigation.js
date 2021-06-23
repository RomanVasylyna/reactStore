import React from 'react';
import counterStyling from '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import { connect } from 'react-redux';

// Importing Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Navigation = (props) => {

  // Стили для счетчика корзины
  const counterStyling = {
    backgroundColor: 'gray',
    color: '#fff',
    padding:'0px 7px',
    borderRadius: '50%',
    fontWeight: 'bold',
    position: 'absolute',
    left: '1.4vw',
    bottom: '20px'
  };


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
              <LinkContainer to="/cart" style={{ position:'relative' }}>
                <Nav.Link><span style={counterStyling}>{props.cart.length}</span><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.3rem'}}/></Nav.Link>
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

const mapStateToProps = state => {
  return {
      products: state.products,
      cart: state.cart
  }
}

export default connect(mapStateToProps)(Navigation);
