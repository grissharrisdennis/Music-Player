
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
    <div className="w-[1920px] h-[1080px]  overflow-hidden flex">
       <Sidebar/>
      <div className='w-[1484px] h-full flex'>
        <div className='bg-custom-gradient1 w-[1084px] h-full '>
              <div className='absolute flex  mt-[45px] ml-[83px] w-[368px] h-[27px] gap-[50px] '>
                <span className='font-poppins font-semibold text-[#E5DDDD] container text-lg'>Music</span>
                <span className='font-poppins font-semibold text-[#E5DDDD] container text-lg'>Podcast</span>
                <span className='font-poppins font-semibold text-[#E5DDDD] container text-lg'>Live</span>
                <span className='font-poppins font-semibold text-[#E5DDDD] container text-lg'>Radio</span>
               
              </div>
              <div className='absolute  mt-[32px] w-[513px] h-[54px] ml-[528px]'>
                <div className='absolute w-full h-full bg-[#2C0000] rounded-full '>
                  <div className='absolute ml-[465.42px] w-[22.96px] mt-[14.42px] h-[22.96px] border-[3px] border-[#F6F6F6]'>
                  <img src={search} alt='search' />
                  </div>

                  
                </div>
              </div>
          
            <div className='absolute bg-zinc-500 w-[882px] h-[452px] ml-[101px] mt-[114px]'>
              
            </div>
            <div className=' w-full h-[447px] ml-0 mt-[606px]'>
      <div className='w-[266px] h-[36px] ml-[101px]'>
        <h2 className='text-xl font-semibold'>Top Songs</h2>
      </div>
      <div className='ml-[101px] mt-[20px]'>
        <div className='container  '></div>
        {topTracks.map((track, index) => (
          <div
            key={track.id}
            className='flex justify-between items-center  p-2 mb-2 rounded-lg cursor-pointer hover:bg-[#520000]'
            onClick={() => setSelectedTrack(track)}
          >
            <span className='font-semi bold hover:text-[#F6F6F6]'>{index + 1}.</span>
            <img src={track.album.images[0].url} alt={track.name} className='w-12 h-12 rounded-lg' />
            <div className='flex-1 ml-2'>
              <p className='font-semibold'>{track.name}</p>
              <p className='text-gray-600'>{track.artists.map(artist => artist.name).join(', ')}</p>
            </div>
            <span>{formatDuration(track.duration_ms)}</span>
            <span className='text-gray-500'>{track.album.name}</span>
          </div>
        ))}
      </div>
     
    </div>
        </div>
        <div className='bg-white w-[400px] h-full '>
          <div className='absolute container border-2 border-[#F6F6F6] bg-black ml-[46px] mt-[43px] w-[284px] h-[267px] ' >
            <div className='text-[#CFC5C5] flex items-center font-semibold text-sm ml-0 font-poppins mb-1'>
              <span>NOTIFICATIONS</span>
            </div>
          </div>
          <div className='absolute container border-2 border-[#F6F6F6] bg-green-400 ml-[46px] mt-[345px] w-[284px] h-[293px] '>
            <div className='text-[#CFC5C5] flex items-center font-semibold text-sm ml-0 font-poppins mb-1'>
              <span>RECENT PLAYLISTS</span>
            </div>
            
          </div>
          {selectedTrack && <Songcard track={selectedTrack} />}
          </div>
        </div>
      </div>
    
  )
}

export default Musicplayer;
