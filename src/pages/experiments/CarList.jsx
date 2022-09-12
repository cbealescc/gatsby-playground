import * as React from "react"
import {carStats} from "./carsData";

const carMakes = carStats.map(val => val.make);

// Returns only cars with make of 'Audi'
// let audiOnly = carStats.filter(car => car.make === "Audi");

// const changeMake = (e) => {
//     data['make'] = e.target.id;
//     console.log(data)
// }

function CarsList() {

    // Adds the 'FaceLift' property and value to each car
    carStats.forEach(car => {
        car['faceLift'] = 'N/A';
        if (car.year <= 2011) {
            car['faceLift'] = 'no'
        } else {
            car['faceLift'] = 'yes';
        }
    })

    return (
        <>
            <ul>
                {carMakes.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

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
        </>
    )
}

export default CarsList;