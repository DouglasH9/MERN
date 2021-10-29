
import './App.css';
import React from 'react';
import PersonCard from './Components/PersonCard';
import PersonCard2 from './Components/PersonCard2';

var personArr = [
  {"firstName" : "Jane", "lastName" : "Doe", "age" : 45, "hairColor" : "Black"},
  {"firstName" : "John", "lastName" : "Smith", "age" : 88, "hairColor" : "Brown"},
  {"firstName" : "Millard", "lastName" : "Fillmore", "age" : 50, "hairColor" : "Brown"},
  {"firstName" : "Maria", "lastName" : "Smith", "age" : 62, "hairColor" : "Brown"}
]

function App() {
  return (
    <div className="App">
      {personArr.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      })}
      <PersonCard2 firstName="Doug" lastName="Herman" age={39} hairColor="Brown"/>
    </div>
  );
}

export default App;
