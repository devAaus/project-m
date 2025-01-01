import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
   {
      question: "What is meshUI?",
      answer: "meshUI is a collection of components and utilities built on top of shadcn/ui. It extends shadcn/ui's capabilities with additional custom components and features, providing a comprehensive toolkit for building beautiful, accessible React user interfaces."
   },
   {
      question: "How do I install meshUI?",
      answer: "As meshUI is built on top of shadcn/ui, you'll first need to set up shadcn/ui in your project. Then, you can install meshUI using npm or yarn. Run 'npm install meshui' or 'yarn add meshui' in your project directory to get started. Detailed installation instructions can be found in our documentation."
   },
   {
      question: "Is meshUI compatible with Next.js?",
      answer: "Yes, meshUI is fully compatible with Next.js. It works seamlessly with both the Pages Router and the new App Router."
   },
   {
      question: "Can I customize the components?",
      answer: "meshUI components are designed to be highly customizable. You can easily modify colors, sizes, and other properties to match your project's design system."
   },
   {
      question: "Does meshUI support TypeScript?",
      answer: "Yes, meshUI is built with TypeScript and provides full TypeScript support out of the box."
   },
   {
      question: "How does meshUI relate to shadcn/ui?",
      answer: "meshUI is built on top of shadcn/ui and follows its philosophy of providing customizable, accessible components. We extend shadcn/ui's offerings with additional components, utilities, and features while maintaining full compatibility with the base library."
   }
]

export default function FAQs() {
   return (
      <Card>
         <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
         </CardHeader>
         <CardContent>
            <Accordion type="single" collapsible className="w-full">
               {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                     <AccordionTrigger>{faq.question}</AccordionTrigger>
                     <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
               ))}
            </Accordion>
         </CardContent>
      </Card>
   )
}

