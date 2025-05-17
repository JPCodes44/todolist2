'use client';                             // ← Must be FIRST line
import { DetailedHTMLProps, FormEvent, InputHTMLAttributes, JSX, useState } from 'react';
import { TodoList } from '../components/todolist'

export const TodoForm = () => {

    const [value, setValue] = useState('')

    const [items, setItems] = useState<string[]>([])

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!value.trim()) return;       // ignore empty
        items.push(value);
        console.log(items);
        setValue(''); 
    }

    const handleDelete = (): JSX.Element | undefined => {
        if (!value.trim()) return;       // ignore empty
        setItems(prev => prev.slice(0, -1))
        setValue(''); 
    }

    const InputCard = (): JSX.Element => {
        return(
        <input
            type="string"
            style={{display: "flex", justifyContent: "center"}}
            value={value}
            onChange = {e => setValue(e.target.value)}
            placeholder="Type something">
        </input>)
    } 

    type LabelProps = {
        children?: React.ReactNode
    }

    const Label = (): JSX.Element => {
        return(
        <label style={{display: "flex", justifyContent: "center"}}></label>)
    }

    const PaddedDiv = (): JSX.Element => {
        return(
            <div
            style={{padding: "50px", display: "flex", justifyContent: "center"}}
        ></div>)
    }

    const SubmitButton = (): JSX.Element => {
        return(<button type="submit" style={{ display: 'none' }}></button>)
    }

    const DeleteButton = (): JSX.Element => {
        return(<button type="button" onClick={handleDelete}>Delete</button>)}

    return (
        <form onSubmit={handleSubmit} style={{padding: "50px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <PaddedDiv>
                <Label>
                    <InputCard />
                </Label>
            </PaddedDiv>
            <PaddedDiv>
                <TodoList value={value} array={items}/>
                <SubmitButton/>
                <DeleteButton/>
            </PaddedDiv>
        </form>
        
);
}
  