import React, { Component } from 'react';
import AddTasks from './AddTasks';
import LoadTasks from './LoadTasks';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks:[
        {id: 1, content: "Tee süüa"},
        {id: 2, content: "Koori kartulid"},
      ]
    }
  }
  addTask = (task) => {
    task.id = Math.random();
    const tasks = [...this.state.tasks, task];

    this.setState({
      tasks
    })
  }
  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({
      tasks
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="blue-text text-darken-2">Taskful</h1>
        <AddTasks addTask={this.addTask}/>
        <LoadTasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;

