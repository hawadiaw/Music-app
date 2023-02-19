//CODE NOT USED

// export const playAudio =(isPlaying, audioRef)=>{
//     if(isPlaying){
//         const playPromise =audioRef.current.play()
//         if (playPromise !== undefined){//if playPromise has not loaded yet wait a bit then play the song
//           playPromise.then((audio)=>{
//             audioRef.current.play()
//           })
//         }
//       }
// }
// export const activeSong =(song, songs, setSongs)=>{
//     setSongs(
//         songs.map((targetSong) => {
//             return {
//               ...targetSong,
//               active: targetSong.id === song.id
//             }
//           }
//         )
//       )
// }

// Active song check
    // const newSongs = songs.map((song) => {
    //   if (song.id === id) {
    //     return {
    //       ...song,
    //       active: true,
    //     };
    //   } else {
    //     return {
    //       ...song,
    //       active: false,
    //     };
    //   }
    // });
    // setSongs(newSongs);

    // setSongs(
    //   songs.map((song) => {
    //       return {

    //         ...song,
    //         active: song.id === songs.id
    //       }
    //     }
    //   )
    // )

    // setSongs(
    //   songs.map((targetSong) => {
    //     return {
    //       ...targetSong,
    //       active: targetSong.id === song.id,
    //     };
    //   })
      
    // );