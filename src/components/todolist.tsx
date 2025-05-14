import TodoItem from "./todoitem";



export default function TodoList(name: {name: string}) {
    
    return (
        <div>
            <li>
                <TodoItem name={name} />
            </li>
        </div>
);
  }
  