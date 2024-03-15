import './country.css';
const Country = ({country}) => {

    const {name, flags, capital, region} = country;

    
    return (
        <div>
            <div className='grid-span'>
                <h3>Name: {name.common}</h3>
                <img className='flag-img' src={flags.png} alt="" />
                <p>Offical Name: {name.official}</p>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p></p>
            </div>
            
        </div>
    );
}

export default Country;
