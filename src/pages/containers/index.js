import React from "react"

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import WireframeContainers from "./Wireframes";
import ExampleContainers from "./Examples";


function ContainersPage() {
    return (
        <Layout>
            <Seo title="Containers Page"/>
            <h1 style={{margin: '0 auto', width: 'fit-content'}}>Wireframes</h1>
           <WireframeContainers />
            <ExampleContainers />
        </Layout>
    )
}

export default ContainersPage;