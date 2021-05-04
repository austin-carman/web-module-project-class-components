import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            search: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        const change = (inputName, inputValue) => {
            this.setState({
                [inputName]: inputValue
                // input: e.target.value
            });
        }
        change(name, value);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            input: '',
            search: ''
        })
    }
    
    handleAddClick = () => {
        this.props.addItem(this.state.input)
    }

    handleClearClick = () => {
        this.props.clearItems();
    }

    // handleSearch = () => {
        
    // }
   

   
    render(){
        return(
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='add-clear-container'>
                        <input className='input' onChange={this.handleChange} type='text' name='input' value={this.state.input} placeholder='Add Items Here' />
                        <button className='btn' onClick={this.handleAddClick}>Add Item</button>
                        <button className='btn' onClick={this.handleClearClick}>Clear Completed</button>
                    </div>
                     <div className='search-container'>
                        <input className='search-bar input' onChange={this.handleChange} type='text' name='search' value={this.state.search} placeholder='Search Task Here' />
                        <button className='btn search-btn' onClick={this.handleSearch} >Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;