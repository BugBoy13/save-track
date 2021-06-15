import '../_mockLocation';
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/locationContext';

import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {

    const {
        state: {
            recording
        },
        addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView
            forceInset={{ top: 'always' }} >
            <Text
                h2 >
                Create a track
            </Text>
            <Map />
            {
                err ?
                    <Text>
                        Please enable location services
                    </Text>
                    : null
            }
            <TrackForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);