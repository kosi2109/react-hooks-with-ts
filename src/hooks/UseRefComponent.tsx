import { useState , useEffect, useRef} from "react";

const UseRefComponent = ()=>{
    const input = useRef<null | HTMLInputElement>(null)
   
    return <div>
        <h1>UseRef with TypeScript</h1>
        <input type="text" ref={input} />
    </div>
}

export default UseRefComponent;