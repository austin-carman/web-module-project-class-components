import React from 'react';

const Todo = props => {

    const handleToggle = () => {
        props.toggleItem(props.item.id);
    }

  return(
      <div className={`${props.item.completed ? 'completed' : 'todo-item'} list-item`} onClick={handleToggle}>
          <h3>{props.item.task}</h3>
      </div>
  )
}

export default Todo;