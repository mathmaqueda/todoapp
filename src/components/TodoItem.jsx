import styles from "./todoitem.module.css";
export default function TodoItem({item, todos, setTodos}) {
    function handleDelete(item) {
        setTodos(todos.filter(todo => todo!==item));
    }
    function handleDone(item) {
        const newArray = todos.map(todo => 
            item === todo.name ? {...todo, done: !todo.done} : todo
        );
        setTodos(newArray);
    }
    const isCompleted = item.done ? styles.completed : "";
    return(
        <div className={styles.todoItem}>
            <div className={styles.itemName} key={item}>
                <span className={isCompleted} onClick={() => handleDone(item.name)}>{item.name}</span>
                <span>
                    <button onClick={() => handleDelete(item)} className={styles.deleteButton}>X</button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
}