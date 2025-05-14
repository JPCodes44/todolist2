import { useState } from "react";


interface Card { id: number
    text: string    
}

export default function TodoItem(name: {name: string}) {


    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
  }
  