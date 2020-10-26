import React, { Component } from 'react'
import CountryItem from './CountryItem';

class Country extends Component {
    
    render() {  
        //console.log(this.state.users);
        return (
            <div style={countryStyle}>
                
                {this.props.users.map(user => ( 
                    <CountryItem key={user.name} user={user} />
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
