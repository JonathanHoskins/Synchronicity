import * as React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import imagepreview from '/src/images/FB Event Flyer w entities.png'

import{ 
    body
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <main className={Container}>
            
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
            
            <title>{pageTitle}</title>
            <meta property="og:title" content="Synchronicity Festival" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.synchronicityfestival.us" />
            <meta property="og:image" content="https://www.synchronicityfestival.us/src/images/FB Event Flyer w entities.png" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="/">Synchronicity Festival 2021</a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/">Home</a>
                        <a class="nav-item nav-link" href="https://theticketing.co/events/synchronicity">Tickets</a>
                        <a class="nav-item nav-link" href="https://www.facebook.com/events/530840468235962">Facebook Event</a>
                        <Link to="/map" className="nav-item nav-link">Map</Link>
                        <Link to="/about" className="nav-item nav-link">Info</Link>
                        <a class="nav-item nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLScuwzJ4zV2wV9ZJzDnzPG_9c9PsO0z3CqgxbwIYLAcQpDIjFw/viewform" className="nav-item nav-link">Vendor Application</a>
                    </div>
                </div>
            </nav>
            
            
            
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            {children}
        </main>
    )
}

export default Layout