"use client"

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'

export default function DarkModeToggleButton() {
   const [isDarkMode, setIsDarkMode] = useState(false)
   return (
      <div className='flex gap-2'>
         <Button variant="outline" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
               <Sun className="h-4 w-4" />
            ) : (
               <Moon className="h-4 w-4" />
            )}
         </Button>

         <Button variant="outline" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
               <>
                  <Sun className="mr-2 h-4 w-4" />
                  Light Mode
               </>
            ) : (
               <>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark Mode
               </>
            )}
         </Button>
      </div>
   )
}
