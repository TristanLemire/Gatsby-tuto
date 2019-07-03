import React from "react"
import Link from 'gatsby-link'
import Counter from './counter'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => ( <Layout style={{color: 'tomato'}}>
                      <h1>{data.site.siteMetadata.title}</h1>
                      <p>Author: {data.site.siteMetadata.author}</p>
                      <Link to="/page-2/">Page 2</Link>
                      <br/>
                      <Link to="/dir1/page-3/">Page 3</Link>
                      <br/>
                      <Counter color="green" />
                    </Layout>
)

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`