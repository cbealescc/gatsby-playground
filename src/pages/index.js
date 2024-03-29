import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../scss/site.scss";

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{marginBottom: `1.45rem`}}
        />
        <p>
            <Link to="/grid/">Go to grid page</Link> <br/>
            <Link to="/modals/">Go to Modal page</Link> <br/>

            <Link to="/carousel">Go to Carousel page</Link> <br/>

            <Link to="/using-dsg">Go to "Using DSG"</Link>
        </p>

        <div className={'alert-box danger'}>
            <div className={'container'}>
                <div className={'alert-box__icon'}>Icon</div>
                <div className={'alert-box__content'}>
                    <p>Please re-enter your credit card details to confirm that you
                        are happy to authorise 3D Secure payments.</p>
                </div>
            </div>
        </div>

    </Layout>
)

export default IndexPage
