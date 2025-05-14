'use client';                             // ← Must be FIRST line
import { useState } from 'react';
import TodoList from '../components/todoitem'

export default function TodoForm() {

    function handleSubmit(event: { preventDefault: () => void; }) {
        event?.preventDefault()
    }

    const [name, setName] = useState('')


    return (
        <form onSubmit={handleSubmit}>
            
            <label>
                <input
                    type="string"
                    value={name}
                    onChange = {e => setName(e.target.value)}
                    placeholder="Type something">
                </input>
                <TodoList />
            </label>
        </form>
        
);
}
  