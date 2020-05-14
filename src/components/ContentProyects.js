import {graphql, useStaticQuery} from 'gatsby'

const ContenidoProyecto = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsProyecto {
              nodes {
                titulo
                id
                enlace
                repositorio
                slug
                contenido
                imagen {
                    fluid(maxWidth: 1200) {
                    ...GatsbyDatoCmsFluid
                    }
              }
            }
        }
      }
    `)


    return data.allDatoCmsProyecto.nodes.map(proyecto=>({
        titulo: proyecto.titulo,
        id: proyecto.id,
        contenido: proyecto.contenido,
        imagen: proyecto.imagen,
        enlace: proyecto.enlace,
        repositorio: proyecto.repositorio,
        slug: proyecto.slug
    }))
}

export default ContenidoProyecto;