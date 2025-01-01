import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Introduction() {
   return (
      <Card className="mb-8">
         <CardHeader>
            <CardTitle className="text-2xl">Introduction to meshUI</CardTitle>
            <CardDescription>A modern, customizable component library for React</CardDescription>
         </CardHeader>
         <CardContent>
            <p className="mb-4">
               meshUI is not a traditional component library, but rather a powerful and flexible collection of components and utilities built on top of shadcn/ui. Designed to help developers create beautiful, responsive, and accessible user interfaces with ease, meshUI extends the capabilities of shadcn/ui while maintaining its philosophy of customization and flexibility.
            </p>
            <p className="mb-4">
               Whether you're building a simple website or a complex web application, meshUI offers the tools and
               flexibility you need to bring your vision to life. With a focus on developer experience, performance,
               and accessibility, meshUI is the perfect foundation for your next project.
            </p>
            <p className="mb-4">
               By leveraging the power of shadcn/ui and extending it with additional components and features, meshUI provides a comprehensive toolkit that can be easily integrated into your React projects. Our goal is to enhance your development experience while giving you full control over your UI.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
               <li>Built on top of shadcn/ui for maximum flexibility</li>
               <li>Additional custom components and utilities</li>
               <li>Fully customizable to match your design system</li>
               <li>Dark mode support out of the box</li>
               <li>Accessibility-first design</li>
               <li>Responsive and mobile-friendly</li>
               <li>TypeScript support</li>
               <li>Regular updates and community support</li>
            </ul>
         </CardContent>
      </Card>
   )
}

