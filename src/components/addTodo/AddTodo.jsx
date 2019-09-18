import React, { Component } from 'react'
import { connect } from "react-redux";

import './Style.css'
import { titleChanged, addTodo } from "../../actions/TodoActions";

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.props.titleChanged(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault()

        const todo = {
            title: this.props.title,
            completed: false
        }

        this.props.addTodo(todo)
        this.props.titleChanged('')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add todo..."
                        value={this.props.title}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div >
        )
    }
}

const mapsStateToProps = state => ({
    title: state.todos.title,
})

export default connect(mapsStateToProps, { titleChanged, addTodo })(AddTodo)