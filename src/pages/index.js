import * as React from 'react'
import Layout from '../components/layout'
import logo from '/src/images/Synchronicity logo.jpg'
import lineup from '/src/images/Synchronicity lineup 2019.jpg'

const IndexPage = () => {
  return (
    <Layout pageTitle = "Home Page">
      <img src={logo} />
      <img src={lineup} />
    </Layout>
  )
}

export default IndexPage