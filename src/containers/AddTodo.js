import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


let AddTodo = ({dispatch}) => {
    let input

return(
    <div>
        <form onSubmit={e=>{
            e.preventDefault();
            dispatch(addTodo(input.value))
            input.value = ''
        }}
        >
        
        <input ref={node => {
            input = node
        }}
        />

        <button type="submit">Submit</button>
        </form>
    </div>
)
}

AddTodo = connect()(AddTodo)

export default AddTodo