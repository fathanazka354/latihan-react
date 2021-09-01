import "./TodoForm.css"
import React, { useState } from "react";


const TodoForm = (props) => {
    // mengubah data yang awalnya dinamis menjadi statis
    const [getInputTodo, setInputTodo] = useState('')

    // Dibutuhkan event dikarenakan untuk mencatat apa2 yang diketikkan
    const handleSubmit = (event) => {
        event.preventDefault()

        // membuat data baru yang didlamnya ada id dan name
        const todoBaru = {
            id: Math.floor((Math.random() * 100) + 1),
            name: getInputTodo
        }

        // mengambil data yang berasal dari file lain lalu memasukkan data baru
        props.onCreateTodo(todoBaru)
        // data diset ke kosong
        setInputTodo('')
    }

    // menghandle data yang diketikkan
    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log(getInputTodo);
    }

    return (
        <div>
            {/* Ketika data di submit maka akan menjalankan perintah handlesubmit */}
            <form className="todoForm" onSubmit={handleSubmit}>
                <input type="text" value={getInputTodo} onChange={handleInputTodo} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default TodoForm