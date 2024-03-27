import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, Projects, Services } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <Projects />
            <Services />
            <Footer />
        </div>
    )
}

export default Main
