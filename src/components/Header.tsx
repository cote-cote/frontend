import * as React from "react";
import coteLogo from "../assets/cote-logo.png";

function Header() {
  return (
    <header className="tw-flex tw-h-100 tw-w-full tw-items-center tw-justify-between tw-bg-black tw-px-20">
      <a href="/">
        <img src={coteLogo} className="tw-h-50 tw-w-50" alt="cote-cote-logo" />
      </a>
      <button
        type="button"
        className="tw-rounded tw-border tw-border-white tw-px-10 tw-py-5 tw-text-white"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
