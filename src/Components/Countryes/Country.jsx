import { useEffect } from "react";
import { useState } from "react";
import EveryCountry from "../Country/EveryCountry";
import'./countryes.css'

const Country = () => {
    const [country,setCountry]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div className="countryes">
           <p>country :{country.length}</p>
           {
            country.map(country=><EveryCountry  key={country.cca3} country={country}></EveryCountry>)
           }
        </div>
    );
};

export default Country;