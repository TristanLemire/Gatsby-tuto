import React from "react"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h1>HEADER</h1>
    {children}
    <h3>FOOTER</h3>
  </div>
)