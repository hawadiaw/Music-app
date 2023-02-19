import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";


function App() {
  //set usestate to hold the data of the songs
  const [songs, setSongs] = useState(data());
  //set usestate to hold current song
  const [currentSong, setCurrentSong] = useState(songs[0]);
  //set current time of song and durration
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,

  });

  //No NaN error with this function
  const timeUpdateHan = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration || 0;  //HERE 
    setSongInfo({ ...songInfo, currentTime: current, duration, });
    
  };

  const [libraryStatus, setLibraryStatus]= useState(false)
  
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  console.log(audioRef)

  const songEndHandler=async()=>{
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
     await  setCurrentSong(songs[(currentIndex + 1) % songs.length]);
     if(isPlaying) audioRef.current.play()
    }

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      {/* <h1>Music Player</h1> */}
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        songs= {songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
      
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        currentSong={currentSong}
        
      />
      <audio
        onLoadedMetadata={timeUpdateHan}
        onTimeUpdate={timeUpdateHan}
        src={currentSong.audio}
        ref={audioRef}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
