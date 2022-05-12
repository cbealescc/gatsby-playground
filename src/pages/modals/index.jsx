import * as React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "../../scss/site.scss";

const ModalsIndexPage = () => (
    <Layout>
        <p>
            <Link to="/modals/bidding-modal">Bidding Modal</Link> <br/>
            <Link to="/modals/content-modal">Content Modal</Link> <br/>
            {/*<Link to="/using-typescript/">Offer Modal</Link> <br/>*/}
            {/*<Link to="/using-ssr">Go to "Using SSR"</Link> <br/>*/}
            {/*<Link to="/using-dsg">Go to "Using DSG"</Link>*/}
        </p>

    </Layout>
)

export default ModalsIndexPage
