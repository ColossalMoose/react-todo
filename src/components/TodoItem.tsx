import { TodoItemType } from "../types/TodoItemType";
import styles from "./TodoList.module.css";

interface Props {
    todo: TodoItemType;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TodoItem ({todo, onToggle, onDelete} : Props) {
    
    return (
        <li className={styles.item}>
            <span
                className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
                onClick={() => onToggle(todo.id)}>
                      {todo.text}         
                </span>
                <button 
                        onClick={() => onDelete(todo.id)}
                        className={styles.deleteButton}
                        aria-label="Delete">x</button>

        </li>
    );
}

export default TodoItem