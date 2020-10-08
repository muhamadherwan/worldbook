import React from 'react'
import PropTypes from 'prop-types';

const CountryItem = ( { country:{flag, name, population, region, capital} } ) => {

    return (
        <div className='card text-center'>
            <img
                src={flag}
                alt={name}
                className='round-img'
                style={{ width: '60px'}}
            />
            <h3>{name}</h3>
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p>Capital:{capital}</p>

            <div>
                {/* <Link to={`/country/${id}`} className="btn btn-dark btn-sm my-1">More</Link> */}
                More
            </div>

        </div>
    )
}

// set props type
CountryItem.propTypes = {
    country: PropTypes.object.isRequired
};


export default CountryItem








