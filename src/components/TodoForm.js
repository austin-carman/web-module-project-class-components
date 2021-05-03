import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            input: ''
        })
    }
    
    handleAddClick = () => {
        this.props.addItem(this.state.input)
    }

    handleClearClick = () => {
        this.props.clearItems();
    }
   

   
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' name='item' value={this.state.input}/>
                    <button onClick={this.handleAddClick}>Add Item</button>
                    <button onClick={this.handleClearClick}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;