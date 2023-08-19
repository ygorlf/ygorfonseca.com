
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({
  description,
  lang,
  meta,
  title,
  ogTitle,
  // alternativeLang,
  // alternativeLink,
  canonicalLink
}) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `robots`,
          content: 'index,follow',
        },
        {
          name: `description`,
          content: description,
        },
        {
          name: `og:site_name`,
          content: 'Ygor Fonseca',
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: canonicalLink,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   property: `og:image`,
        //   content: `https://dev-media.strytegy.com/og-image.png`,
        // },
        // {
        //   property: `og:image:secure_url`,
        //   content: `https://dev-media.strytegy.com/og-image.png`,
        // },
        // {
        //   name: `facebook-domain-verification`,
        //   content: `r5wlbb7osfmcjppb73vsiy5yx1yopk`,
        // },
      ].concat(meta)}
    >
      <link data-react-helmet="true" rel="canonical" href={canonicalLink} />
      <link data-react-helmet="true" rel="alternate" href="https://www.ygorfonseca.com/" hreflang="x-default" />
      {/* <link data-react-helmet="true" rel="alternate" href={alternativeLink} hreflang={alternativeLang} /> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogTitle: PropTypes.string,
  alternativeLang: PropTypes.string,
  alternativeLink: PropTypes.string,
  canonicalLink: PropTypes.string,
}

export default SEO