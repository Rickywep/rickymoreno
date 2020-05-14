import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage
