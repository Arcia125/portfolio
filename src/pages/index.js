import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageGradient } from "../components/page-gradient/index";
import { HeaderIllustrations } from "../components/header-illustrations";
import { AboutMeSection } from "../components/about-me-section";
import { TraitDisplay } from "../components/trait-display";
import { CleanCodeIllustration } from "../components/clean-code-illustration";


const IndexPage = () => (
  <>
    <HeaderIllustrations />
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
      </div>
        <AboutMeSection />
        <div>
          <TraitDisplay title="CLEAN CODE" subtext="I prioritize maintainability and readability of project source code. This enables new developers to approach the codebase with ease.">
              <CleanCodeIllustration />
          </TraitDisplay>
        </div>
    </Layout>
  </>
)

export default IndexPage
