import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaXTwitter } from "react-icons/fa6"

export const Header = () => {
   return (
      <header className='relative top-0 z-10  px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0'>
         <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
            <Link href='/' className='relative flex items-center'>
               <Image src='/logo.svg' alt='logo' width={100} height={100} />
            </Link>
            <nav className='flex items-center gap-2'>
               <Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex h-9 w-9 items-center justify-center'
               >
                  <FaXTwitter />
               </Link>
               <Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex h-9 w-9 items-center justify-center'
               >
                  <FaGithub />
               </Link>
            </nav>
         </div>
      </header>
   )
}
