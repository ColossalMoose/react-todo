import { useState } from "react";

function TodoForm () {

    const [inputValue, setInputValue] = useState<string>('');
    
    const handleinput = (event: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(event.target.value);
    }
    return(
    <form>
        <h1>What you got going on?</h1>
        <input
            className="InputBox"
            value={inputValue}
            onChange={handleinput}
            placeholder='Add task...'/>
    </form>)
}

export default TodoForm