import * as React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"

import "../../scss/site.scss";

const ModalsIndexPage = () => (
    <Layout>
        <p>
            <Link to="/modals/bidding-modal">Bidding Modal</Link> <br/>
            <Link to="/modals/content-modal">Content Modal</Link> <br/>
        </p>

    </Layout>
)

export default ModalsIndexPage
