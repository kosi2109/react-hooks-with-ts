import { useState , useEffect, useContext} from "react";
import UserContext,{UserState} from "./context/store";

function ConsumerComponent(){
    const user = useContext(UserContext);
    return (
        <div>
            <h3>{user.first}</h3>
            <h3>{user.last}</h3>
        </div>
    )
}

const UseContextComponent = ()=>{
    const [user, setUser] = useState<UserState>({
        first : "Si",
        last : "Thu Htet"
    })

    return <UserContext.Provider value={user}>
        <ConsumerComponent/>
    </UserContext.Provider>
}

export default UseContextComponent;