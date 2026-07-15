import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  pathname,
  image,
  standaloneTitle,
  schema,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteUrl } = data.site.siteMetadata
        const metaDescription =
          description || data.site.siteMetadata.description
        const canonical = pathname ? `${siteUrl}${pathname}` : null
        const imageUrl = `${siteUrl}${image}`
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={
              standaloneTitle ? `%s` : `%s | ${data.site.siteMetadata.title}`
            }
            link={canonical ? [{ rel: `canonical`, href: canonical }] : []}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: imageUrl,
              },
              {
                property: `og:image:width`,
                content: `1200`,
              },
              {
                property: `og:image:height`,
                content: `630`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: imageUrl,
              },
            ]
              .concat(
                canonical
                  ? [
                      {
                        property: `og:url`,
                        content: canonical,
                      },
                    ]
                  : []
              )
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            {schema && (
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            )}
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  image: `/og-image.png`,
  standaloneTitle: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  image: PropTypes.string,
  standaloneTitle: PropTypes.bool,
  schema: PropTypes.object,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
