import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs, t }: { faqs: FAQItem[]; t: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <hr />
          <button
            className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="text-xl font-bold">{t(faq.question)}</span>
            <span className="ml-4 flex items-center justify-center rounded-full bg-gray-200 w-8 h-8">
              {openIndex === idx ? (
                <Minus className="w-6 h-6 text-gray-700" />
              ) : (
                <Plus className="w-6 h-6 text-gray-700" />
              )}
            </span>
          </button>
          {openIndex === idx && (
            <div className="pl-1 pb-6 text-gray-500 text-base">
              {t(faq.answer)}
            </div>
          )}
        </div>
      ))}
      <hr />
    </div>
  );
} 