import {useState} from 'react';
import styles from './form.module.css'

export default function Form({todos, setTodos}) {
    // cada item de todo
    const [todo, setTodo] = useState({name: "", done: false});
    return(
        <div>
            <p className={styles.message}>Click the items to mark as done!</p>
            <form className={styles.todoform}>
                <input onChange={(e) => setTodo({name:e.target.value, done:false})} type="text" placeholder='Enter todo item...' value={todo.name} />
                <button onClick={(e) => (e.preventDefault(), setTodos([...todos, todo]), setTodo({name:"", done: false}))} type="submit">Add</button>
            </form>
        </div>
    );
}