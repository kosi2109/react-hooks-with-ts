import { useState , useEffect} from "react";

const UseEffectComponent = ()=>{
    const [val, setVal] = useState<number>(1);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setVal(pre => pre + 1)
        },1000)

        return ()=> clearInterval(timer)
    },[])
    return <div>
        <h1>UseEffect with TypeScript</h1>
        <p>{val}</p>
    </div>
}

export default UseEffectComponent;