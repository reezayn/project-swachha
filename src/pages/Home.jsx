import React from 'react'
import Sidebar from '../components/Sidebar'
import FileWindow from '../components/fileup'
import { VscColorMode } from 'react-icons/vsc'
import { IoNotifications } from 'react-icons/io5'
import { FaUserCircle, FaInfoCircle } from 'react-icons/fa'
import { RiCloudFill } from 'react-icons/ri'
import HeroImg from '../assets/Hero1.png'
import HeroImg2 from '../assets/Hero2.png'

const Home = () => {
  const overviewArr = [
    {
      id: 1,
      name: 'Cities covered',
      number: '18',
      color: '#fc7303',
    },
    {
      id: 2,
      name: 'Achievements',
      number: '23',
      color: '#18cf00',
    },
    {
      id: 3,
      name: 'Offices',
      number: '13',
      color: '#0015d5',
    },
    {
      id: 4,
      name: 'Suspects found',
      number: '104',
      color: '#b60000',
    },
  ]
  return (
    <>
      <div className="flex w-full h-screen overflow-y-hidden">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <div className="w-[82%] overflow-y-hidden">
          <div className="flex items-center justify-between py-2 px-7">
            <div>
              <form action="">
                <input
                  type="text"
                  id="small-input"
                  className="py-4 px-7 w-[20rem] h-11 outline-none rounded-full border-2 border-gray-300 bg-gray-300"
                  placeholder={`🔍  Search here`}
                ></input>
              </form>
            </div>
            <div>
              <button className="p-2 m-2 bg-gray-100 rounded-full dark:bg-black">
                <IoNotifications size={22} />
              </button>
              <button className="p-2 m-2 bg-gray-100 rounded-full dark:bg-black">
                <VscColorMode size={22} />
              </button>
              <button className="p-2 m-2 bg-gray-100 rounded-full dark:bg-black">
                <FaUserCircle size={22} />
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="w-[65%] px-4">
              <div>
                <h1 className="px-4 py-2 text-2xl font-semibold">Overview</h1>
                <div className="flex">
                  {overviewArr.map(({ id, name, number, color }) => (
                    <div
                      key={id}
                      className="w-40 mx-3 my-2 bg-gray-100 shadow-lg rounded-xl h-36"
                    >
                      <div className="flex items-center px-1 py-3 text-gray-500">
                        <span style={{ color: `${color}` }} className="mx-1">
                          <RiCloudFill size={22} />
                        </span>{' '}
                        <span>{name}</span>
                      </div>
                      <div
                        className="pb-2 mt-3 ml-2 text-5xl w-14"
                        style={{ borderBottom: `4px solid ${color}` }}
                      >
                        {number}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col p-3 mt-4 ml-2 bg-white rounded-2xl">
                <h1 className="px-4 py-0 text-2xl font-semibold">
                  What we're trying to achieve
                </h1>
                <div className="flex">
                  <div className="flex items-center flex-col rounded-xl bg-[#D7F1B3] p-5 w-2/3 m-2">
                    <img src={HeroImg} className="w-52" alt="" />
                    <div className="flex flex-col">
                      <h1 className='text-2xl font-bold text-black'>Find Perpetrators</h1>
                    </div>
                  </div>
                  <div className="flex items-center flex-col rounded-xl bg-[#ffe6bb] p-5 w-2/3 m-2">
                    <img src={HeroImg2} className="w-52" alt="" />
                    <div className="flex flex-col">
                      <h1 className='text-2xl font-bold text-black'>Create clean Nepal</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%] h-screen overflow-y-hidden p-4">
              <div className='w-full p-4 bg-white rounded-2xl'>
                <h1>Our Offices</h1>
                <ul>
                  <li>Nepsemyak, Dhobighat </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
