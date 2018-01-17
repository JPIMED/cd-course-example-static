import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p>Welcome to this static page example.</p>
    <p>Now we are going to deploy this site on Amazon S3.</p>
    <Link to="/1-intro">Let's do this!</Link>
  </div>
)

export default IndexPage
