 import React from 'react'
 
 function Form({inputText,setInputText,todos,setTodos}) {

    const submitTodoHandler = (event) => {
        event.preventDefault();
        if(inputText !== "")
        {
            setTodos(
                    [...todos,{
                    id: Date.now(),
                    item: inputText,
                    done: false
                }]
            );
        setInputText("");
        }
        else 
            alert("empty string is not validated")
    }
    const inputTodoHandler = (event) => {
        setInputText(event.target.value);
    }
     return (
        <form autoComplete="off">
          <input value={inputText}
                type="text" 
                placeholder="add new task"  
                className="todo-input"
                onChange={inputTodoHandler} />
          <button type="submit" 
                  className ="todo-button"
                  onClick={submitTodoHandler}>
            <i className="fas fa-plus-square"></i>
          </button>
        </form>
     )
 }
 
 export default Form
 