import './country.css'
const EveryCountry = ({country}) => {
   const {name,flags,coatOfArms,population,area}=country
    return (
        <div className="countryStyle">
            <h2> Country Name : {name.common}</h2>
            <img style={{width:'40px',height:'40px'}} src={coatOfArms.png} alt="" />
             <br/>
             <br />
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Offical Name: {name.official}</h4>


           
        </div>
    );
};

export default EveryCountry;