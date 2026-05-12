import React from "react";
import Badge from "../ui/Badge";
import type { FAQItem } from "../../data/faqTypes";

interface FAQSectionProps {
  title: string;
  intro: string;
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, intro, items }) => {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32" aria-labelledby="faq-title">
      <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.16]" />
      <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <Badge text="FAQ" variant="section-line" />
          <h2 id="faq-title" className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-[#56677A]">{intro}</p>
        </div>

        <dl className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <div key={item.question} className="border border-gray-200 bg-white p-6 shadow-sm">
              <dt className="text-lg font-bold leading-snug text-[#1C2A39]">{item.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#56677A]">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
