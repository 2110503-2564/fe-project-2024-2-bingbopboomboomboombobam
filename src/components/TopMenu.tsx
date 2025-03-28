"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"
import logo from "../../public/logo.svg" // import ไฟล์รูปภาพ
import { useSession } from "next-auth/react"
import { div } from "three/tsl"

export default function TopMenu() {
  const pathname = usePathname()
  const pageSegment = pathname.split("/")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (pageSegment.length === 1) {
      return path === "/" ? "text-red-600" : "text-white"
    } else {
      return path === `/${pageSegment[1]}` ? "text-red-600" : "text-white"
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Updated link style to include hover box effect instead of underline
  const linkStyle = "group relative transition-colors duration-300 px-3 py-1"

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/models", label: "MODELS" },
    { href: "/mybookings", label: "MY BOOKINGS" },
    { href: "/services", label: "SERVICES" },
    { href: "/reviews", label: "REVIEWS" },
    { href: "/aboutus", label: "ABOUT US" },
  ]

  // Split menu items for desktop layout
  const leftMenuItems = menuItems.slice(0, 3)
  const rightMenuItems = menuItems.slice(3)
  const { data:session} = useSession();
  return (
    <div className="absolute w-full h-20 z-50 px-4 md:px-[5%] lg:px-[10%] xl:px-[15%] py-4 flex flex-row items-center">
      {/* Desktop menu */}
      <div className="hidden lg:flex flex-row justify-between w-full h-full items-center  font-semibold text-xl">
        {/* Left menu items */}
        <div className="flex space-x-6">
          {leftMenuItems.map((item, index) => (
            <Link key={index} href={item.href} className={`${linkStyle} ${isActive(item.href)} hover:text-red-300`}>
              <span className="relative z-10">{item.label}</span>
              <div className="absolute top-0 right-0 bottom-1 left-0 bg-black/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href={"/"}>
          <Image src={logo || "/placeholder.svg"} alt="website logo" width={45} />
        </Link>

        {/* Right menu items */}
        <div className="flex space-x-6">
          {rightMenuItems.map((item, index) => (
            <Link key={index} href={item.href} className={`${linkStyle} ${isActive(item.href)} hover:text-red-300`}>
              <span className="relative z-10">{item.label}</span>
              <div className="absolute top-0 right-0 bottom-1 left-0 bg-black/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile user profile */}
      <div className="text-xl flex flex-col absolute md:right-5 justify-center items-center text-red-600 font-bold">
      {session ?   <div><Link href="/api/auth/signout">Logout</Link></div>:<Link href="/api/auth/signin">Login</Link>}
      </div>

      {/* Mobile menu button */}
      <button className="lg:hidden text-white mr-4" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu size={24} />
      </button>

      {/* Logo for mobile */}
      <div className="lg:hidden">
        <Link href={"/"}>
          <Image src={logo || "/placeholder.svg"} className="drop-shadow-2xl" alt="website logo" width={45} />
        </Link>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-black/90 transition-all duration-300 ${isMenuOpen ? "max-h-[500px] py-4" : "max-h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center gap-4  font-semibold text-xl">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${linkStyle} ${isActive(item.href)} hover:text-red-300 w-full text-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              <div className="absolute inset-0 bg-gray-500/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

