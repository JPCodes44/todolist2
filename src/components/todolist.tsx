import { JSX } from "react";
import { TodoItem } from "./todoitem";

interface List {
    value: string,
    array: string[]
}

export const TodoList = ({value, array}: {value: string; array: string[];}) => {
    
    const listItems = array.map((text, idx) => <li key={idx}>{text}</li>)
    return (
        <div>
            {listItems}
        </div>
);
  }
  