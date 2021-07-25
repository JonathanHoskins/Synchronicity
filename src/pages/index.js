import * as React from 'react'
import Layout from '../components/layout'
import logo from '/src/images/Synchronicityflyer.png'
import "bootstrap/dist/css/bootstrap.min.css";


const IndexPage = () => {
  return (
    <Layout pageTitle = "Home Page">
      <img src={logo} class="img-fluid" alt="Responsive image" />
    </Layout>
  )
}

export default IndexPage