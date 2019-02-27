const todos = (state = [], action) =>{
    switch(action.type){
        case 'addToDo':
        return [...state,
        {
            id: action.id,
            text: action.text,
            finished: false
        }]
        break;
        case 'checkToDo':
        return state.map((todo)=>{
            if(todo.id === action.id){
                return {...todo, finished: !todo.finished}
            } else {
                return todo
            }
        })
        break;
        default:
            return state
    }
}

export default todos