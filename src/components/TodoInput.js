import React, { Component } from 'react';
import TodoList from './TodoList';
import ModalItem from './ModalItem';
import uuid from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             id: uuid(),
             title: '',
             item: '',
             description: '',
             date: new Date(),
             modal: false,
             editItem: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDate = (date) => {
        this.setState({
            date: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: this.state.id,
            title: this.state.title,
            item: this.state.item,
            description: this.state.description,
            date: this.state.date
        }

        const updatedItems = [...this.state.items, newItem]

        this.setState({
            items: updatedItems,
            item: '',
            title: '',
            description: '',
            id: uuid(),
            date: new Date(),
            editItem: false
        })
    }

    handleCloseModal = () => {
        this.setState({
            item: '',
            title: '',
            description: '',
            id: uuid(),
            date: new Date(),
            editItem: false,
            modal: false
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
            title: selectedItem.title,
            item: selectedItem.item,
            date: selectedItem.date,
            description: selectedItem.description,
            editItem: true
        })
    }

    handleView = (id) => {
        const selectedItem = this.state.items.find((item) => {
            return item.id === id
        })


        this.setState({
            id: id,
            item: selectedItem.item,
            title: selectedItem.title,
            date: selectedItem.date,
            description: selectedItem.description,
            modal: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <form action="" method="post" className="card my-3" onSubmit={this.handleSubmit}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-primary text-white">
                                            <i className="fa fa-book"></i>
                                        </div>
                                    </div>
                                    <input type="text" name="title" id="title" className="form-control text-capitalize" 
                                        placeholder="add a todo title" value={this.state.title} onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr></hr>
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
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-primary text-white">
                                            <i className="fa fa-book"></i>
                                        </div>
                                    </div>
                                    <textarea name="description" id="description" className="form-control text-capitalize"  rows="3"
                                        placeholder="add a description" value={this.state.description} onChange={this.handleChange}
                                    >
                                    </textarea>
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
                    handleView={this.handleView}
                    />
                
                <ModalItem
                    key={this.state.id}
                    title={this.state.title} 
                    item={this.state.item}
                    date={this.state.date}
                    modal={this.state.modal}
                    description={this.state.description}  
                    handleCloseModal={this.handleCloseModal} 
                    ref={e => this.modal = e}
                />
            </React.Fragment>
        );
    }
}

export default TodoInput;