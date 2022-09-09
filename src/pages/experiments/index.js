import * as React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import {carStats} from "./carsData";

// console.log(carStats)

// const changeMake = (e) => {
//     data['make'] = e.target.id;
//     console.log(data)
// }

const carMakes = carStats.map(val => val.make);
console.log(carMakes)

const ExperimentsPage = () => (
    <Layout>
        <Seo title="JS Experiments Page"/>
        <h1>JS Experiments</h1>

        <div className={'experiment-box'}>
            <h3>Object Mutation</h3>
            <ul>
                {carMakes.map((item, index) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
            <p>
                {/*{data.make}*/}
                {/*<br/>*/}
                {/*{data.model}*/}
                {/*<br/>*/}
                {/*{data.color}*/}
                {/*<br/>*/}
                {/*{data.year}*/}
            </p>

            <button
                // onClick={(e) => changeMake(e)}
                id={'BMW'}
            >
                BMW Stats
            </button>

            <button
                // onClick={(e) => changeMake(e)}
                id={'Audi'}
            >
                Audi Stats
            </button>

        </div>

        <div className={'experiment-box'}>
            <h3>Property Accessors</h3>
        </div>

        <div className={'experiment-box'}>
            <h3>Associative Arrays</h3>
        </div>

        <div className={'experiment-box'}>
            <h3>Anonymous Functions</h3>
        </div>

        <div className={'experiment-box'}>
            <h3>Passing Props through components</h3>
        </div>


        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ExperimentsPage
