import LibrarySongs from "./LibrarySongs";

const Library = ({ songs, song, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song, i) => (
          <LibrarySongs
            id={song.id}
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
