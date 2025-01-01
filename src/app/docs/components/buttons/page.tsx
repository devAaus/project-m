import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ButtonPage() {
   return (
      <div className="space-y-6">
         <h1 className="text-3xl font-bold">Button Component</h1>
         <p className="text-xl text-muted-foreground">
            The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
         </p>

         <Card>
            <CardHeader>
               <CardTitle>Examples</CardTitle>
               <CardDescription>
                  Here are various examples of the Button component in action.
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="flex flex-wrap gap-4">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="link">Link Button</Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button size="lg">Large Button</Button>
                  <Button>Default Size</Button>
                  <Button size="sm">Small Button</Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled Button</Button>
                  <Button variant="secondary" disabled>Disabled Secondary</Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                     >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                     </svg>
                     Download
                  </Button>
                  <Button variant="outline">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                     >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                     </svg>
                     Toggle Theme
                  </Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button className="rounded-full">Rounded Button</Button>
                  <Button variant="outline" className="rounded-full">Rounded Outline</Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600">
                     Gradient Button
                  </Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button className="animate-pulse">Animated Button</Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button className="w-full">Full Width Button</Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="border-dashed">Dashed Outline Button</Button>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button className="uppercase">Uppercase Button</Button>
               </div>
            </CardContent>
         </Card>
      </div>
   )
}

