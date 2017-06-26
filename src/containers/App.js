import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = props => (
  <div>
    <Header addTodo={props.actions.addTodo} />
    <MainSection {...props}  />
  </div>
)

/*Определяем метод mapStateToProps для чтения состояния*/

const mapStateToProps = state => ({
  todos: state.todos.todos
})

/*Определяем метод mapDispatchToProps для передачи события. mapDispatchToProps отправляет действие. Это единственный способ изменить состояние.*/

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

/*Генерируем компонент путем передачи созданных функций в connect(). Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
