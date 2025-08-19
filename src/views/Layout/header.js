import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/index.css";
import "../../assets/css/App.css";
// import Modal from 'react-bootstrap/Modal';
import "../../assets/fonts/GothamBook.ttf";
import "../../assets/fonts/Gotham-Black.otf";
import "../../assets/fonts/Gotham-Bold.otf";
import "../../assets/fonts/Gotham-Light.otf";
import "../../assets/fonts/GothamMedium.ttf";

class Header extends Component {
  render() {
    const routePath = window.location.pathname;
    return (
      <header className="App-header">
        {/*  <img src={logo} className="App-logo" alt="logo" />
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>*/}

        {/* <a
          href="https://project.welfund.org/login"
          className="justify-content-end btn btn-theme text-uppercase f-14 ml-5 btn-mbl"
        >
          Login
        </a> */}
        <Navbar bg="white" className="bg-header" fixed="top" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} className="font-logo" to="/">
              <img src={Logo} className="header-cloud-center" alt="Welfund" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="mbl-collapse"
            />
            <Navbar.Collapse className="justify-content-end">
              {/* <Nav.Link className={routePath === "/" ? 'active' : ''} as={Link} to="/">Home</Nav.Link> */}
              <Nav.Link
                className={routePath === "/projects" ? "active" : ""}
                as={Link}
                to="/projects"
              >
                Get Funded
              </Nav.Link>
              <Nav.Link
                className={routePath === "/invest" ? "active" : ""}
                as={Link}
                to="/invest"
              >
                Invest
              </Nav.Link>
              {/* <Nav.Link
                className={routePath === "/calculator" ? "active" : ""}
                as={Link}
                to="/calculator"
              >
                Calculator
              </Nav.Link> */}
              {/* <Nav.Link as={Link} to="/calculator" className="btn btn-theme text-uppercase f-14 ml-5">
            Calculator
        </Nav.Link> */}
              {/* <Nav.Link href="https://project.welfund.org/login" className="btn btn-theme text-uppercase f-14 ml-5 btn-desktop">
                                Login
                            </Nav.Link> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;

// function headerNav() {
// // Hide header on scroll down
//     var didScroll;
//     var lastScrollTop = 0;
//     var delta = 5;
//     var navbarHeight = document.getElementByClassName('nav').outerHeight();

//     window.scroll(function (event) {
//         didScroll = true;
//     });

//     setInterval(function () {
//         if (didScroll) {
//             hasScrolled();
//             didScroll = false;
//         }
//     }, 250);

//     function hasScrolled() {
//         var st = this.scrollTop();

//         // Make scroll more than delta
//         if (Math.abs(lastScrollTop - st) <= delta)
//             return;

//         // If scrolled down and past the navbar, add class .nav-up.
//         if (st > lastScrollTop && st > navbarHeight) {
//             // Scroll Down
//             var select = document.getElementByClassName("nav");
//             select.removeClass("nav-down");
//             select.add("nav-up");

//         } else {
//             // Scroll Up
//             if (st + window.height() < window.height()) {
//                 var select = document.getElementByClassName("nav");
//                 select.removeClass("nav-up");
//                 select.add("nav-down");
//             }
//         }

//         lastScrollTop = st;
//     }
// }
