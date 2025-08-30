import SongCard from "./SongCard";

export default function HotTracks({ songs }) {
  return (
    <div className="flex-[3]">
      <h2 className="text-xl font-semibold text-white mb-4">Hot Tracks</h2>
      <div className="overflow-hidden">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}