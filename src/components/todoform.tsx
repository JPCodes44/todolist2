'use client';                             // ← Must be FIRST line
import { useState } from 'react';
import TodoList from '../components/todoitem'

export default function TodoForm() {

    const [value, setValue] = useState('')

    const array: String[] = []

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (!value.trim()) return;       // ignore empty
        array.push(value)
        console.log(value)
        setValue(''); 
    }

    


    return (
        <form onSubmit={handleSubmit} style={{padding: "50px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div
                style={{padding: "50px", display: "flex", justifyContent: "center"}}
            >
                <label style={{display: "flex", justifyContent: "center"}}>
                    <input
                        type="string"
                        style={{display: "flex", justifyContent: "center"}}
                        value={value}
                        onChange = {e => setValue(e.target.value)}
                        placeholder="Type something">
                    </input>
                </label>
            </div>
            <div style={{padding: "50px", display: "flex", justifyContent: "center"}}>
                <TodoList {...{value, array}}/>
            <button type="submit" style={{ display: 'none' }}>
        
      </button>
            </div>
        </form>
        
);
}
  