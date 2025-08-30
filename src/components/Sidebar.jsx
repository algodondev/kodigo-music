export default function Sidebar({ genres, selectedGenre, onGenreSelect }) {
  return (
    <div className="w-full bg-gray-900 border border-gray-700 rounded-lg p-6 h-fit">
      <h3 className="text-lg font-semibold text-white mb-6">
        Filter songs by genre
      </h3>
      <div className="space-y-3">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() =>
              onGenreSelect(genre === selectedGenre ? null : genre)
            }
            className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 ${
              selectedGenre === genre
                ? "bg-white text-black"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
