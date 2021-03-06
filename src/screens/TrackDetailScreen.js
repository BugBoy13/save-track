import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/trackContext';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(track => {
        return track._id === _id;
    })

    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text
                style={{ fontSize: 48 }}>
                {track.name}
            </Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map} >
                <Polyline
                    coordinates={
                        track.locations.map(location => {
                            return location.coords
                        })
                    } />
            </MapView>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;