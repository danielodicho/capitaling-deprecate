import React from 'react';
import countriesData from './countries.json';

function TestJson() {
    // countriesData is now an array of objects from countries.json
    console.log(countriesData); // You can see the array in the console

    return (
        <div>
            <h1>Testing JSON Import</h1>
            <ul>
                {countriesData.map(country => (
                    <li key={country.name}>{country.name} - {country.capital}</li>
                ))}
            </ul>
        </div>
    );
}

export default TestJson;
