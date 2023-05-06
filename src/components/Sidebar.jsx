import React from 'react'
import { TbTools } from 'react-icons/tb'
import { BiHomeSmile, BiUserVoice } from 'react-icons/bi'
// import {GiSuspicious} from 'react-icons/gi'
import { FiSettings } from 'react-icons/fi'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Sidebar = () => {
  const pathname = window.location.pathname

  const arr = [
    {
      id: 1,
      name: 'Home',
      link: '/',
      icon: <BiHomeSmile size={29} />,
    },
    {
      id: 2,
      name: 'Tool',
      link: '/tool',
      icon: <TbTools size={28} />,
    },
    {
      id: 3,
      name: 'Suspects',
      link: '/suspects',
      icon: <BiUserVoice size={30} />,
    },
  ]
  return (
    <>
      <div className="flex flex-col justify-between w-full h-screen border-r-2 border-gray-500">
        <div>
          <div className='flex items-center'>
            <div><img src={Logo} alt="Logo" className='w-16' /></div>
            <h1 className="flex items-center justify-center text-4xl font-extrabold h-28">
                Swachha
            </h1>
          </div>
          <ul>
            {arr.map(({ id, name, link, icon }) => (
              <Link to={link} key={id}>
                <li className="flex justify-center w-full text-gray-600 cursor-pointer dark:text-gray-300">
                  <div
                    className={`${
                      pathname === link ? 'bg-primary dark:bg-primary-dark text-white hover:text-white dark:hover:text-white' : ''
                    } flex items-center hover:text-primary dark:hover:text-primary-dark my-1 h-12 rounded-full w-56`}
                  >
                    <span className="px-4">{icon}</span>{' '}
                    <span className="mx-4 text-lg">{name}</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex justify-center w-full px-4 text-gray-600 cursor-pointer">
            <div className="flex items-center w-56 my-1 border-t-2 border-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark h-14">
              <span className="px-4">
                <FiSettings size={28} />
              </span>{' '}
              <span className="mx-4 text-lg"> Settings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
