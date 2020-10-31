import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'todo': '', 'listOfToDos': []}
    }
    onClick= () => {
        console.log(this.state.todo);
        var newToDo = this.state.todo;
        var newList = this.state.listOfToDos;

        newList.push(newToDo);

        this.setState({'listOfToDos': newList, 'todo': ''})

    }

    onChange(e) {
        var newInput = e.target.value;
        this.setState({'todo': newInput})
    }
    
    render() {
      return (
          <div>
            <input type="text" onChange={(e) =>this.onChange(e)} value={this.state.todo}/>
            <button onClick={this.onClick}>Add ToDo</button>
            <ul>
                {this.state.listOfToDos.map(todo => <li>{todo}</li>)}
            </ul>
          </div>
    
      );
    
    }

}
export default ToDoList;
