'use client';                             // ← Must be FIRST line
import { useState } from 'react';
import { TodoList } from '../components/todolist'

export default function TodoForm() {

    const [value, setValue] = useState('')

    const [items, setItems] = useState<string[]>([])

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (!value.trim()) return;       // ignore empty
        items.push(value);
        console.log(items);
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
                <TodoList value={value} array={items}/>
            <button type="submit" style={{ display: 'none' }}>
        
      </button>
            </div>
        </form>
        
);
}
  