import React from "react"

const About = () => {
  return (
    <>
      <div className="m-20 bg-white border border-orange-300 p-10">
        <div className="flex">
          <div className="w-2/3 border-r-8 border-orange-600">
            <h1 className="text-orange-600 font-bold">Sobre mi</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="w-1/3 mt-10 ml-5 text-center">
            <div>
              <p className="font-bold text-2xl border-b-2 border-orange-300">
                Experiencia
              </p>
            </div>
            <div className="flex text-5xl justify-center justify-between mt-4 text-orange-600">
              <i class="fab fa-react"></i>
              <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js-square"></i>
              <i class="fab fa-node"></i>
              <i class="fab fa-python"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
