import React from "react"
import Header from "./header"
import {Helmet} from 'react-helmet';

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>Rickywep</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
        
      </Helmet>
      {/* <Header /> */}
      {props.children}
    </>
  )
}

export default Layout
