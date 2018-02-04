import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Ross', age:25}
    ]
  }

  switchNameHandler= () => {
      console.log("Was clicked");
      this.setState({
        persons :[
          {name: 'Maxmillan', age:28},
          {name: 'Manu', age:29},
          {name: 'Ross', age:30}
        ]

      })
}

  render() {
    return (
      <div className="App">
        <h1>Hi, This is a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies are:Racing</Person>
      </div>
    );
  }
}

export default App;
