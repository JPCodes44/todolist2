'use client';                             // ← Must be FIRST line
import { ChangeEvent, DetailedHTMLProps, FormEvent, InputHTMLAttributes, JSX, useCallback, useState } from 'react';
import { TodoList } from '../components/todolist'
import { FC } from 'react'
import React from 'react';


type InputCardProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type LabelProps = {
    children?: React.ReactNode
}

type PaddedDivProps = {
    children?: React.ReactNode
}


const InputCard: FC<InputCardProps> = ({value, onChange}) => {
    return(
    <input
        type="string"
        style={{display: "flex", justifyContent: "center", borderColor: "white", borderWidth: "1px", padding: "10px"}}
        value={value}
        onChange = {onChange}
        placeholder="Type something">
    </input>)
} 


const Label: FC<LabelProps> = ({children}) => {
    return(
        <label style={{display: "flex", justifyContent: "center"}}>{children}</label>)
}


const PaddedDiv: FC<PaddedDivProps> = React.memo(({children}) => {
    return(
        <div
        style={{padding: "50px", display: "flex", justifyContent: "center"}}
    >{children}
    </div>)
})

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


    const SubmitButton = (): JSX.Element => {
        return(<button type="submit" style={{ display: 'none' }}></button>)
    }

    const DeleteButton = (): JSX.Element => {
        return(<button type="button" onClick={handleDelete}>Delete</button>)}

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}, [setValue])

    return (
        <form onSubmit={handleSubmit} style={{padding: "50px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <PaddedDiv>
                <Label>
                <InputCard value={value} onChange={handleChange}/>
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
  