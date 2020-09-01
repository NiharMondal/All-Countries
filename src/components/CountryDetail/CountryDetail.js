import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'
const CountryDetail = () => {
    const {name } = useParams();
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0])
            })
    },[])     
        return (
        
        <div className='detailInfo'>
                <h3 className='text-success'>Name: {name} <span>({country.cioc})</span> </h3>
                <h4> Capital: {country.capital}</h4>
                <h5 className='text-danger'>Population: {country.population} </h5>
                <h4>Area: {country.area}</h4>
                <h6>Timezone: {country.timezones}</h6>
              
                <h6>Callingcode: +{country.callingCodes}</h6>

                 
        </div>
    );
};

export default CountryDetail;