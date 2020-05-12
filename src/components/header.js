import React from "react"
// import Navigation from "./navigation"

const Header = () => {
  return (
    <header className=" flex flex-col items-center px-5 py-3 lg:flex-row lg:justify-between ">
      <div className="mt-2  text-orange-200 hover:text-white focus:text-white focus:outline-none text-2xl font-bold leading-4 no-underline">
        <a className="ml-5">RM</a>
      </div>
      <div className="mt-3 text-orange-200 hover:text-white focus:text-white focus:outline-none text-xl font-bold leading-4 no-underline">
        <a
          href="#responsive-header"
          className="p-1 mr-5"
        >
          About
        </a>
        <a
          href="#responsive-header"
          className=" p-1 mr-5"
        >
          Projects
        </a>
        <a
          href="#responsive-header"
          className=" p-1 mr-5"
        >
          Blog
        </a>

        {/* <Navigation /> */}
      </div>
    </header>
  )
}

export default Header
