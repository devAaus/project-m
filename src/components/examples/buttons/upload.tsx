import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'

export default function UploadButton() {
   return (
      <Button>
         <Upload className="mr-2 h-4 w-4" />
         Upload
      </Button>
   )
}
