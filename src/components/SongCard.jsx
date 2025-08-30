import reactLogo from "../assets/react.svg";

export default function SongCard({ song }) {
  return (
    <div className="flex items-center justify-between py-8 px-8 border-t border-b border-gray-700 transition-all duration-200 hover:bg-gray-900 md:flex-row flex-col gap-3 md:gap-0">
      <div className="flex items-center gap-3 py-6">
        <img
          src={reactLogo}
          alt="Music icon"
          className="w-10 h-10 rounded object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <h3 className="text-base font-semibold text-white m-0">
            {song.title}
          </h3>
          <p className="text-sm text-gray-300 m-0">{song.artist}</p>
          <p className="text-xs text-gray-400 m-0">{song.genre}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center md:self-auto self-end">
        {song.platforms.map((platform, index) => (
          <img
            key={index}
            src={reactLogo}
            alt={`${platform} platform`}
            className="w-6 h-6 opacity-70 transition-opacity duration-200 hover:opacity-100"
            title={platform}
          />
        ))}
      </div>
    </div>
  );
}
