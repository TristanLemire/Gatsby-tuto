import React from "react"
import Link from 'gatsby-link'
import Counter from './counter'
import Layout from "../components/layout"

export default () => <Layout style={{color: 'tomato'}}>
                      <h1>Hello World</h1>
                      <p>This is a paragraph</p>
                      <Link to="/page-2/">Page 2</Link>
                      <br/>
                      <Link to="/dir1/page-3/">Page 3</Link>
                      <br/>
                      <Counter color="green" />
                    </Layout>