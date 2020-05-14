import React from "react"

const Proyect = ({ proyecto }) => {
  const { titulo, contenido, imagen, enlace, repositorio } = proyecto

  return (
    <div className="max-w-sm w-full lg:w-1/2 lg:max-w-lg lg:flex m-2 border rounded border-orange-200 lg:overflow-hidden lg:h-40 bg-white hover:shadow-lg hover:bg-orange-200">
      <div className="p-2">
        <img
          className=""
          src={imagen.fluid.src}
          alt="Avatar of Jonathan Reinink"
          width="400"
        />
      </div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="flex items-center justify-between text-gray-900 font-bold text-xl mb-2">
            <div className="border-b-4 border-orange-600">
              <p>{titulo}</p>
            </div>
            <div className="text-orange-600">
              <a href={repositorio} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github mx-1"></i>
              </a>
              {enlace ? (
                <a href={enlace} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt mx-1"></i>
                </a>
              ) : (
                false
              )}
            </div>
          </div>
          <p className="text-gray-700 text-base">{contenido}</p>
        </div>
      </div>
    </div>
  )
}

export default Proyect
