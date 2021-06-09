import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

// Will be called by react directly, when we call dispatch function
// return some new state
const authReducer = (state, action) => {

    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return {
                token: action.payload, errorMessage: ''
            }
        case 'clear_error_message':
            return {
                ...state, errorMessage: ''
            }
        default:
            return state;
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({
                type: 'signin',
                payload: token
            })
            navigate('TrackList')
        } else {
            navigate('loginFlow')
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_message' })
    }
}

// Define action functions
// For modifying state
const signup = (dispatch) => {

    return async ({ email, password }) => {

        try {
            const response = await trackerApi.post(`/signup`, { email, password })
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token })

            navigate('TrackList');
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
        }
    }
}

const signin = (dispatch) => {

    return async ({ email, password }) => {

        try {
            const response = await trackerApi.post(`/signin`, { email, password })
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token })

            navigate('TrackList');
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
        }
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
        signout,
        clearErrorMessage,
        tryLocalSignin
    },
    // initial state
    {
        token: null,
        errorMessage: ''
    }
)