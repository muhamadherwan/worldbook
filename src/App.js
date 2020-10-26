import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Country from './components/countries/Country';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    users:[],
    loading: false
  }
  async componentDidMount(){
    
    this.setState({ loading: true });

    const res = await axios.get('https://restcountries.eu/rest/v2/all');

    //const res = await axios.get('https://api.github.com/users');

    //console.log(res.data);

    //this.setState({ users: res.data, loading: false });

    //this.setState({ countries: res.data, loading: false });

    this.setState({ users: res.data, loading: false });
    
  }

  render(){
    //console.log(this.countries);
    return (
    
      <div>
        <Navbar />
        <div className='container'>
         <Country loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
      );
  }
  
}

export default App;
