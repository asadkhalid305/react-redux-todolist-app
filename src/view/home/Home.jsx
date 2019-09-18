import React, { Component } from 'react'
import { connect } from "react-redux";

import Todos from '../../components/todos/Todos'
import AddTodo from '../../components/addTodo/AddTodo'
import { getTodos } from "../../actions/TodoActions";

class Home extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    //create
    // addTodo = (todo) => {
    //     Axios.post(`${baseUrl}`, todo)
    //         .then(res => this.setState({ todos: [res.data, ...this.state.todos] }))
    //         .catch(err => console.log(err))
    // }

    //retrieve
    // getTodos = () => {
    //     Axios.get(`${baseUrl}?_${todoLimit}`)
    //         .then(res => this.setState({ todos: res.data }))
    //         .catch(err => console.log(err))
    // }

    //update
    // editTodo = (id) => {
    //     const todos = [...this.state.todos]
    //     const todo = todos.map(todo => {
    //         if (todo.id === id) todo.completed = !todo.completed
    //         return todo
    //     })

    //     Axios.put(`${baseUrl}/${id}`, todo)
    //         .then(res => this.setState({ todos: todos }))
    //         .catch(err => console.log(err))
    // }

    //delete
    // deleteTodo = (id) => {
    //     let todos = [...this.state.todos]
    //     todos = todos.filter(todo => todo.id !== id)

    //     Axios.delete(`${baseUrl}/${id}`)
    //         .then(res => this.setState({ todos: todos }))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <AddTodo />
                <Todos
                    todos={this.props.todos}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }
}

const mapsStateToProps = state => ({
    todos: state.todos.items,
})

export default connect(mapsStateToProps, { getTodos })(Home)