import React from 'react'

import './blog.less'

const Blog = () => (
  <article className='Blog'>
    <h2 className='Blog__Title'>If I built a system to sell X, this is how I'd do it.</h2>
    <h3 className='Blog__Published'>Tue 31 March, 2020</h3>
    <div className='Blog__Content'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Pellentesque habitant morbi tristique senectus et netus et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Pellentesque habitant morbi tristique senectus et netus et.
      </p>
    </div>
  </article>
)

export default Blog
