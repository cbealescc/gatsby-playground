import * as React from "react";
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ContentModalPage = () => (
    <Layout>
        <Seo title="Grid Page"/>

        <div className={'modal-overlay'} id={'modalOverlay'}/>

        <div className={'modal'}>

            <div className={'modal__content'}>

                <div className={'modal__top-bar'}>
                    <p>Top bar here</p>
                </div>
                <div className={'modal__content__container'}>
                    <div className={'modal__content__container__inner'}>

                        <h3>Confirm your bid</h3>
                        <p>By clicking the ‘CONFIRM’ button below, you
                            agree to the following conditions:</p>
                        <ul>
                            <li>You agree to
                                purchase if your bid meets or exceeds the reserve price.
                            </li>
                            <li>You agree to pay
                                the seller the full hammer price within 7 days of the auction ending.
                            </li>
                            <li>Bids are
                                legally binding and may not be retracted.
                            </li>
                            <li>You are
                                responsible for all shipping costs, including insurance and importation if
                                applicable.
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium asperiores, atque,
                            autem cum, dignissimos eaque fugiat impedit iusto nemo non odio officia pariatur quas soluta
                            vel veritatis voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Autem consequuntur dolor non sed! Aliquid autem doloremque eos esse, est, facilis
                            magnam optio possimus qui quia soluta unde. Perspiciatis, quidem, ratione.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium asperiores, atque,
                            autem cum, dignissimos eaque fugiat impedit iusto nemo non odio officia pariatur quas soluta
                            vel veritatis voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Autem consequuntur dolor non sed! Aliquid autem doloremque eos esse, est, facilis
                            magnam optio possimus qui quia soluta unde. Perspiciatis, quidem, ratione.</p>

                        <p>My bid is €55,000</p>
                        <input className="form-check-input" data-test="t&amp;csInput" type="checkbox"
                               id="agreedTerms&amp;Conditions"/>

                        <p>I agree to the Terms and Conditions</p>


                        <button className="button button-primary button-loading" disabled=""
                                data-testid="bidPanelPlaceBidButton">Confirm
                        </button>

                        <p>How it works</p>
                    </div>


                </div>
            </div>
        </div>


        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ContentModalPage;
