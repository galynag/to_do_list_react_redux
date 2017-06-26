import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  render() {
    const { todos, actions } = this.props;
    console.log(actions);
     return (
      <section className="my-main">
        <ul className="my-todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions}/>
          )}
        </ul>
      </section>
    )
  }
}
