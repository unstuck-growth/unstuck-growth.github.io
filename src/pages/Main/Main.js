import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, Projects } from '../../components'
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
            <Footer />
        </div>
    )
}

export default Main
