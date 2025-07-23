import { TodoItemType } from "../types/TodoItemType"
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

interface Props {
    todoList: TodoItemType[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
function TodoList ({todoList, onToggle, onDelete} : Props) {

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {todoList.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList