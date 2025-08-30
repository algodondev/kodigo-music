export default function Header({ onToggleSidebar, showMobileFilter = false }) {
  return (
    <header className="flex items-center justify-between mb-12 text-white">
      <h1 className="text-3xl font-bold">Kodigo Music</h1>
      <div className="flex items-center gap-4 flex-1 max-w-md mx-8">
        <input
          type="text"
          placeholder="Search for songs, artists, or genres..."
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
        />
        {showMobileFilter && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors"
          >
            Filter
          </button>
        )}
      </div>
      <div className="w-32"></div>
    </header>
  );
}