import { TodoCard } from "./TodoCard";
import React from 'react';

export function TodoList(props) {
    const { todos } = props
    

    const tab = 'Completed'
    const filterTodosList = tab === 'All' ?
        todos : 
        tab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex} 
                    todo={todo} />
                )
            })}

        </>
    )
}