import React from "react"

const Header = () => {
  return (
    <header className=" flex flex-col items-center px-5 py-3 lg:flex-row lg:justify-between ">
      <div className="mt-2  text-orange-200 hover:text-white focus:text-white focus:outline-none text-2xl font-bold leading-4 no-underline">
        <a href="#inicio" className="ml-5">RM</a>
      </div>
      <div className="mt-3 text-orange-200 text-xl font-bold leading-4 no-underline">
        <a href="#about" className="p-1 mr-5  hover:text-white focus:text-white focus:outline-none">
          Sobre mi
        </a>
        <a href="#projects" className=" p-1 mr-5 hover:text-white focus:text-white focus:outline-none">
          Proyectos
        </a>
        {/* <a href="#responsive-header" className=" p-1 mr-5 hover:text-white focus:text-white focus:outline-none">
          Blog
        </a> */}
      </div>
    </header>
  )
}

export default Header
