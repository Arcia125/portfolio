import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderIllustrations } from "../components/header-illustrations";
import { AboutMeSection } from "../components/about-me-section";
import { Header } from "../components/header";
import { TraitSection } from "../components/trait-section";
import { CleanCodeIllustration } from "../components/clean-code-illustration";
import { Trait } from "../models/Trait";

const traits = [
  new Trait('CLEAN CODE', 'I prioritize maintainability and readability of project source code. This enables new developers to approach the codebase with ease.', CleanCodeIllustration)
]

const IndexPage = () => (
  <>
    <HeaderIllustrations />
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
        <Header emphasizedIntroText="Hello, " introText="my name is Kevin Hallett. I am a web developer." subheading="I build web apps alongside amazing people. Contact me now to hire me for your next project." />
        <AboutMeSection />
        <TraitSection traits={traits} />
    </Layout>
  </>
)

export default IndexPage
