import { useState, useMemo } from "react";
import HotTracks from "./HotTracks";
import Sidebar from "./Sidebar";

export default function Content({ songs, showMobileSidebar, onToggleSidebar }) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = useMemo(() => {
    return [...new Set(songs.map(song => song.genre))];
  }, [songs]);

  const filteredSongs = useMemo(() => {
    return selectedGenre ? songs.filter(song => song.genre === selectedGenre) : songs;
  }, [songs, selectedGenre]);

  return (
    <div className="flex-1 max-w-6xl mx-auto">
      <div className="flex gap-6 lg:flex-row flex-col">
        <HotTracks songs={filteredSongs} />
        <div className={`lg:block ${showMobileSidebar ? 'block' : 'hidden'}`}>
          <Sidebar 
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreSelect={setSelectedGenre}
          />
        </div>
      </div>
    </div>
  );
}