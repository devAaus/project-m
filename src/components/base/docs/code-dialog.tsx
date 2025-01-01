import { Code } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CodeBlock } from "@/components/ui/code-block";


type CodeDialogProps = {
   code: string;
   title: string;
}

export const CodeDialog = ({ code, title }: CodeDialogProps) => (
   // <Dialog>
   //    <DialogTrigger asChild>
   //       <Button
   //          size="icon"
   //          variant="ghost"
   //          className="h-8 w-8 text-muted-foreground"
   //       >
   //          <Code />
   //       </Button>
   //    </DialogTrigger>
   //    <DialogContent className="dark max-w-5xl p-0 border-none rounded-lg text-white overflow-auto">
   //       <ScrollArea
   //          className=" [&>div]:!overflow-x-auto rounded"
   //          style={{ overflow: "unset" }}
   //       >
   //          <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm">
   //             <CodeBlock
   //                language="jsx"
   //                code={code}
   //             />
   //          </div>
   //       </ScrollArea>
   //    </DialogContent>
   // </Dialog>
   <Dialog>
      <DialogTrigger asChild>
         <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-muted-foreground"
         >
            <Code />
         </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl" >
         <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription />
         </DialogHeader>
         <div className="max-w-5xl overflow-auto scroll-smooth">
            <CodeBlock
               language="jsx"
               code={code}
            />
         </div>
      </DialogContent>
   </Dialog>

);