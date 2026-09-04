import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="mt-6 rounded-lg border border-border bg-card px-5 shadow-editorial">
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`faq-${i}`}>
          <AccordionTrigger className="text-left font-sans text-base font-semibold hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-[0.98rem] leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
