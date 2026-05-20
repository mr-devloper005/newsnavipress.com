'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How quickly will my press release be distributed?', a: 'Standard distribution is completed within 24 hours. Express distribution is available for same-day delivery to our full media network.' },
  { q: 'How many media outlets will receive my press release?', a: 'Depending on your distribution scope, your release reaches between 200 and 5,000+ verified media outlets including national wire services, industry publications, and digital news platforms.' },
  { q: 'Can I include images and multimedia in my press release?', a: 'Yes. You can attach images, videos, infographics, and documents to your press release. Multimedia attachments significantly increase pickup rates.' },
  { q: 'Do you offer translation services?', a: 'Yes. We offer professional translation into multiple languages to help you reach international audiences and non-English media outlets.' },
]

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4 text-sm lg:text-base">{faq.q}</span>
            <ChevronDown className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
