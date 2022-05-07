import * as React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const CCBiddingModalPage = () => (
    <Layout>
        <Seo title="Grid Page"/>

        <div className={"modal content-modal buy-now-modal"}>
            <Modal/>
            {/*Top bar*/}
            <div className={'modal__top-bar'}>

                <a className="popup__logo" href={'/'}/>

                {/*Close Button*/}
                <button className="modal__close" id="popupClose"
                        onClick={this.props.dispatchToggleBuyNowConfirmPanel}>
                    <CloseIcon/>
                </button>
            </div>

            {/*Content*/}
            <div className={'modal__content__container'}>
                <div className={'modal__content__container__inner'}>

                    {/*Title*/}
                    <h3>
                        {this.polylang.t(`labels_confirmBuyNow`)}
                    </h3>

                    {/*Content*/}
                    <p>
                        {this.polylang.t(`explanations_confirmBuyNow1`)}
                    </p>
                    <ul className="fa-ul">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            {this.polylang.t(`explanations_confirmBuyNow2`)}
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-gavel"></i></span>
                            {this.polylang.t(`explanations_confirmBuyNow3`)}
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-shipping-fast"></i></span>
                            {this.polylang.t(`explanations_confirmBuyNow5`)}
                        </li>
                    </ul>

                    <p className="bid-amount">
                        {this.polylang.t(`explanations_confirmBuyNow8`)} {this.buyNowPrice()} ?
                    </p>

                </div>
            </div>
        </div>


    </Layout>
)

export default CCBiddingModalPage;
