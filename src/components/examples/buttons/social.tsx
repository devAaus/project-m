import { Button } from '@/components/ui/button'
import { Facebook } from 'lucide-react'

export default function SocialButton() {
   return (
      <div className="flex gap-2">
         <Button size="icon">
            <Facebook />
         </Button>
         <Button className="flex items-center gap-2">
            <Facebook />
            Facebook
         </Button>
      </div>
   )
}
