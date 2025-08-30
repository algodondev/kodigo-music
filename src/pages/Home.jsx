import Content from "../components/Content";

const mockSongs = [
  {
    id: 1,
    title: "Paranoid Android",
    artist: "Radiohead",
    genre: "Alternative Rock",
    platforms: ["Spotify", "Apple Music", "Deezer"],
  },
  {
    id: 2,
    title: "Teardrop",
    artist: "Portishead",
    genre: "Trip Hop",
    platforms: ["Spotify", "Apple Music"],
  },
  {
    id: 3,
    title: "Bloom",
    artist: "Radiohead",
    genre: "Electronic Rock",
    platforms: ["Spotify", "Deezer", "YouTube Music"],
  },
  {
    id: 4,
    title: "Karma Police",
    artist: "Radiohead",
    genre: "Alternative Rock",
    platforms: ["Spotify", "Apple Music", "Deezer", "YouTube Music"],
  },
  {
    id: 5,
    title: "Glory Box",
    artist: "Portishead",
    genre: "Trip Hop",
    platforms: ["Spotify", "Apple Music"],
  },
];

import { useMemo } from "react";

export default function Home({ showMobileSidebar, onToggleSidebar, searchTerm }) {
  const filteredSongs = useMemo(() => {
    if (!searchTerm) return mockSongs;
    
    return mockSongs.filter(song => 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <Content 
      songs={filteredSongs}
      showMobileSidebar={showMobileSidebar}
      onToggleSidebar={onToggleSidebar}
    />
  );
}