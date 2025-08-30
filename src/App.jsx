import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

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
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-black p-5 flex flex-col">
      <Header 
        onToggleSidebar={() => setShowMobileSidebar(!showMobileSidebar)}
        showMobileFilter={true}
      />
      <Content 
        songs={mockSongs}
        showMobileSidebar={showMobileSidebar}
        onToggleSidebar={() => setShowMobileSidebar(!showMobileSidebar)}
      />
      <Footer />
    </div>
  );
}

export default App;
