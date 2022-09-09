import * as React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BiddingModalPage = () => (
    <Layout>
        <Seo title="Bidding Modal"/>

        <div className={'modal-overlay'} id={'modalOverlay'}/>

        <div className={'modal bidding-panel-modal'}>

            <div className={'modal__content'}>

                <div className={'modal__top-bar'}>
                    <p>Top bar here</p>
                </div>

                <header>
                    <div className={'modal__content__stats'}>
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

                    <div className={'modal__content__summary'}>
                        <div className={'grid col-2'}>
                            <div className={'grid__item preview-image'}>
                                <img
                                    src={'https://images.collectingcars.com/010021/DSC08928.jpg?fit=fillmax&auto=format,compress&cs=srgb&q=85'}
                                    alt={'Preview'}
                                />
                            </div>
                            <div className={'grid__item'}>
                                <h3>2018 MERCEDES-AMG GT C</h3>
                                <div className={'summary__lozenge'}/>
                                <div className={'summary__lozenge'}/>

                            </div>
                        </div> 
                    </div>

                </header>

                <div className={'modal__content__container'}>
                    <div className={'modal__content__container__inner'}>
                        <div className={'modal__content__bid-history'}>
                            <h3>BID HISTORY</h3>
                            <div className={'bid-history__item'}>
                                <h3>£64,000</h3>
                                <p>CJBeales</p>
                                <small>18 Hours ago</small>
                            </div>
                            <div className={'bid-history__item'}>
                                <h3>£60,000</h3>
                                <p>JDP</p>
                                <small>21 Hours ago</small>
                            </div>
                            <div className={'bid-history__item'}>
                                <h3>£59,500</h3>
                                <p>CJBeales</p>
                                <small>23 Hours ago</small>
                            </div>
                            <div className={'bid-history__item'}>
                                <h3>£64,000</h3>
                                <p>CJBeales</p>
                                <small>18 Hours ago</small>
                            </div>
                            <div className={'bid-history__item'}>
                                <h3>£60,000</h3>
                                <p>JDP</p>
                                <small>21 Hours ago</small>
                            </div>
                            <div className={'bid-history__item'}>
                                <h3>£59,500</h3>
                                <p>CJBeales</p>
                                <small>23 Hours ago</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={'modal__cta'}>
                <div className={'modal__cta__content'}>
                    <div className={'grid col-2'}>
                        <div className={'grid__item'}>
                            <a className={'button button-primary'} href="/"> Place Live Bid</a>
                        </div>
                        <div className={'grid__item'}>
                            <a className={'button button-secondary'} href="/">Place Max Bid</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default BiddingModalPage;
