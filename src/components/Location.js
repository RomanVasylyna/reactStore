import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import csc from 'country-state-city'

const Location = () => {

    // country.isoCode = city.countryCode

    let [countries, setCountries] = useState([]);
    let [cities, setCities] = useState([]);
    let [selectedCountry, setSelectedCountry] = useState('');
    let [selectedCity, setSelectedCity] = useState('');

    let [countryCode, setCountryCode] = useState('');

    useEffect(() => {
        setCountries(csc.getAllCountries());
        console.log(cities);
    }, [countries, cities, countryCode]);

    const getCities = countryCode => {
    setCountryCode(countryCode);
    cities.map(city => city.countryCode === countryCode ? console.log(city) : ''); 
    }

    return (
        <Form>
            <p style={{ fontWeight: 'bold' }}>Please Select Your Location</p>
            <p>Your location : {selectedCountry}, {selectedCity}</p>

            {/* Countries Select */}
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" onChange={e => getCities(e.currentTarget.value)}>
                    <option value="">Please Select Your Country</option>
                    {countries.map(country =>
                        <option
                            key={country.phonecode + country.name}
                            value={country.isoCode}>
                            {country.name}
                        </option>
                    )}
                </Form.Control>
            </Form.Group>

            {/* Cities Select */}
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>City</Form.Label>
                <Form.Control as="select" onChange={e => setSelectedCity(e.currentTarget.value)}>
                <option value="">Please Select Your City</option>
                    { cities.map(city =>
                        <option
                            key={city.name}
                            value={city.name}>
                            {city.name}
                        </option>)
                    }
                </Form.Control>
            </Form.Group>


        </Form>
    )
}

export default Location
