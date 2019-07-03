import React from "react"
import Link from 'gatsby-link'
import Layout from "../../components/layout"

export default () => <Layout style={{color: 'tomato', backgroundColor: 'blue'}}>
                      <h1>Page 3</h1>
                      <p>This is a paragraph</p>
                      <Link to="/" style={{color: 'white'}}>Go Home</Link>
                    </Layout> 