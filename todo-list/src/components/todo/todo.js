import "./todo.css";
import TodoList from "../todo-list/TodoList"
import TodoForm from "../todo-form/TodoForm"
import React, { useState } from "react";

const Todo = () => {
    // Memasukkan data dummy dengan menuliskan array
    const [getTodos, setTodos] = useState([
        { id: 1, name: "fathab" },
        { id: 2, name: "azka" },
        { id: 3, name: "praadana" },
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))

        console.log(getTodos);
    }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm onCreateTodo={eventCreateTodo} />
            {/* Untuk menambahkan data/mengambil data dari array */}
            <TodoList dataTodos={getTodos} />
        </div>
    );
}

export default Todo