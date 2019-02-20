import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageGradient } from "../components/page-gradient/index";
import Image from "../components/image";
import illustration from "../images/web-illustration-dark-gradient.png";
import mobileIllustration from "../images/mobile-illustration-dark-gradient.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
    <PageGradient />
    <div style={{
      marginBottom: '20rem'
    }}>
      <h2 style={{ color: '#fff', marginTop: '5rem', fontWeight: 400 }}>
        <span style={{ color: 'gold', fontWeight: 600, fontWeight: 500 }}>Hello,</span> my name is Kevin Hallett.
        I am a web developer.
      </h2>
      <h3 style={{
        color: '#fff',
        fontWeight: 100,
        lineHeight: '2.2rem',
        maxWidth: '28rem',
        marginBottom: 0,
        fontFamily: "'Lato', sans-serif"
      }}>
        I build web apps alongside amazing people.
        Contact me now to hire me for your next project.
      </h3>
      <div className="page-illustration-container">
        <img className="page-illustration desktop-illustration" src={illustration} />
        <img className="page-illustration mobile-illustration" src={mobileIllustration} />
      </div>
      <div style={{ textAlign: 'right ', position: 'relative', left: '6rem', bottom: '15rem', maxWidth: '25rem' }}>
        <h2 style={{ marginBottom: '3rem' }}>ABOUT ME</h2>
        <p style={{
          lineHeight: '2.2rem',
          fontFamily: "'Lato', sans-serif"
        }}>I am a self-taught developer with over 2 years of experience bringing projects to life.
          I leverage the latest tools and frameworks to deliver intuitive experiences. I am currently working as a freelance developer.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
