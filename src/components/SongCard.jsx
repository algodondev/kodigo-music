import "./SongCard.css";
import { useNavigate } from "react-router-dom";
import musicIcon from "../assets/music.svg";
import spotifyIcon from "../assets/spotify.svg";
import appleMusicIcon from "../assets/apple-music.svg";
import deezerIcon from "../assets/deezer.svg";
import youtubeMusicIcon from "../assets/youtube-music.svg";

export default function SongCard({ song }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/song/${song.id}`);
  };

  return (
    <div className="song-card" onClick={handleClick}>
      <div className="song-info">
        <img
          src={musicIcon}
          alt="Music icon"
          className="song-icon"
        />
        <div className="song-details">
          <h3 className="song-title">{song.title}</h3>
          <p className="song-artist">{song.artist}</p>
          <p className="song-genre">{song.genre}</p>
        </div>
      </div>
      <div className="song-platforms">
        {song.platforms.map((platform, index) => {
          const platformIcons = {
            "Spotify": spotifyIcon,
            "Apple Music": appleMusicIcon,
            "Deezer": deezerIcon,
            "YouTube Music": youtubeMusicIcon
          };
          
          return (
            <img
              key={index}
              src={platformIcons[platform] || musicIcon}
              alt={`${platform} platform`}
              className="platform-icon"
              title={platform}
            />
          );
        })}
      </div>
    </div>
  );
}
