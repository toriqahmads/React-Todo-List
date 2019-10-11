import React, { Component } from 'react';
import TodoList from './TodoList';
import uuid from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             id: uuid(),
             item: '',
             date: new Date(),
             editItem: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDate = (date) => {
        console.log(date)
        this.setState({
            date: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: this.state.id,
            item: this.state.item,
            date: this.state.date
        }

        const updatedItems = [...this.state.items, newItem]

        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
            date: new Date(),
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
            date: selectedItem.date,
            editItem: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <form action="" method="post" className="card my-3" onSubmit={this.handleSubmit}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
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
                            </div>
                            
                            <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-primary text-white">
                                        <i className="fa fa-calendar"></i>
                                    </div>
                                </div>
                                <DatePicker
                                    name="item" id="item" className="form-control text-capitalize"
                                    selected={this.state.date}
                                    onChange={this.handleDate}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    dateFormat="Pp"
                                />
                            </div>
                            </div>
                        </div>
                        <button type="submit" className={
                            this.state.editItem ? 
                            "btn btn-block btn-success mt-3" :
                            "btn btn-block btn-primary mt-3"
                        }>
                            {this.state.editItem ? 'Edit Item' : 'Add Item' }
                        </button>
                    </div>
                </form>
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