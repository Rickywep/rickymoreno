import React from "react"
import ContenidoProyecto from "./ContentProyects"
import Proyect from "./Proyect"

const ContenidoInicio = () => {
  const proyectos = ContenidoProyecto()

  return (
    <div id="projects" className="container my-10 p-10 m-auto">
      <h1 className="text-center lg:mx-20 mb-2 lg:text-left text-3xl m-1 text-orange-600 font-bold text-center lg:text-left font-semibold ">Proyectos</h1>
      <div className="lg:flex lg:flex-wrap flex flex-wrap justify-center">
        {proyectos.map(proyecto => (
          <Proyect key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  )
}

export default ContenidoInicio
