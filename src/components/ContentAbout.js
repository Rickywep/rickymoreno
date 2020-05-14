import {graphql, useStaticQuery} from 'gatsby'

const ContenidoAbout = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsPagina{
          nodes{
            titulo,
            contenido,
            slug,
          }
        }
      }
    `)

    // console.log(data);    

    return data.allDatoCmsPagina.nodes.map(pagina=>({
        titulo: pagina.titulo,
        id: pagina.id,
        contenido: pagina.contenido,
        slug: pagina.slug
    }))
}

export default ContenidoAbout;