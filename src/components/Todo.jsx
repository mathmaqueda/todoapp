import {useState} from 'react';
import TodoList from './TodoList';
import Form from './Form';
import Footer from './Footer';

export default function Todo() {
    // todos itens de todo em forma de array
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter(todo => todo.done === true).length;
    const totalTodos = todos.length;
    return(
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer totalTodos={totalTodos} completedTodos={completedTodos}/>
        </div>
    );
}