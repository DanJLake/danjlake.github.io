import React from "react"

import Header from "../components/Header.jsx"

import RoomIcon from "@material-ui/icons/Room"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

import {
  ReactJs,
  Gatsby,
  Javascript,
  Csharp,
  DotNet,
  Xamarin,
  Git,
  Mongodb,
} from "@icons-pack/react-simple-icons"

import "./scss/app.scss"
import "./scss/index.scss"

export default function Home() {
  const frontpageIconSize = 100
  return (
    <div className="app-container">
      <Header />

      <section className="index-frontpage">
        <span className="index-frontpage-text">
          <h1>Daniel Lake</h1>
          <h2>
            <DesktopWindowsIcon />
            <span className="frontpage-h2-text">Web Developer</span>
          </h2>
          <h2>
            <RoomIcon />
            <span className="frontpage-h2-text">Kent, UK</span>
          </h2>
        </span>
        <span className="index-frontpage-icons">
          <ReactJs size={frontpageIconSize} color="rgb(94,211,243)" />
          <Gatsby size={frontpageIconSize} color="rgb(99,49,148)" />
          <Javascript size={frontpageIconSize} color="rgb(232,212,77)" />
          <Csharp size={frontpageIconSize} color="rgb(144,59,167)" />
          <DotNet size={frontpageIconSize} color="rgb(89,44,140)" />
          <Xamarin size={frontpageIconSize} color="rgb(50,147,212)" />
          <Git size={frontpageIconSize} color="rgb(232,78,49)" />
          <Mongodb size={frontpageIconSize} color="rgb(93,171,46)" />
        </span>
      </section>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <section className="index-projects">
        <span id="Projects">Projects</span>
      </section>
    </div>
  )
}
