import React from "react"
import { css } from "@emotion/core"
import Header from "./header"

const Hero = () => {
  return (
    <div
      className="h-screen"
      css={css`
        background: #1a2a6c; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to bottom,
          #1a2a6c,
          #b21f1f,
          #fdbb2d
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to bottom,
          #1a2a6c,
          #b21f1f,
          #fdbb2d
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      `}
    >
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row md:flex-row items-center">
          <div className="container mx-auto flex lg:flex-col text-center lg:text-left md:text-left">
            <div className="lg:mt-48 lg:px-40 mt-20 px-20">
              <h1 className="text-6xl m-1 text-orange-100 font-semibold">
                Ricardo Moreno
              </h1>
              <p className="text-3xl font-mono italic mt-1 ml-2 text-orange-200">
                web developer
              </p>
              <div className="flex lg:flex-row md:flex-col text-3xl text-orange-300 m-2">
                <i className="fab fa-github-square shadow-lg mr-2  hover:text-orange-100  "></i>
                <i className="fab fa-twitter-square shadow-lg mx-2  hover:text-orange-100"></i>
                <i className="fab fa-linkedin shadow-lg mx-2  hover:text-orange-100"></i>
                <i className="fas fa-envelope-square shadow-lg mx-2  hover:text-orange-100"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center absolute inset-x-1 bottom-0 mb-5 text-lg text-orange-200">
          Mis proyectos
        </div>
        <a href="#casas" className="self-center absolute inset-x-1 bottom-0 text-xl text-orange-100 ">

          <i className="fas fa-arrow-down "></i>
        </a>
      </div>
    </div>
  )
}

export default Hero
