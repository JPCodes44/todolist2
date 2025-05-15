import { useState } from "react";


interface Card { id: number
    text: string    
}

export default function TodoItem({value}: {value: string}) {


    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
  }
  