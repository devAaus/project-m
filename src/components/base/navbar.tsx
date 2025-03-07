"use client"

import Link from 'next/link'
import { GithubButton } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

const navlinks = [
   { href: '/docs', label: 'Documentation' },
   { href: '/docs/components', label: 'Components' },
]

export default function Navbar() {
   const pathName = usePathname()
   return (
      <header className="sticky top-0 z-50 w-full border-b border-border backdrop-blur">
         <div className="w-full flex h-14 items-center px-4">
            <div className="mr-4 flex">
               <Link className="mr-6 flex items-center space-x-2" href="/">
                  <span className=" font-bold inline-block">meshUI</span>
               </Link>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
               <nav className="flex items-center space-x-6 text-sm font-medium">
                  {navlinks.map(({ href, label }) => (
                     <Link
                        key={href}
                        href={href}
                        className={`transition-colors ${pathName === href
                           ? 'text-foreground'
                           : 'text-foreground/60 hover:text-foreground'
                           }`}
                     >
                        {label}
                     </Link>
                  ))}
               </nav>
               <div className="flex items-center space-x-2">
                  <GithubButton />
               </div>
            </div>
         </div>
      </header>
   )
}

