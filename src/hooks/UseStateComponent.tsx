import { useState } from "react";

const UseStateComponent = ()=>{
    const [arr, setArr] = useState<number[]>([]); //original never type
    const [name, setName] = useState<null | string>(null)
    return <div>
        <h1>Use State with TypeScript</h1>
        <button onClick={()=> setArr([...arr,arr.length + 1])} >Add To Array</button>
        {JSON.stringify(arr)}
        <button onClick={()=> setName('Si Thu Htet')} >Add Name</button>
        {name}
    </div>
}

export default UseStateComponent;