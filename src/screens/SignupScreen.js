import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

import { Context as AuthContext } from '../context/authContext'

const SignupScreen = ({ navigation }) => {

    const { state, signup } = useContext(AuthContext);

    return (
        <View
            style={styles.container} >
            <AuthForm
                headerText="Sign up for tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={signup} />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!" />
        </View>
    );
}

SignupScreen.navigationOptions = {

    headerShown: false
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
});

export default SignupScreen;