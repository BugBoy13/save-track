import React, { useEffect, useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as AuthContext } from '../context/authContext';

const ResolveAuthScreen = () => {

    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, [])

    return (null);
}

export default ResolveAuthScreen;