 import React from 'react'
 
 function Todos({ setTodos,todos,text,id,done}) {
     //addEventListener typo things
     const deleteTodoHandler = () => {
        setTodos(todos.filter(todo => todo.id !== id))
     }
     const completeTodoHandler = () => {
        setTodos(todos.map(todo => 
            todo.id !== id
            ? todo : {
                id: todo.id,
                item: todo.item,
                done: !todo.done
            }))
     }
     return (
         <div className="todo">
             <li className={`todo-item ${done?"completed" :""}`}>{text}</li>
             <button onClick={completeTodoHandler}
                className ="complete-btn">
                <i className="fas fa-check"/>
             </button>
             <button onClick = {deleteTodoHandler}
                className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
         </div>
     )
 }
 
 export default Todos
 