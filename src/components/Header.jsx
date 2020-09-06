import React, { useState } from "react"
import Link from "gatsby-link"

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

//SCSS Imports
import "./scss/Header.scss"

//Icon Imports
import { Github, Linkedin, Gmail } from "@icons-pack/react-simple-icons"

function Header(props) {
  //Possible Headers:
  //  Index
  //  CV
  //  Project
  //  Default

  const [navList] = useState(
    [
      //
      //Navigation Bar

      {
        id: "Home Page",
        className: "nav-link nav-link-index",
        key: 1,
        slug: "/",
        linkText: "Home",
      },
      {
        id: "Projects",
        className: "nav-link nav-link-projects",
        key: 2,
        slug: "/#Projects",
        linkText: "Projects",
      },
      {
        id: "CV",
        className: "nav-link nav-link-cv",
        key: 3,
        slug: "/Cv",
        linkText: "CV",
      },
      //   {
      //     id: "Github",
      //     className: "nav-link nav-link-github",
      //     key: 3,
      //     slug: "https://github.com/DanJLake/",
      //     linkText: "Github",
      //     icon: <Github />,
      //   },

      //
      //End of Navigation Bar

      //Map Nav items to list items
    ].map(link => (
      <Nav.Link as={Link} to={link.slug} target="_blank">
        {link.icon ? link.icon : ""}
        {link.linkText}
      </Nav.Link>
    ))
  )

  const [dropdownList1] = useState(
    [
      //
      // Dropdown List before Separator
      {
        id: "Github",
        className: "nav-link nav-link-github",
        key: 1,
        slug: "https://github.com/DanJLake/",
        linkText: "Github",
        icon: <Github size={22} style={{ marginRight: 5 }} />,
      },
      {
        id: "Linkedin",
        className: "nav-link nav-link-linkedin",
        key: 2,
        slug: "https://www.linkedin.com/in/danjlake/",
        linkText: "Linkedin",
        icon: (
          <Linkedin
            size={22}
            style={{ marginRight: 5 }}
            color="rgb(0,119,181)"
          />
        ),
      },
    ].map(link => (
      <NavDropdown.Item href={link.slug} target="_blank">
        {link.icon}
        {link.linkText}
      </NavDropdown.Item>
    ))
  )

  const [dropdownList2] = useState(
    [
      //
      // Dropdown List after separator
      {
        id: "Email",
        className: "nav-link nav-link-email",
        key: 1,
        slug: "mailto:danjlake92@gmail.com",
        linkText: "Email",
        icon: (
          <Gmail size={22} style={{ marginRight: 5 }} color="rgb(193,72,62)" />
        ),
      },
    ].map(link => (
      <NavDropdown.Item href={link.slug} target="_blank">
        {link.icon}
        {link.linkText}
      </NavDropdown.Item>
    ))
  )
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Daniel Lake
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{navList}</Nav>
        <Nav className="ml-auto">
          <NavDropdown title="Profiles" id="basic-nav-dropdown">
            {dropdownList1}
            <NavDropdown.Divider />
            {dropdownList2}
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
