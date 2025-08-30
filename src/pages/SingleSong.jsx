import "./SingleSong.css";
import { useParams } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import SongCard from "../components/SongCard";

const mockSongs = [
  {
    id: 1,
    title: "Paranoid Android",
    artist: "Radiohead",
    genre: "Alternative Rock",
    platforms: ["Spotify", "Apple Music", "Deezer"],
    album: "OK Computer",
    duration: "6:23",
    releaseYear: 1997,
  },
  {
    id: 2,
    title: "Teardrop",
    artist: "Portishead",
    genre: "Trip Hop",
    platforms: ["Spotify", "Apple Music"],
    album: "Mezzanine",
    duration: "5:29",
    releaseYear: 1998,
  },
  {
    id: 3,
    title: "Bloom",
    artist: "Radiohead",
    genre: "Electronic Rock",
    platforms: ["Spotify", "Deezer", "YouTube Music"],
    album: "The King of Limbs",
    duration: "5:15",
    releaseYear: 2011,
  },
  {
    id: 4,
    title: "Karma Police",
    artist: "Radiohead",
    genre: "Alternative Rock",
    platforms: ["Spotify", "Apple Music", "Deezer", "YouTube Music"],
    album: "OK Computer",
    duration: "4:21",
    releaseYear: 1997,
  },
  {
    id: 5,
    title: "Glory Box",
    artist: "Portishead",
    genre: "Trip Hop",
    platforms: ["Spotify", "Apple Music"],
    album: "Dummy",
    duration: "5:06",
    releaseYear: 1994,
  },
];

export default function SingleSong() {
  const { id } = useParams();
  const song = mockSongs.find(s => s.id === parseInt(id));
  const relatedSongs = mockSongs.filter(s => s.id !== parseInt(id) && s.artist === song?.artist);
  const moreSongs = mockSongs.filter(s => s.id !== parseInt(id) && s.artist !== song?.artist);

  if (!song) {
    return <div className="error-message">Song not found</div>;
  }

  return (
    <div className="single-song-page">
      <div className="song-detail-card">
        <img 
          src={reactLogo} 
          alt="Album cover"
          className="album-cover"
        />
        <div className="song-info-detail">
          <h1 className="song-title-large">{song.title}</h1>
          <p className="song-artist-large">{song.artist}</p>
          <div className="song-metadata">
            <span className="metadata-item">Album: {song.album}</span>
            <span className="metadata-item">Duration: {song.duration}</span>
            <span className="metadata-item">Year: {song.releaseYear}</span>
            <span className="metadata-item">Genre: {song.genre}</span>
          </div>
          <div className="platforms-container">
            <span className="platforms-label">Available on:</span>
            <div className="platforms-list">
              {song.platforms.map((platform, index) => (
                <img 
                  key={index}
                  src={reactLogo} 
                  alt={`${platform} platform`}
                  className="platform-icon-large"
                  title={platform}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="related-songs-section">
        <h2 className="section-title">More from {song.artist}</h2>
        <div className="scrollable-songs">
          {relatedSongs.map((relatedSong) => (
            <SongCard key={relatedSong.id} song={relatedSong} />
          ))}
        </div>
      </div>

      <div className="more-songs-section">
        <h2 className="section-title">More Songs</h2>
        <div className="scrollable-songs">
          {moreSongs.map((moreSong) => (
            <SongCard key={moreSong.id} song={moreSong} />
          ))}
        </div>
      </div>
    </div>
  );
}