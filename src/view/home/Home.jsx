import React, { Component } from 'react'
import { connect } from "react-redux";

import Todos from '../../components/todos/Todos'
import AddTodo from '../../components/addTodo/AddTodo'
import { getTodos } from "../../actions/TodoActions";

class Home extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div>
                <AddTodo />
                <Todos
                    todos={this.props.todos}
                />
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    todos: state.todos.items,
})

export default connect(mapsStateToProps, { getTodos })(Home)