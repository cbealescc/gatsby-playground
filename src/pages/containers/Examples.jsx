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


const style = {
    backgroundImage: "url(" + "https://collectingcars.imgix.net/005243/DSC-0015.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

function ExampleContainers() {
    return (
        <>
            <div className={wrapper}>
                <h3>Full bleed:</h3>
                <div className={containerFullBleed} style={style}>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Ultra wide:</h3>
                <div className={containerUltraWide}>
                    <div className={'grid col-2'}>
                        <div className={'grid__item'} style={{textAlign: 'left'}}>
                            <h1>Title</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos quasi quibusdam?
                                Accusantium atque aut ea enim error, nobis qui similique veniam. Amet cupiditate
                                dicta, non quo sit tempore unde.</p>
                        </div>
                        <div className={'grid__item'}>
                            <img src="https://collectingcars.imgix.net/005243/DSC-0015.jpg" alt="Image"
                                 style={{margin: '0'}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Small:</h3>
                <div className={containerSmall}>
                    <div className={'grid col-2'}>
                        <div className={'grid__item'} style={{textAlign: 'left'}}>
                            <h1>Title</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos quasi quibusdam?
                                Accusantium atque aut ea enim error, nobis qui similique veniam. Amet cupiditate
                                dicta, non quo sit tempore unde.</p>
                        </div>
                        <div className={'grid__item'}>
                            <img src="https://collectingcars.imgix.net/005243/DSC-0015.jpg" alt="Image"
                                 style={{margin: '0'}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Narrow (w/images):</h3>
                <div className={containerNarrow_imgs}>
                    <img src="https://collectingcars.imgix.net/005243/DSC-0015.jpg" alt="Image"
                         style={{margin: '0'}}/>
                </div>
            </div>

            <div className={wrapper}>
                <h3>Narrow (copy):</h3>
                <div className={containerNarrow_copy}>
                    <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorum ducimus laboriosam
                        nemo neque officia quisquam quod tempore ullam voluptatum! Cum doloremque eius eum id,
                        laudantium provident quibusdam ratione voluptatum?</p>
                    <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorum ducimus laboriosam
                        nemo neque officia quisquam quod tempore ullam voluptatum! Cum doloremque eius eum id,
                        laudantium provident quibusdam ratione voluptatum?</p>
                </div>
            </div>
        </>
    )
}

export default ExampleContainers;