import TodoItem from "./todoitem";

interface List {
    value: string,
    array: String[]
}

export default function TodoList({value, array}: List) {
    
    return (
        <div>
            <li>
                <TodoItem value={value} />
            </li>
        </div>
);
  }
  