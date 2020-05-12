import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/heroSection"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"

const IndexPage = () => (
  <Layout >
    <Hero/>
    <HeroSection/>
    <Projects/>
    <About/>
  </Layout>
)

export default IndexPage
