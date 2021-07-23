import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import map from '/src/images/map.png'

const MapPage = () => {
    return (
        <Layout pageTitle="Map">
            <img src={map} />
        </Layout>
    )
}

export default MapPage