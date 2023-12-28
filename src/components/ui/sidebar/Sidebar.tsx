'use client'

import Link from 'next/link'
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline
} from 'react-icons/io5'
import { useUIStore } from '@/store'
import clsx from 'clsx'

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen)
  const closeSideMenu = useUIStore(state => state.closeSideMenu)

  return (
    <div>
      {isSideMenuOpen && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
          <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
        </>
      )}
      <nav
        className={clsx(
          'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
          { 'translate-x-full': !isSideMenuOpen }
        )}
      >
        <IoCloseOutline
          className="absolute top-5 right-0 cursor-pointer"
          size={50}
          onClick={closeSideMenu}
        />
        <div className="relative mt-14">
          <IoSearchOutline className="absolute top-2 left-2" size={20} />
          <input
            type="text"
            className="w-full bg-gray-50 rounded pl-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
            placeholder="Buscar"
          />
        </div>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          href="/"
        >
          <IoPersonOutline size={30} />
          <span>Perfil</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          href="/"
        >
          <IoTicketOutline size={30} />
          <span>Ordenes</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          href="/"
        >
          <IoLogInOutline size={30} />
          <span>Ingresar</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          href="/"
        >
          <IoLogOutOutline size={30} />
          <span>Salir</span>
        </Link>
        <hr className="my-10" />
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          href="/"
        >
          <IoShirtOutline size={30} />
          <span>Productos</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          href="/"
        >
          <IoTicketOutline size={30} />
          <span>Ordenes</span>
        </Link>
        <Link
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          href="/"
        >
          <IoPeopleOutline size={30} />
          <span>Usuarios</span>
        </Link>
      </nav>
    </div>
  )
}
