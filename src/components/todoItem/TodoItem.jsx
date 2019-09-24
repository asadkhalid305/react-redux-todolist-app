import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import './Style.css'
import { editTodo, deleteTodo } from "../../actions/TodoActions";


class TodoItem extends Component {
    getStyle = () => {
        return { textDecoration: this.props.todo.completed ? 'line-through' : 'none' }
    }

    onChange = () => {
        let todo = { ...this.props.todo };
        todo.completed = !todo.completed
        this.props.editTodo(todo)
    }

    onClick = () => {
        this.props.deleteTodo(this.props.todo)
    }

    render() {
        return (
            <div className="todo-item" style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.onChange} />
                    {this.props.todo.title}
                    <button className='del' onClick={this.onClick}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default connect(null, { editTodo, deleteTodo })(TodoItem)