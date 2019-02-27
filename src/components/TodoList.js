import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, checkToDo}) => (
    <ul>
        {todos.map(todo =>
            <Todo id={todo.id} {...todo} onClick={()=> checkToDo(todo.id)}/>
            )}
    </ul>
)

export default TodoList