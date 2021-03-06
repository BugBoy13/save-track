import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/authContext';

const SigninScreen = ({ navigation }) => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View
            style={styles.container} >
            <NavigationEvents
                // onWillFocus={() => { }}
                // onDidFocus={() => { }}
                // onDidBlur={() => { }}
                onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText="Sign in for tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign in"
                onSubmit={signin} />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead!" />
        </View>
    );
}

SigninScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;