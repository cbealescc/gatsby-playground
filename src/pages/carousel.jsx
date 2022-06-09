import * as React from "react"

//Components
import Seo from "../components/seo";
import Layout from "../components/layout";
import Swiper from "../components/carousels/Swiper";


const CarouselPage = () => (
    <Layout>
        <Seo title="Home"/>
        <Swiper />
    </Layout>
)

export default CarouselPage
