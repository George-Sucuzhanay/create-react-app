import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <header>To Do List</header>

          <ToDoList name="George" />
         
        </div>
      );
    
    }

}
export default App;
