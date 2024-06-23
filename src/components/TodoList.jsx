import TodoItem from './TodoItem';
import styles from './todolist.module.css';

export default function TodoList({todos, setTodos}) {
    const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
    return(
        <div className={styles.todolist}>
            {sortedTodos.map(item => (
                <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    );
}