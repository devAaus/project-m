"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function ToggleButton() {
   const [isToggled, setIsToggled] = useState(false)
   return (
      <Button
         variant={isToggled ? "default" : "outline"}
         onClick={() => setIsToggled(!isToggled)}
      >
         {isToggled ? "On" : "Off"}
      </Button>
   )
}
