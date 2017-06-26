import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    completeTodo: PropTypes.func.isRequired
  }
  handleCompleteClick = () => {
    this.props.completeTodo(this.props.todo.id);
  }
  render() {
    const { todo } = this.props;
    return (
      <li className={classnames({
          completed: todo.completed
      })}>
        <div className="view" style={{ display: 'flex', alignItems: 'center' }}>
          <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={this.handleCompleteClick}
          />
          <label>
            {todo.text}
          </label>     
        </div>
      </li>
    )
  }
}
