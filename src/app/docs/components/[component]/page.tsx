import { Separator } from "@/components/ui/separator";

import { customizedComponents } from "@/lib/customized-components";
import { componentsMap } from "@/lib/components-map";
import { ComponentCard } from "@/components/base/docs/component-card";


export const generateStaticParams = async () => {
   const components = Object.keys(componentsMap);
   return components.map((component) => ({
      component: component.toLowerCase(),
   }));
};


export default async function ComponentPage({
   params,
}: {
   params: Promise<{ component: string }>;
}) {
   const { component } = await params;
   const components =
      customizedComponents[component as keyof typeof customizedComponents] || [];
   const details = componentsMap[component as keyof typeof componentsMap];

   return (
      <div className="container mx-auto space-y-8">
         <div className="space-y-4">
            <h1 className="text-3xl font-bold capitalize">{details.title}</h1>
            <p className="text-xl text-muted-foreground">
               {details.description}
            </p>
         </div>
         <Separator />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {components.map((comp, index) => (
               <ComponentCard key={`${comp.title}-${index}`} {...comp} />
            ))}
         </div>
      </div>
   );
}
