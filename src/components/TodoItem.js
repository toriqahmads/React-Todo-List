import React, { Component } from 'react';
import moment from 'moment';

class TodoItem extends Component {   
    render() {
        const {item, date, handleDelete, handleEdit} = this.props
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex justify-content-between">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>
                                {item}
                            </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h6>
                                {moment(date).format('D MMMM YYYY - hh:mm')}
                            </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="todo-icon">
                            <span className="mx-2 text-success" onClick={handleEdit}>
                                <i className="fa fa-pencil"></i>
                            </span>
                            <span className="mx-2 text-danger" onClick={handleDelete}>
                                <i className="fa fa-trash"></i>
                            </span>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default TodoItem;