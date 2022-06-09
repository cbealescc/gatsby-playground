import * as React from "react"

//Components
import Seo from "../components/seo";
import Layout from "../components/layout";
import Carousel from "../components/carousel/carousel";


const CarouselPage = () => (
    <Layout>
        <Seo title="Home"/>
        <Carousel />
    </Layout>
)

export default CarouselPage
