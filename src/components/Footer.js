import React from "react"
// import Navigation from "./navigation"

const Footer = () => {
  return (
    <footer className="bg-orange-600 lg:flex-row lg:justify-between flex flex-col items-center px-5 py-3 h-20 justify-center ">
      <div className="my-4 lg:ml-20 text-orange-300 hover:text-orange-200 focus:text-gray-700 focus:outline-none text-2xl font-bold leading-4 no-underline">
        <a href="#inicio">RM</a>
      </div>
      <div className="my-4 lg:mr-20 text-orange-300  text-xl font-bold leading-4 no-underline">
        <a
          href="#about"
          className="p-1 m-2 hover:text-orange-100 focus:text-gray-700 focus:outline-none"
        >
          Sobre mi
        </a>
        <a
          href="#projects"
          className=" p-1 m-2 hover:text-orange-100 focus:text-gray-700 focus:outline-none"
        >
          Proyectos
        </a>
        {/* <a
          href="#responsive-footer"
          className=" p-1 mr-5 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
        >
          Blog
        </a> */}
      </div>
    </footer>
  )
}

export default Footer
