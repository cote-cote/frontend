import * as React from "react";
import coteLogo from "../assets/cote-logo.png";

function Header() {
  return (
    <header className="tw-flex tw-w-full tw-items-center tw-justify-between tw-bg-gray-200 tw-px-20 tw-py-20">
      <a href="/">
        <img src={coteLogo} className="tw-h-50 tw-w-50" alt="cote-cote-logo" />
      </a>
      <button
        type="button"
        className="tw-rounded tw-border tw-border-black tw-px-10 tw-py-5 tw-text-black tw-transition tw-delay-75 tw-ease-in-out  hover:tw-bg-gray-300"
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
