import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'

export default function LoaderButton() {
   return (
      <div className="flex gap-2">
         <Button>
            <LoaderCircle className='animate-spin' />
         </Button>
         <Button className="flex items-center gap-2">
            <LoaderCircle className='animate-spin' />
            Loading...
         </Button>
      </div>
   )
}
