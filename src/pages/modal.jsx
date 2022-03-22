import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ModalPage = () => (
    <Layout>
        <Seo title="Grid Page"/>

        <div className={'modal-overlay'} id={'modalOverlay'}/>

        <div className={'modal'}>

            <div className={'modal__content'}>

                <div className={'modal__content__header'}>

                    <div className={'grid col-3'}>
                        <div className={'grid__item'}>
                            <h4>£32,000</h4>
                            <p>Current Bid</p>
                        </div>
                        <div className={'grid__item'}>
                            <h4>04:30:10</h4>
                            <p>Today: 7:00pm</p>
                        </div>
                        <div className={'grid__item'}>
                            <h4>23</h4>
                            <p>Bids</p>
                        </div>
                    </div>
                </div>


                <div className={'modal__content__container'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque aut, exercitationem
                        illum impedit ipsum iste nam nisi placeat quia, repellendus sed sint temporibus veniam vitae.
                        Culpa
                        explicabo similique ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est
                        expedita incidunt necessitatibus nemo officia pariatur quaerat quidem quisquam, sint sunt ullam
                        vel voluptate voluptates voluptatibus. Ipsa officiis quisquam veritatis? Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Dignissimos, dolore fuga magnam minima obcaecati odit
                        placeat quos reprehenderit. Aspernatur dolore id magni maxime nulla provident quia quod saepe
                        sunt voluptatem!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque aut, exercitationem
                        illum impedit ipsum iste nam nisi placeat quia, repellendus sed sint temporibus veniam vitae.
                        Culpa
                        explicabo similique ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est
                        expedita incidunt necessitatibus nemo officia pariatur quaerat quidem quisquam, sint sunt ullam
                        vel voluptate voluptates voluptatibus. Ipsa officiis quisquam veritatis? Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Dignissimos, dolore fuga magnam minima obcaecati odit
                        placeat quos reprehenderit. Aspernatur dolore id magni maxime nulla provident quia quod saepe
                        sunt voluptatem!</p>
                </div>

            </div>
            <div className={'modal__cta'}>
                <button>Button</button>
            </div>
        </div>


        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ModalPage;
