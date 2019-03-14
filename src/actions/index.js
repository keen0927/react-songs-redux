export const selectSong = song => {
  // 리턴 액션
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
};
