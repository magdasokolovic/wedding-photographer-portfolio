import React, {createContext, useReducer, useContext} from 'react'

//define context:
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
    switch(action.type) {
        case 'CURSOR_TYPE': {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }
        default: throw new Error(`unhandled action type: ${action.type}`)
    }
   
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        cursorType: false,
        cursorStyles: ['pointer', 'hovered'],
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

//custom hook to pull data of dispatch and state:
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)