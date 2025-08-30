import SongCard from "./SongCard";

export default function Content({ songs }) {
  return (
    <div className="flex-1">
      <main className="max-w-3xl mx-auto">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </main>
    </div>
  );
}