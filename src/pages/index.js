import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageGradient } from "../components/page-gradient/index";
import Image from "../components/image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
    <PageGradient />
    <div style={{
      marginBottom: '70vh'
    }}>
      <h2 style={{ color: '#fff', marginTop: '10rem', fontWeight: 400 }}>
        <span style={{ color: 'gold', fontWeight: 600, fontWeight: 500 }}>Hello,</span> my name is Kevin Hallett.
        I am a web developer.
      </h2>
      <h3 style={{
        color: '#fff',
        fontWeight: 100,
        maxWidth: '28rem',
        marginBottom: 0
      }}>I build experiences alongside amazing people. Contact me now to hire me for your next project.</h3>
      <div style={{ width: '175px', float: 'right', borderRadius: '50%', overflow: 'hidden' }}>
        <Image />
      </div>
      <div style={{ marginTop: '600px', textAlign: 'right' }}>
        <h2 style={{ marginBottom: '3rem' }}>ABOUT ME</h2>
        <p>I am a self-taught developer with over 2 years of experience bringing projects to life.
          I leverage the latest tools and frameworks to deliver intuitive experiences.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
