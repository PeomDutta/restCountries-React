import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, flag, population, region } = props.country;
    return (
        <div className='country'>
            <h1>Name: {name}</h1>
            <p>Capital: {capital}</p>
            <img src={flag} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;