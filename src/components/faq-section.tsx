import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Why should I choose uPVC doors and windows over traditional materials?",
      answer: "uPVC offers superior insulation, long-term durability, and resistance to rust, rot, and corrosion—making it a better-performing and low-maintenance alternative to wood or metal. It also provides excellent value at a more affordable cost."
    },
    {
      question: "Are uPVC windows energy efficient?",
      answer: "Yes, uPVC doors and windows provide outstanding thermal insulation. They help maintain a consistent indoor temperature, reducing the need for excessive heating or cooling—ultimately lowering your energy bills."
    },
    {
      question: "Do uPVC windows require a lot of maintenance?",
      answer: "Not at all. uPVC is extremely low maintenance. Unlike wood, it doesn’t require polishing or painting, and it won’t rust or warp. A simple wipe with a damp cloth is usually enough to keep it clean."
    },
    {
      question: "Are uPVC doors and windows secure?",
      answer: "Absolutely. uPVC frames are tough and designed to hold advanced locking systems, offering enhanced protection against break-ins. They help improve the safety and security of your home."
    },
  ]
  
  export default function FaqSection() {
    return (
      <section id="faq" className="py-20 sm:py-32">
        <div className="site-container">
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
  
