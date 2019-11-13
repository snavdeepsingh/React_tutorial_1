// Action Creator
export const selectSong = (song) => {
    // return an action, must have a type property, payload is optional
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
