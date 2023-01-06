import React, { Component } from "react";

import Login from './components/Login/Login.js'
import Navigation from './components/Navigation/Navigation';
import CalendarForm from './components/Calendar/CalendarForm';

import './App.css';

const initialState = {
  route: 'home',
  user: {
    name: '',
    password: '',
    dates: [
      {}
    ]
  },
  bookedDates: {}

}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }


  onSubmit = () => {
    fetch('http://localhost:3000/booked', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, {
          entries: count
        }))
      })



  }

  // loadUser = (data) => {
  //   this.setState({
  //     user: {
  //       id: data.id,
  //       name: data.name,
  //       password: data.password,
  //       dates: data.dates,
  //       bookedDates: data.bookedDates
  //     }
  //   })
  // }


  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState);
    }
    this.setState({ route: route })
  }

  render() {
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route} />
        {this.state.route === 'home'
          ? <CalendarForm user={this.state.user} bookedDates={this.state.bookedDates} />
          : <Login onRouteChange={this.onRouteChange}
          // loadUser={this.loadUser} 
          />
        }
      </div>
    );
  }
}

export default App;
