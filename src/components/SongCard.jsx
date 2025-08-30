import "./SongCard.css";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";

export default function SongCard({ song }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/song/${song.id}`);
  };

  return (
    <div className="song-card" onClick={handleClick}>
      <div className="song-info">
        <img
          src={reactLogo}
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
        {song.platforms.map((platform, index) => (
          <img
            key={index}
            src={reactLogo}
            alt={`${platform} platform`}
            className="platform-icon"
            title={platform}
          />
        ))}
      </div>
    </div>
  );
}
