import React from "react"

import "./scss/Header.scss"

function Header(props) {
  //Possible Headers:
  //  Index
  //  Project
  //  Default

  const NavList = {
    homePage: {
      slug: "/",
      linkText: "Home",
    },
    cvPage: {
      slug: "/cv",
      linkText: "CV",
    },
  }

  switch (props.type) {
    case "index":
      break
    default:
      return (
        <header className="page-header">
          <img
            className="page-header-logo"
            src="https://pngimg.com/uploads/twitter/twitter_PNG29.png"
            alt=""
          />

          <nav className="page-header-navigation"></nav>
        </header>
      )
  }
}

export default Header
