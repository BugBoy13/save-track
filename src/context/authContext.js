import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Will be called by react directly, when we call dispatch function
// return some new state
const authReducer = (state, action) => {

    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return {
                ...state, token: action.payload, errorMessage: null
            }
        default:
            return state;
    }
}

// Define action functions
// For modifying state
const signup = (dispatch) => {

    return async ({ email, password }) => {

        try {
            const response = await trackerApi.post(`/signup`, { email, password })
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token })
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
        }
    }
}

const signin = (dispatch) => {

    return ({ email, password }) => {

    }
}

const signout = (dispatch) => {

    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    // object with action functions
    {
        signup,
        signin,
        signout
    },
    // initial state
    {
        token: null,
        errorMessage: ''
    }
)