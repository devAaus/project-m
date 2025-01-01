import FAQs from "@/components/docs/faqs";
import Introduction from "@/components/docs/introduction";


export default function DocsPage() {
   return (
      <main className="container mx-auto">
         <h1 className="text-4xl font-bold mb-8 text-primary">meshUI Documentation</h1>
         <Introduction />
         <FAQs />
      </main>
   )
}

