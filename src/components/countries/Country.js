import React, { Component } from 'react'
import CountryItem from './CountryItem';

class Country extends Component {
    state = {
        countries: [
            {
                id: '1',
                flag:'https://restcountries.eu/data/est.svg',                
                name:'Germany',
                population:'233233',
                region:'Europe',
                capital:'Berlin'
            },
            {
                id: '2',
                flag:'https://restcountries.eu/data/est.svg',
                name:'Germany',
                population:'233233',
                region:'Europe',
                capital:'Berlin'
            },
            {
                id: '3',
                flag:'https://restcountries.eu/data/est.svg',
                name:'Germany',
                population:'233233',
                region:'Europe',
                capital:'Berlin'
            },
            {
                id: '4',
                flag:'https://restcountries.eu/data/est.svg',
                name:'Germany',
                population:'233233',
                region:'Europe',
                capital:'Berlin'
            }
        ]
    }

    render() {
        return (
            <div style={countryStyle}>
                {this.state.countries.map(country => ( 
                    <CountryItem key={country.id} country={country} />
                ))}   
            </div>
        )
    }
}

const countryStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '1rem',
}

export default Country
