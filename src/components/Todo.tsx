import { TodoItemType } from "../types/TodoItemType";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";


function Todo ()
{
    const [todoList, setTodoList] = useState<TodoItemType[]>([]);
    const addTodo = (text: string) => {
        const newTodo = {id: Date.now(), text, completed: false};
        setTodoList(prev => [...prev, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodoList(prev =>
        prev.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        )
    };

    const deleteTodo = (id: number) => {
        setTodoList(prev => prev.filter(todo => todo.id !== id));
    };

    return(
        <div>
            <TodoForm onAdd={addTodo} />
            <TodoList todoList={todoList} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
    );
}

export default Todo;