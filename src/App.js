import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const todo = [
  {
    task: 'Organize Garage',
    id: '0',
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: '1',
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  };

  addItem = (input) => {
    const newTask = {
      task: input,
      id: this.state.todo.length,
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  toggleItem = (id) => {
    const newTasks = this.state.todo.map(item => {
      if(item.id === id) {
        return {...item, completed: !item.completed}
      } else {
        return (item);
      }
    });
    this.setState({
      todo: newTasks
    });
  }

  clearItems = () => {
    const remainingTasks = this.state.todo.filter(item => {
      return(item.completed === false)
    });
    this.setState({
      todo: remainingTasks
    });
  }

  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearItems={this.clearItems} />
        <TodoList list={this.state.todo} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
