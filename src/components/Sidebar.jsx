import "./Sidebar.css";

export default function Sidebar({ genres, selectedGenre, onGenreSelect }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h3 className="sidebar-title">Filter songs by genre</h3>
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
