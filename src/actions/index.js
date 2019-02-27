let toDoID = 0;

export const addTodo = (text)=> {
    return {type: 'addToDo',
            id: toDoID++,
        text}
}

export const checkToDo = (id)=>{
    return {type: 'checkToDo',
            id}
}

