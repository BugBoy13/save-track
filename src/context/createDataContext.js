import React, { useReducer } from 'react'

// reducer, action object
export default (reducer, actions, defaultValue) => {

    const Context = React.createContext();

    // helper provider component
    const Provider = ({ children }) => {

        // reducer function with all switch cases
        // default State
        const [state, dispatch] = useReducer(reducer, defaultValue);

        // loop over all object in actions
        // we need to call those with dispatch
        // dispatch is a function that we can call with some action object and whenever we do, 
        // react is gonna take that action object, it automatically sends it to reducer.
        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider
                value={{ state, ...boundActions }} >
                {children}
            </Context.Provider>
        )
    }

    return {
        Context, Provider
    }

}