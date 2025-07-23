import { useState } from "react";

interface Props{
    onAdd: (text: string) => void;
}

function TodoForm ({ onAdd }: Props) {

    const [inputValue, setInputValue] = useState<string>('');
    
     const handleSubmit = (event: React.FormEvent) => {
        if (!inputValue.trim()) return;
        onAdd(inputValue);
        setInputValue("");
        event.preventDefault();
    };

    return(
    <form onSubmit={handleSubmit}>
        <h1>What you got going on?</h1>
        <input
            className="InputBox"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Add task...'/>
            <button type="submit">Add</button>
    </form>)
}

export default TodoForm