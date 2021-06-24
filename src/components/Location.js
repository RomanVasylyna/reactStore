import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import csc from 'country-state-city';
import { connect } from 'react-redux';
import { setCountry, setCity, clearCity } from '../components/store/actions';

const Location = (props) => {
    
    // Получаем города и страны и загоняем их в местный state приложения
    let [countries, setCountries] = useState([]);
    let [cities, setCities] = useState([]);
    
    useEffect(() => {
        setCountries(csc.getAllCountries());
    }, [countries, cities]);

    const getCities = (countryCode) => {
        // Получаем страну и загоняем ее в store
        props.dispatch(setCountry(csc.getCountryByCode(countryCode).name));
        setCities(csc.getCitiesOfCountry(countryCode));
        // Очищаем инпут
        props.dispatch(clearCity());
    }

    return (
        <Form>
            <p style={{ fontWeight: 'bold' }}>Please Select Your Location</p>
            <p>Your location : {props.nationality.country}, {props.nationality.city}</p>

            {/* Countries Select */}
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" onChange={e => getCities(e.currentTarget.value)}>
                    <option value="">Please Select Your Country</option>
                    {countries.map(country =>
                        <option
                            key={country.phonecode + country.name}
                            name={country.name}
                            value={country.isoCode}>
                            {country.name}
                        </option>
                    )}
                </Form.Control>
            </Form.Group>

            {/* Cities Select */}
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>City</Form.Label>
                <Form.Control as="select" onChange={e => props.dispatch(setCity(e.currentTarget.value))}>
                    <option value="">Please Select Your City</option>
                    {cities.map((city, index) =>
                        <option
                            key={index}
                            value={city.name}>
                            {city.name}
                        </option>)
                    }
                </Form.Control>
            </Form.Group>


        </Form>
    )
}

const mapStateToProps = state => {
    return {
        nationality: state.nationality
    }
}

export default connect(mapStateToProps)(Location);
