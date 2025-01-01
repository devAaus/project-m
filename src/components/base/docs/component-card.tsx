import { getFileContent } from "@/lib/file"
import dynamic from "next/dynamic"
import { CodeDialog } from "./code-dialog";
import { CopyToClipboardButton } from "./copy-to-clipboard";
import { Copy } from "lucide-react";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"


interface CodeBlockProps {
   type: string,
   name: string,
   title: string;
}

export async function ComponentCard({ type, name, title }: CodeBlockProps) {

   const src = `src/components/examples/${type}/${name}.tsx`;
   const code = await getFileContent(src).catch(() => "File content not found");

   const DynamicComponent = dynamic(() =>
      import(`@/components/examples/${type}/${name}.tsx`).catch(() => BlockNotFound),
      { loading: () => <div>Loading component...</div> }
   );


   return (
      <Card>
         <CardHeader className="p-0 px-3 py-1">
            <CardTitle className="h-10 flex items-center justify-between pl-1 border-b border-muted">
               <div className="flex items-center gap-2">
                  <span className="text-[15px] tracking-tight font-bold">{title}</span>
               </div>
               <div className="flex items-center">
                  <CopyToClipboardButton
                     size="icon"
                     variant="ghost"
                     className="h-8 w-8 text-muted-foreground"
                     content={code}
                  >
                     <Copy />
                  </CopyToClipboardButton>
                  <CodeDialog code={code} />
               </div>
            </CardTitle>
            <CardDescription />
         </CardHeader>
         <CardContent className="flex-1 min-h-32 px-1 py-5 w-full rounded flex items-center justify-center">
            <DynamicComponent />
         </CardContent>
      </Card>

   )
}

const BlockNotFound = () => (
   <div className="text-center text-red-500">
      <p>Component not found. Please check the configuration.</p>
   </div>
);