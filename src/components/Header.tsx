import * as React from "react"
import coteLogo from "../assets/cote-logo.png"

function Header() {
  return (
    <header className="flex h-100 w-full items-center justify-between bg-black px-20">
      <a href="/">
        <img src={coteLogo} className="h-50 w-50" alt="cote-cote-logo" />
      </a>
      <button
        type="button"
        className="rounded border border-white px-10 py-5 text-white"
      >
        Logout
      </button>
    </header>
  )
}

export default Header
