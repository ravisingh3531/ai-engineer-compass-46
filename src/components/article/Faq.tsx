import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqGroups } from "@/data/faqs";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <div className="mt-6 space-y-8">
      {faqGroups.map((group, gi) => (
        <Reveal key={group.cluster}>
          <h3 className="scroll-mt-24 mb-3 flex items-center gap-3 text-xl text-primary">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-xs text-primary-foreground">
              {gi + 1}
            </span>
            {group.cluster}
            <span className="text-xs font-normal text-muted-foreground">{group.items.length} questions</span>
          </h3>
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-5 shadow-editorial">
            {group.items.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${gi}-${i}`}>
                <AccordionTrigger className="text-left font-sans text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.98rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      ))}
    </div>
  );
}
