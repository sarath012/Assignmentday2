import React from 'react';
import './App.css';
import Child from './Components/Child';
import Calendardate from './Components/Calendardate';
import Mycomponent from './Components/Mycomponent';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Child state="default"/>
      <Child state="bar"/>
      <Child state="foo"/>

      <br/>
      <Calendardate/>

      <br/>
      <Mycomponent/>

      <br/>
      <Todo/>

    </div>
  );
}

export default App;


