import { createContext } from "react";

const initialState = {
    first : "Ko",
    last : "Si"
}

export type UserState = {
    first : string,
    last : string
}

const context = createContext<UserState>(initialState);

export default context;
