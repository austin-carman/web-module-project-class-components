import React from 'react';

const Todo = props => {

    const handleToggle = () => {
        props.toggleItem(props.item.id);
    }

  return(
      <div onClick={handleToggle}>
          <h2>{props.item.task}</h2>
      </div>
  )
}

export default Todo;