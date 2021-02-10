import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import
import styled from 'styled-components'

const StyledButton = styled.button`
// background-color: green;
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit; 
border: 1px solid blue;
padding: 8px;
cursor: pointer;

// hover
&:hover {
  // background-color: lightgreen;
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}
`

class App extends Component {
  state = {
    persons: [
      { id: 'test1', name: 'Tom', age: 40 },
      { id: 'test2', name: 'Bob', age: 50 },
      { id: 'test3', name: 'Jerry', age: 20 }
    ],
    otherState: 'string',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // goes to backticks on top
    // const style = {
    //   backgroundColor: 'green', // changed
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // 
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // toggle to red - no need anymore, it is in line 9 now ( in the backticks )
      // style.backgroundColor = 'red'
    }

    // const classes = ['red', 'bold'].join(' '); // return string
    // change it dynmicaly:
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red') // red
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // red and bold
    }
    if (this.state.persons.length <= 0) {
      classes.push('yellow')
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        {/* <p>I am a P tag!</p> */}
        <p className={classes.join(' ')}>I am a P tag!</p>

        {/* <button --> changed to styledButton for button hover effect
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> */}

        <StyledButton alt= {this.state.showPersons}
          // style={style} --> no need here
          onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>

        {persons}
      </div>
    );

  }
}

export default App;