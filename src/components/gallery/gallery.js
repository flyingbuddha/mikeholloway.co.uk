import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      id,
      fluid(maxWidth: 960) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    allFile(filter: {dir: {regex: "/images/projects/"}}) {
      edges {
        node {
          ...projectImage,
          relativeDirectory
        }
      }
    }
  }
`

const Gallery = ({ imageDir }) => {
  const data = useStaticQuery(query)
  const images = data.allFile.edges.map(({ node }) => node.relativeDirectory === imageDir && node)

  return (
    <div className='Gallery'>
      {images.map((node) => (
        <React.Fragment key={node.childImageSharp.id}>
          <Img fluid={node.childImageSharp.fluid} key={node.id} alt='' />
        </React.Fragment>
      ))}
    </div>
  )
}

Gallery.propTypes = {
  imageDir: PropTypes.string.isRequired
}

export default Gallery
