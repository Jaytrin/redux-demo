import React from 'react'
import AddTodo from '../containers/AddTodo'
import ShowTodoList from '../containers/ShowTodoList'

const App = () => (
  <div>
    <h3>To Do Demo with Redux</h3>
    <p>Please enter a task and click submit</p>
    <p>After finishing a task, please click on the listing</p>
    <AddTodo />
    <ShowTodoList />
  </div>
)

export default App;
