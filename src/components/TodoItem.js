import React, { Component } from 'react';

class TodoItem extends Component {   
    render() {
        const {item, handleDelete, handleEdit} = this.props
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>{item}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success" onClick={handleEdit}>
                            <i className="fa fa-pencil"></i>
                        </span>
                        <span className="mx-2 text-danger" onClick={handleDelete}>
                            <i className="fa fa-trash"></i>
                        </span>
                    </div>
                </li>
            </div>
        );
    }
}

export default TodoItem;