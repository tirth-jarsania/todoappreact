import React from 'react'
import Todos from './Todos.js';
function TodoList({todos, setTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list" >
                {
                    todos.map((todo) => 
                    <Todos
                            setTodos={setTodos}
                            todos = {todos}
                            text={todo.item}
                            id ={todo.id}
                            done = {todo.done}
                     />)
                }
            </ul> 

        </div>
    )
}

export default TodoList
