import { useEffect, useState } from "react";
import Country from "../country/Country";
import './countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    return (
        <div >
            <h3>Total Countries: {countries.length}</h3>
            <div className="grid">
            {
                countries.map((country) => (<Country key={country.ccn3}  country ={country} /> ))
            }
            </div>
        </div>
    );
}

export default Countries;
