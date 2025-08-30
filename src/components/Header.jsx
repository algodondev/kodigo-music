import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ onToggleSidebar, showMobileFilter = false }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header-title" onClick={() => navigate("/")}>Kodigo Music</h1>
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