import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Swiper from 'swiper'

import './gallery.less'

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
    allFile(filter: {dir: {regex: "/content/projects/"}}) {
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

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      lazy: true,
      loop: true,
      preloadImages: true,
      // effect: 'cube',
      pagination: {
        el: '.swiper-pagination'
      }
    })

    return () => {
      try { swiper.destroy() } catch (err) {}
    }
  }, [imageDir])

  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        {images.map((node) => {
          const { src, srcSet } = node.childImageSharp.fluid
          return (
            <div className='swiper-slide' key={node.childImageSharp.id}>
              <img
                alt=''
                className='swiper-lazy'
                id={node.id}
                data-src={src}
                data-srcset={srcSet}
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
          )
        })}
      </div>
      <div className='swiper-pagination'></div>
    </div>
  )
}

Gallery.propTypes = {
  imageDir: PropTypes.string.isRequired
}

export default Gallery
