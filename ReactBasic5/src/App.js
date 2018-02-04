import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, This is a React App</h1>
        <Person name="Max" age='23'/>
        <Person name="Joe" age='25'/>
        <Person name="ross" age ='24'>My Hobbies are:Racing</Person>  

      </div>
    );
  }
}

export default App;
