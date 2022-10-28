import React from "react"

import {
    wrapper,
    containerUltraWide,
    containerFullBleed,
    containerSmall,
    containerNarrow_imgs,
    containerNarrow_copy,
    content
} from './containers.module.scss';


function WireframeContainers() {
    return (
        <>
            <div className={wrapper}>
                <h3>Full bleed:</h3>
                <div className={containerFullBleed}>
                    <div className={content}>
                        <div className={content}>
                            <h1>Area</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Ultra wide:</h3>
                <div className={containerUltraWide}>
                    <div className={content}>
                        <h1>Area</h1>
                    </div>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Small:</h3>
                <div className={containerSmall}>
                    <div className={content}>
                        <h1>Area</h1>
                    </div>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Narrow (w/images):</h3>
                <div className={containerNarrow_imgs}>
                    <div className={content}>
                        <h1>Area</h1>
                    </div>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Narrow (copy):</h3>
                <div className={containerNarrow_copy}>
                    <div className={content}>
                        <h1>Area</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WireframeContainers;