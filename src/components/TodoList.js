import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit, handleView} = this.props
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">
                        Todo List
                    </h3>
                    {
                        items.map((item) => {
                            return <TodoItem 
                                key={item.id} 
                                item={item.item}
                                date={item.date}
                                description={item.description} 
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                                handleView={() => handleView(item.id)}
                                />
                        })
                    }

                    <button type="button" 
                        className="btn btn-danger btn-block text-capitalize mt-5" 
                        onClick={clearList}>
                        Clear List
                    </button>
                </ul>
            </div>
        );
    }
}

export default TodoList;