import createDataContext from "./createDataContext";

// Will be called by react directly, when we call dispatch function
// return some new state
const authReducer = (state, action) => {

    switch (action.type) {

        default:
            return state;
    }
}

// Define action functions
// For modifying state



export const { Provider, Context } = createDataContext(
    authReducer,
    // object with action functions
    {

    },
    // initial state
    {
        isSignedIn: false
    }
)