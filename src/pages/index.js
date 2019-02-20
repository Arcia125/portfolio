import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
    <div style={{
      marginBottom: '70vh'
    }}>
      <h2 style={{ color: '#fff', marginTop: '12vh', fontWeight: 400 }}>
        <span style={{ color: 'gold', fontWeight: 600, fontWeight: 500 }}>Hello,</span> my name is Kevin Hallett.
        I am a web developer.
      </h2>
      <h3 style={{
        color: '#fff',
        fontWeight: 100,
        maxWidth: '28rem'
      }}>I build experiences alongside amazing people. Contact me now to hire me for your next project.</h3>
    </div>
  </Layout>
)

export default IndexPage
