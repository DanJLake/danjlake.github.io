import React, { useState } from "react"
import Link from "gatsby-link"

import "./scss/Header.scss"

function Header(props) {
  //Possible Headers:
  //  Index
  //  Project
  //  Default

  const [navList, setNavList] = useState([
    //
    //Navigation Bar

    {
      key: 1,
      slug: "/",
      linkText: "Home",
    },
    {
      key: 2,
      slug: "/cv",
      linkText: "CV",
    },
  ])

  const [navDisplay, setNavDisplay] = useState(
    <ul>
      {navList.map(link => (
        <li key={link.key}>{link.linkText}</li>
      ))}
    </ul>
  )

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

          <nav className="page-header-navigation">{navDisplay}</nav>
        </header>
      )
  }
}

export default Header
