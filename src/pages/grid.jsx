import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const GridPage = () => (
    <Layout>
        <Seo title="Grid Page"/>
        <h1>Grid System</h1>
        <section className={'grid-page'}>
            <div className="grid col-3">
                <div className="grid__item">Item 1</div>
                <div className="grid__item">Item 2</div>
                <div className="grid__item">Item 3</div>
                <div className="grid__item">Item 4</div>
                <div className="grid__item">Item 5</div>
            </div>
        </section>


        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default GridPage;
