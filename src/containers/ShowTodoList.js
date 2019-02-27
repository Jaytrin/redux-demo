import { connect } from 'react-redux'
import { checkToDo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
    todos: state.todos
  })

const mapDispatchToProps = dispatch => ({
    checkToDo: id => dispatch(checkToDo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)