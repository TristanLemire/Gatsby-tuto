import React from "react"
import Link from 'gatsby-link'
import Counter from './counter'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => ( <Layout style={{color: 'tomato'}}>
                      <table>
                        <thead>
                          <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.allFile.edges.map(({node}) =>
                            <tr>
                              <td>{node.relativePath}</td>
                              <td>{node.prettySize}</td>
                              <td>{node.extension}</td>
                              <td>{node.birthTime}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      <Link to="/page-2/">Page 2</Link>
                      <br/>
                      <Link to="/dir1/page-3/">Page 3</Link>
                      <br/>
                      <Counter color="green" />
                    </Layout>
)

export const query = graphql`
  query FirstQuery {
      allFile {
        edges {
          node {
            extension
            relativePath
            birthTime
            prettySize
          }
        }
      }
  }
`