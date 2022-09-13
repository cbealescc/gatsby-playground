import React, {useEffect} from "react"
import {carStats} from "./carsData";

const carMakes = carStats.map(val => val.make);

// let {...carDataList} = carStats;

// Returns only cars with make of 'Audi'
// let audiOnly = carStats.filter(car => car.make === "Audi");

function CarsList() {
    // const [vehicleList, setVehicleList] = useState([carStats]);

    useEffect(() => {
        setActive();
        setFacelift();
    });

    const setFacelift = () => {
        // Adds the 'FaceLift' property and value to each car
        carStats.forEach(car => {
            car['faceLift'] = 'N/A';
            if (car.year <= 2011) {
                car['faceLift'] = 'no'
            } else {
                car['faceLift'] = 'yes';
            }
        })
    }

    const setActive = () => {
        carStats.forEach(car => {
            car['active'] = true;
        })
    }

    const filterResults = (e) => {
        let newResults = [...carStats];
        const targetId = e.target.id;

        carStats.forEach(car => {
            car.active = car.make === targetId;
        })
    }

    // let objectValues = Object.values(carStats);


    return (
        <>

            <ul>
                {/*{*/}
                {/*    carStats.map((item, i) => {*/}
                {/*    return <li key={i}>{item}</li>*/}
                {/*    ));*/}
                {/*}*/}

            </ul>

            <button
                onClick={(e) => filterResults(e)}
                id={'BMW'}
            >
                BMW Stats
            </button>

            <button
                onClick={(e) => filterResults(e)}
                id={'Audi'}
            >
                Audi Stats
            </button>
        </>
    )
}

export default CarsList;