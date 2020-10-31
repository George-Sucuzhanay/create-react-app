import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    handleIncrement = product => {
        this.setState({ value: this.state.value + 1})
    };

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1});
    };
    render() {
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={this.doHandleIncrement}
            className="btn btn-secondary btn-sm">Increment
            </button>
            <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2">Delete</button>
        </div>

        );
    }  
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value == 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count == 0 ? 'Zero' : count;
    }
}
 
export default Counter;


 // I learned about:
    // JSX
    // Rendering Lists
    // Conditional Rendering
    // Handing Events
    // Updating the State

    // Up Next:
    // Composing Components in ReactJS: Pass Data, Raise and Handle Events, Multiple Components in Syncs,
    // Functional Components and Lifecycle Hooks


    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
        
    // }