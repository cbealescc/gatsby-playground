import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CarsList from "./CarList";


function StaticObjects() {
    return (
        <Layout>
            <Seo title="JS Experiments Page"/>
            <h1>JS Experiments</h1>

            <div className={'experiment-box'}>
                <h3>Object Mutation</h3>
                <CarsList/>

            </div>

            <div className={'experiment-box'}>
                <h3>Property Accessors</h3>
            </div>

            <div className={'experiment-box'}>
                <h3>Associative Arrays</h3>
            </div>

            <div className={'experiment-box'}>
                <h3>Anonymous Functions</h3>
            </div>

            <div className={'experiment-box'}>
                <h3>Passing Props through components</h3>
            </div>


            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default StaticObjects;