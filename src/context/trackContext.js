import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

const fetchTracks = (dispatch) => {
    return () => {

    }
}

const createTrack = (dispatch) => {
    return () => {

    }
}

export const { Context, Provider } = createDataContext(
    trackReducer,
    {
        fetchTracks,
        createTrack
    },
    []
)