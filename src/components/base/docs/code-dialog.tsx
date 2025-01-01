import { Code } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CodeBlock } from "@/components/ui/code-block";


export const CodeDialog = ({ code }: { code: string }) => (
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
      <DialogContent className="dark max-w-3xl p-0 border-none rounded-lg text-white">
         <ScrollArea
            className="max-h-[30rem] max-w-3xl [&>div]:!overflow-x-auto rounded"
            style={{ overflow: "unset" }}
         >
            <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm">
               <CodeBlock
                  language="jsx"
                  code={code}
               />
            </div>
         </ScrollArea>
      </DialogContent>
   </Dialog>
);