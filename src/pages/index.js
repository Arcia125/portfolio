import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageGradient } from "../components/page-gradient/index";
import Image from "../components/image";
import illustration from "../images/website-illustration-plain.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
    <PageGradient />
    <div style={{
      marginBottom: '20rem'
    }}>
      <h2 style={{ color: '#fff', marginTop: '10rem', fontWeight: 400 }}>
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
      <img className="page-illustration" src={illustration} />
      <div style={{}}>
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'right' }}>
        <h2 style={{ marginBottom: '3rem' }}>ABOUT ME</h2>
        <p style={{
          lineHeight: '2.2rem',
          fontFamily: "'Lato', sans-serif"
        }}>I am a self-taught developer with over 2 years of experience bringing projects to life.
          I leverage the latest tools and frameworks to deliver intuitive experiences. I am currently working as a freelance developer.
        </p>
      </div>
      <div style={{ marginTop: '30rem' }}>
        <h2 style={{ marginBottom: '3rem' }}>LOREM IPSUM</h2>
        <p style={{
          lineHeight: '2.2rem',
          fontFamily: "'Lato', sans-serif"
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor condimentum lacus vel commodo. Donec ut velit a est posuere faucibus. Quisque iaculis iaculis mattis. Ut ut mollis nisi, non sagittis quam. Nunc tincidunt blandit sem in dictum. Praesent odio risus, sagittis ut tellus vel, posuere viverra urna. Duis interdum sagittis lectus, ullamcorper tempor lacus scelerisque id. Proin pharetra justo eu interdum mollis. Phasellus condimentum molestie condimentum. Duis justo tortor, volutpat at mattis sed, rutrum a ligula. Aliquam lobortis faucibus lorem. Nunc ut magna sit amet massa volutpat mattis.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
