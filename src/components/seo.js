import React from "react"
import { Helmet } from "react-helmet"


export default props =>  (
  <Helmet titleTemplate="%s ">
    <meta charSet="utf-8" />
    {/* <meta name="robots" content="noindex"> */}
    <meta name="description" content={props.description}/>
    <meta name="author" content="Zineb Gouram"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>{props.title}</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
)
