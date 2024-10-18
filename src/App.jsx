
import './App.css'
import Sidebar from './componenets/Sidebar'

function App() {
  

  return (
    <div className="w-[1920px] h-[1080px]  overflow-hidden flex">
       <Sidebar/>
      <div className='w-[1484px] h-full flex'>
        <div className='bg-custom-gradient1 w-[1084px] h-full '>

        </div>
        <div className='bg-white w-[400px] h-full '>
          <div className='container border-2 border-[#F6F6F6] bg-black ml-[46px] mt-[43px] w-[284px] h-[267px] ' >
            <div className='text-[#CFC5C5] flex items-center font-semibold text-sm ml-0 font-poppins mb-1'>
              <span>NOTIFICATIONS</span>
            </div>
          </div>
          <div className='container border-2 border-[#F6F6F6] bg-green-400 ml-[46px] mt-[345px] w-[284px] h-[293px] '>
            <div className='text-[#CFC5C5] flex items-center font-semibold text-sm ml-0 font-poppins mb-1'>
              <span>RECENT PLAYLISTS</span>
            </div>
          </div>
          <div className='container shadow-custom-shadow p-4 bg-orange-500 w-[284px] h-[376px] ml-[46px] mt-[673px] '>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
