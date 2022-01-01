import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "../components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={2}>
      <Hero offset={0} factor={1} />
      <About offset={1} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara