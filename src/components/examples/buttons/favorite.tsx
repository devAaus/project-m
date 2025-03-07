"use client"

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { Heart } from 'lucide-react'


export default function FavoriteButton() {
   const [isFavorite, setIsFavorite] = useState(false)
   return (
      <Button
         variant="outline"
         onClick={() => setIsFavorite(!isFavorite)}
         className={cn(isFavorite ? "text-red-500 hover:text-red-600" : "")}
      >
         <Heart className={cn("mr-2 h-4 w-4", isFavorite ? "fill-current" : "")} />
         {isFavorite ? "Favorited" : "Favorite"}
      </Button>
   )
}
