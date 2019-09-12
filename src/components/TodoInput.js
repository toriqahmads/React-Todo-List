import React, { Component } from 'react';
import TodoList from './TodoList';
import uuid from 'uuid';

class TodoInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             id: uuid(),
             item: '',
             editItem: false
        }
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: this.state.id,
            item: this.state.item
        }

        const updatedItems = [...this.state.items, newItem]

        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
            editItem: false
        })
    }

    clearList = () => {
        this.setState({
            items: []
        })
    }

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter((item) => {
            return item.id !== id
        })

        this.setState({
            items: filteredItems
        })
    }

    handleEdit = (id) => {
        const filteredItems = this.state.items.filter((item) => {
            return item.id !== id
        })

        const selectedItem = this.state.items.find((item) => {
            return item.id === id
        })

        this.setState({
            id: id,
            items: filteredItems,
            item: selectedItem.item,
            editItem: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="card card-body my-3">
                    <form action="" method="post" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fa fa-book"></i>
                                </div>
                            </div>
                            <input type="text" name="item" id="item" className="form-control text-capitalize" 
                                placeholder="add a todo item" value={this.state.item} onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className={
                            this.state.editItem ? 
                            "btn btn-block btn-success mt-3" :
                            "btn btn-block btn-primary mt-3"
                        }>
                            {this.state.editItem ? 'Edit Item' : 'Add Item' }
                        </button>
                    </form>
                </div>
                <TodoList items={this.state.items} 
                    clearList={this.clearList} 
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    />
            </React.Fragment>
        );
    }
}

export default TodoInput;