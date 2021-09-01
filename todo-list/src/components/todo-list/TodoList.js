import "./TodoList.css";
import React from "react";

// props untuk mengambil data yang dikirimkan dari file lain
const TodoList = (props) => {
    return (
        <div>
            <ul>
                {/* data yang ada didalam props dimap */}
                {
                    props.dataTodos.map((todo) => {
                        return <li key={todo.id}>
                            {todo.name}
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList