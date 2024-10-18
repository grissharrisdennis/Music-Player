// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { IoIosArrowBack } from 'react-icons/io';
import music from '../assets/music.svg';
import discover from '../assets/discover.svg';
import home from '../assets/home.svg';
import library from '../assets/library.svg';
import logout from '../assets/logout.svg';
import settings from '../assets/settings.svg';
import trends from '../assets/trends.svg';


const Sidebar = () => {
   
   
    return (
       
        <div  className='flex flex-col bg-[#0E0E0E] justify-start shadow-xl z-[999] w-[436px] h-[1080px] overflow-hidden fixed md:relative'>
            <div className='absolute container flex items-center mt-[26px] ml-[70px] md:ml-[25px] '>
                <img src={music} alt='music' />
            </div>
    
            <div className='absolute container mt-[20px] w-[366px] h-[203.43px] md:mt-[155px] ml-[70px] md:ml-[25px]'>
                <div className='text-[#CFC5C5] flex items-center font-semibold text-sm ml-0 font-poppins mb-1'>
                    <span>MENU</span>
                </div>
                <div className='flex  items-left   mb-4'>
                    <img src={home} alt='home' className='ml-[1.66px]' /><span className='text-[#F6F6F6] ml-[49px] text-lg font-medium font-poppins'>Home</span>
                </div>
                <div className='flex   mb-4'>
                    <img src={trends} alt='trends' className='ml-[1.66px]'/><span className='text-[#F6F6F6] ml-[49px] text-lg font-medium font-poppins'>Trends</span>
                </div>
                <div className='flex    mb-4'>
                    <img src={library} alt='library'className='ml-[1.66px]' /><span className='text-[#F6F6F6] ml-[49px] text-lg font-medium font-poppins'>Library</span>
                </div>
                <div className='flex  items-center  mb-4'>
                    <img src={discover} alt='discover' className='ml-[1.66px]'/><span className='text-[#F6F6F6] ml-[49px] text-lg font-medium font-poppins'>Discover</span>
                </div>
            </div>

            <div className='absolute container mt-[20px] w-[366px] h-[161px] md:mt-[427px] ml-[70px] md:ml-[25px]'>
                <div className='text-[#CFC5C5] flex items-center font-semibold text-sm ml-0 font-poppins mb-1'>
                    <span>DISCOVER</span>
                </div>
            </div>
            <div className='absolute container mt-[20px] w-[366px] h-[161px] md:mt-[650px] ml-[70px] md:ml-[25px]'>
                <div className='text-[#CFC5C5] flex items-center font-semibold text-sm ml-0 font-poppins mb-1'>
                    <span>YOUR PLAYLISTS</span>
                </div>
            </div>
    
            <div className='absolute container w-[366px] h-[112px] ml-[70px] md:ml-[25px] top-[873px]'>
                <div className='text-[#CFC5C5] flex font-poppins font-semibold items-center  text-sm gap-2 mb-1'>
                    <span>GENERAL</span>
                </div>
                <div className='flex  items-center  mb-4'>
                    <img src={settings} alt='settings' className='ml-[1.66px]'/><span className='text-[#F6F6F6] ml-[49px] text-lg font-medium font-poppins'>Settings</span>
                </div>
                <div className='flex items-center  mb-4'>
                    <img src={logout} alt='logout' className='ml-[1.66px]'/><span className='text-[#F6F6F6] ml-[49px] text-lg font-medium font-poppins'>Logout</span>
                </div>
            </div>
    
            
        </div>
    );
}

export default Sidebar;