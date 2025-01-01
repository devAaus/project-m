import { Sidebar } from "@/components/docs/sidebar"

export default function DocsLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <div className="flex flex-col md:flex-row">
         <Sidebar className="w-full md:w-64 shrink-0" />
         <main className="flex-grow p-6 md:p-12 overflow-auto">{children}</main>
      </div>
   )
}

