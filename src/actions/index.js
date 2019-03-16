// 액션 크리에이터
export const selectSong = song => {
  // 리턴 액션
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
};
