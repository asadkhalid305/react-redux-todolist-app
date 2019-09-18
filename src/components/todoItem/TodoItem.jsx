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
        this.props.todo.completed = !this.props.todo.completed

        this.props.editTodo(this.props.todo)
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

const mapsStateToProps = state => ({
    todos: state.todos.item,
})

export default connect(mapsStateToProps, { editTodo, deleteTodo })(TodoItem)