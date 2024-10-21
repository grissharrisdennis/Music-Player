
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar'
import search from './assets/search.svg'
import Songcard from './components/Songcard';
// import Controls from './components/Controls'


const Musicplayer = () => {
const [topTracks, setTopTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await fetch('http://localhost:3000/api/top-tracks');
        const data = await response.json();
        setTopTracks(data);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    }

    fetchTracks();
  }, []);

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="w-full h-full overflow-hidden flex flex-col md:flex-row">
  <Sidebar />
  <div className="flex-1 flex flex-col">
    <div className="bg-custom-gradient1 flex-1 relative p-4 md:p-6">
      {/* Top Navigation */}
      <div className="flex gap-6 justify-center md:justify-start mt-4 md:mt-8">
        <span className="font-poppins font-semibold text-[#E5DDDD] text-lg">Music</span>
        <span className="font-poppins font-semibold text-[#E5DDDD] text-lg">Podcast</span>
        <span className="font-poppins font-semibold text-[#E5DDDD] text-lg">Live</span>
        <span className="font-poppins font-semibold text-[#E5DDDD] text-lg">Radio</span>
      </div>

      {/* Search bar */}
      <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
        <div className="relative w-full max-w-md">
          <input className="w-full bg-[#2C0000] rounded-full pl-4 pr-12 py-2 text-white" placeholder="Search..." />
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <img src={search} alt="search" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-zinc-500 w-full md:w-[80%] h-[300px] md:h-[450px] mx-auto mt-8 md:mt-12 rounded-lg">
        {/* Content here */}
      </div>

      {/* Top Songs Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold ml-4 md:ml-[101px]">Top Songs</h2>
        <div className="ml-4 md:ml-[101px] mt-4">
          {topTracks.map((track, index) => (
            <div
              key={track.id}
              className="flex items-center justify-between p-2 mb-2 rounded-lg cursor-pointer hover:bg-[#520000] w-full"
              onClick={() => setSelectedTrack(track)}
            >
              <span className="font-semibold">{index + 1}.</span>
              <img src={track.album.images[0].url} alt={track.name} className="w-10 h-10 rounded-lg" />
              <div className="flex-1 ml-2">
                <p className="font-semibold">{track.name}</p>
                <p className="text-gray-600">{track.artists.map(artist => artist.name).join(', ')}</p>
              </div>
              <span>{formatDuration(track.duration_ms)}</span>
              <span className="text-gray-500">{track.album.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Sidebar with notifications and playlists */}
    <div className="bg-white w-full md:w-[400px] h-auto md:h-full p-4">
      <div className="bg-black p-4 mb-6 rounded-lg border-2 border-[#F6F6F6]">
        <span className="text-[#CFC5C5] font-semibold">NOTIFICATIONS</span>
      </div>
      <div className="bg-green-400 p-4 rounded-lg border-2 border-[#F6F6F6]">
        <span className="text-[#CFC5C5] font-semibold">RECENT PLAYLISTS</span>
      </div>
      {selectedTrack && <Songcard track={selectedTrack} />}
    </div>
  </div>
</div>

    
  )
}

export default Musicplayer;
