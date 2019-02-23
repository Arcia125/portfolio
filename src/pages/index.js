import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderIllustrations } from "../components/header-illustrations";
import { AboutMeSection } from "../components/about-me-section";
import { TraitDisplay } from "../components/trait-display";
import { CleanCodeIllustration } from "../components/clean-code-illustration";
import { Header } from "../components/header";


const IndexPage = () => (
  <>
    <HeaderIllustrations />
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
        <Header emphasizedIntroText="Hello, " introText="my name is Kevin Hallett. I am a web developer." />
        <AboutMeSection />
        <section>
          <TraitDisplay title="CLEAN CODE" subtext="I prioritize maintainability and readability of project source code. This enables new developers to approach the codebase with ease.">
              <CleanCodeIllustration />
          </TraitDisplay>
        </section>
    </Layout>
  </>
)

export default IndexPage
