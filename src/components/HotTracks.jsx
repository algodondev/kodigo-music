import "./HotTracks.css";
import SongCard from "./SongCard";

export default function HotTracks({ songs }) {
  return (
    <div className="hot-tracks">
      <h2 className="hot-tracks-title">Hot Tracks</h2>
      <div className="hot-tracks-container">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}
