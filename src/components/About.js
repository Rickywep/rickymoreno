import React from "react"
import ContenidoAbout from "./ContentAbout"

const About = () => {
  const sobre = ContenidoAbout()
  const { titulo, contenido } = sobre[0]

  return (
    <div id="about" className="container my-10 lg:p-10 lg:m-auto md:m-auto">
      <div className="lg:m-20 my-10 bg-white border border-orange-300 p-10 ">
        <div className="lg:flex">
          <div className="lg:w-2/3 p-1 lg:border-r-8 border-orange-600">
            <h1 className="text-orange-600 font-bold text-center lg:text-left">
              {titulo}
            </h1>
            <p className="lg:mr-10 text-lg text-justify ">
              {contenido}
            </p>
          </div>
          <div className="lg:w-1/3 ml-5 text-center ">
            <div>
              <p className="font-bold text-2xl text-gray-700 p-2  border-b-2 border-orange-300">
                Experiencia
              </p>
            </div>
            <div className="lg:flex lg:flex-wrap flex text-5xl justify-center justify-between mt-4 text-orange-600">
              <i className="fab fa-react"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-js-square"></i>
              <i className="fab fa-node"></i>
              <i className="fab fa-python"></i>
            </div>
            <div>
              <p className="mt-2 font-bold text-2xl text-gray-700 p-2 border-b-2 border-orange-300">
                Contacto
              </p>
            </div>
            <div className="flex flex-col mt-3">
              <p className="text-lg underline text-orange-600 hover:text-orange-700 font-semibold">
                ricky.gnr.moreno@gmail.com
              </p>
              <div className="flex justify-center mt-3 text-4xl text-orange-600">
                <a href="https://github.com/Rickywep" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github-square mr-2  hover:text-orange-700 "></i>
                </a>
                <a href="https://twitter.com/Rickywep" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter-square mx-2  hover:text-orange-700"></i>
                </a>
                <a href="https://www.linkedin.com/in/rickywep/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin mx-2  hover:text-orange-700"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
