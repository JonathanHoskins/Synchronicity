import * as React from 'react'
import Layout from '../components/layout'
import logo from '/src/images/FB Event Flyer top and middle bill logos final.png'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";


const IndexPage = () => {
  return (
    <Layout pageTitle = "Synchronicity Festival">
      <Link to="https://www.facebook.com/events/530840468235962?ref=newsfeed">
        <img src={logo} class="img-fluid" alt="Responsive image" />
      </Link>
    </Layout>
  )
}

export default IndexPage