/**
 * Shadow of gatsby-theme-blog's Posts component.
 * Identical to the theme version except the listing page is titled "Blog"
 * instead of the theme's hardcoded "Home".
 */

import * as React from "react"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "./seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import PostList from "gatsby-theme-blog/src/components/post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO
      title="Blog"
      description="Writing on frontend engineering, JavaScript, and developer tooling by Kevin Hallett."
    />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
