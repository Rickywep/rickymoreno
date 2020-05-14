import React from "react"
// import Navigation from "./navigation"

const Footer = () => {
  return (
    <footer className="bg-orange-600 flex flex-col items-center px-5 py-3 h-40 justify-center ">
      <div className="my-4 text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none text-2xl font-bold leading-4 no-underline">
        <a href="#inicio">RM</a>
      </div>
      <div className="mt-3 text-gray-800  text-xl font-bold leading-4 no-underline">
        <a
          href="#about"
          className="p-1 m-2 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
        >
          Sobre mi
        </a>
        <a
          href="#projects"
          className=" p-1 m-2 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
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
