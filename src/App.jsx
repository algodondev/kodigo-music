import "./App.css";
import SongCard from "./components/SongCard";

const mockSongs = [
  {
    id: 1,
    title: "Paranoid Android",
    artist: "Radiohead",
    genre: "Alternative Rock",
    platforms: ["Spotify", "Apple Music", "Deezer"]
  },
  {
    id: 2,
    title: "Teardrop",
    artist: "Portishead",
    genre: "Trip Hop",
    platforms: ["Spotify", "Apple Music"]
  },
  {
    id: 3,
    title: "Bloom",
    artist: "Radiohead",
    genre: "Electronic Rock",
    platforms: ["Spotify", "Deezer", "YouTube Music"]
  },
  {
    id: 4,
    title: "Karma Police",
    artist: "Radiohead",
    genre: "Alternative Rock",
    platforms: ["Spotify", "Apple Music", "Deezer", "YouTube Music"]
  },
  {
    id: 5,
    title: "Glory Box",
    artist: "Portishead",
    genre: "Trip Hop",
    platforms: ["Spotify", "Apple Music"]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 p-5">
      <header className="text-center mb-10 text-white">
        <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Kodigo Music</h1>
        <p className="text-lg opacity-90">Discover your favorite music across platforms</p>
      </header>
      <main className="max-w-3xl mx-auto">
        {mockSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </main>
    </div>
  );
}

export default App;
