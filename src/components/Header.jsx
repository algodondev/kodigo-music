import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ onToggleSidebar, showMobileFilter = false, onSearch }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("");

  const validateSearch = (value) => {
    if (value.length > 0 && value.length < 2) {
      return "Search must be at least 2 characters";
    }
    if (value.match(/[!@#$%^&*()+=\[\]{};':"\\|,.<>\/?]/)) {
      return "Special characters not allowed";
    }
    return "";
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    const error = validateSearch(value);
    setSearchError(error);
    
    if (!error) {
      onSearch(value);
    }
  };

  return (
    <header className="header">
      <h1 className="header-title" onClick={() => navigate("/")}>Kodigo Music</h1>
      <div className="search-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search for songs, artists, or genres..."
            className={`search-input ${searchError ? "search-error" : ""}`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchError && <span className="error-message">{searchError}</span>}
        </div>
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