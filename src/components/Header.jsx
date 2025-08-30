export default function Header() {
  return (
    <header className="flex items-center justify-between mb-10 text-white">
      <h1 className="text-3xl font-bold">Kodigo Music</h1>
      <div className="flex-1 max-w-md mx-8">
        <input
          type="text"
          placeholder="Search for songs, artists, or genres..."
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="w-32"></div>
    </header>
  );
}