import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderIllustrations } from "../components/header-illustrations";
import { AboutMeSection } from "../components/about-me-section";
import { Header } from "../components/header";
import { TraitSection } from "../components/trait-section";
import { CleanCodeIllustration } from "../components/clean-code-illustration";
import { Trait } from "../models/trait";
import { PortfolioPreview } from "../components/portfolio-preview";

const traits = [
  new Trait({
    title: 'CLEAN CODE',
    subtext: 'I prioritize maintainability and readability of project source code. This enables new developers to approach the codebase with ease.',
    ImageComponent: CleanCodeIllustration
  })
];

const projects = [
  {
    name: 'Overwatch Stats',
    description: 'Mobile app to search for and view overwatch player profiles built with React Native.',
    src: 'https://via.placeholder.com/200x150',
    type: 'mobile',
    solo: true
  },
  {
    name: 'Python Starcraft2 AI',
    description: 'Rule based AI that plays starcraft 2 utilizing the offical Blizzard API.',
    src: 'https://via.placeholder.com/200x150',
    type: 'ai/machine learning',
    solo: true
  },
  {
    name: 'Automouse',
    description: 'Node CLI for mouse and keyboard automation.',
    src: 'https://via.placeholder.com/200x150',
    type: 'cli/tool',
    solo: true
  }
]

const IndexPage = () => (
  <>
    <HeaderIllustrations />
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `kevin`, `hallett`, `developer`, `webapp`]} />
        <Header emphasizedIntroText="Hello, " introText="my name is Kevin Hallett. I am a web developer." subheading="I build web apps alongside amazing people. Contact me now to hire me for your next project." />
        <AboutMeSection />
        <TraitSection traits={traits} />
        <PortfolioPreview projects={projects} />
    </Layout>
  </>
)

export default IndexPage
