
import React from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";
import { HashLink } from 'react-router-hash-link';
import "./Menubar.css";


const Menubar = () => {
  const { user, handleLogout } = useFirebase();
  const hansignOut = () => {
    handleLogout()
  }

  return (

    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <img
          className="logo-img"
          src="https://i.ibb.co/zR9mBzF/travel-tour-landscape-sun-airplane-600w-366089225.png"
          alt=""
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={HashLink} to="/">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={HashLink} to="/about">About</Nav.Link>
            <Nav.Link as={HashLink} to="/contacts">Contact</Nav.Link>
          </Nav>
          {
            user?.email ? <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Dropdown>

                  <Dropdown.Toggle className="profilebtn" id="dropdown-basic">
                    {user.displayName}
                  </Dropdown.Toggle>
                  <img className="drop-icon" src={user.photoURL} alt="" />
                  <Dropdown.Menu>
                    <Dropdown.Item as={HashLink} to="/allbooking">Manage Booking</Dropdown.Item>
                    <Dropdown.Item as={HashLink} to="/mybooking">My Booking</Dropdown.Item>
                    <Dropdown.Item as={HashLink} to="/addcontent">Add Content</Dropdown.Item>
                    <Dropdown.Item onClick={hansignOut}>SignOut</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Text>
            </Navbar.Collapse>
              :
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Nav.Link className="signbtn" as={HashLink} to="/login"> Sign in</Nav.Link>
                </Navbar.Text>
              </Navbar.Collapse>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;