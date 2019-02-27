import React from 'react'

const Todo = ({ onClick, finished, text }) => (
    <li onClick={onClick}
      style={{
        textDecoration: finished ? 'line-through' : 'none'
        }}
    >
      {text}
    </li>
  )

export default Todo