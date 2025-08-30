import "./Header.css";

export default function Header({ onToggleSidebar, showMobileFilter = false }) {
  return (
    <header className="header">
      <h1 className="header-title">Kodigo Music</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for songs, artists, or genres..."
          className="search-input"
        />
        {showMobileFilter && (
          <button
            onClick={onToggleSidebar}
            className="filter-button"
          >
            Filter
          </button>
        )}
      </div>
      <div className="spacer"></div>
    </header>
  );
}