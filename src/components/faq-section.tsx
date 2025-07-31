import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Can partitions reduce office noise?",
      answer: "Yes—double-glazed (DGU) partitions provide excellent acoustic insulation, ideal for meeting rooms and private cabins."
    },
    {
      question: "Are they durable in humid environments?",
      answer: "Definitely. Aluminium frames resist rust and corrosion, making them ideal for long-term use—even in high-humidity zones."
    },
    {
      question: "Is customization possible for glass design?",
      answer: "Yes—options include clear, frosted, patterned, or tinted glass to match your style and privacy needs."
    },
    {
      question: "Will installation disrupt work hours?",
      answer: "Not at all. Our modular systems ensure fast, clean installation with minimal disruption to your workflow."
    },
  ]
  
  export default function FaqSection() {
    return (
      <section id="faq" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{`Q${index+1}: ${faq.question}`}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  