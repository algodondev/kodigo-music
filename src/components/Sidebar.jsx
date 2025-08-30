import "./Sidebar.css";

export default function Sidebar({ genres, selectedGenre, onGenreSelect }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Filter songs by genre</h3>
          {selectedGenre && (
            <button
              onClick={() => onGenreSelect(null)}
              className="clear-filter-button"
            >
              Clear
            </button>
          )}
        </div>
        <div className="genre-buttons">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() =>
                onGenreSelect(genre === selectedGenre ? null : genre)
              }
              className={`genre-button ${selectedGenre === genre ? "selected" : ""}`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
