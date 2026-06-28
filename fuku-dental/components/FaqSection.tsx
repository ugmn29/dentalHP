import type { ReactNode } from 'react';

export interface FaqItem {
  q: ReactNode;
  a: ReactNode;
  note?: ReactNode;
  noteTone?: 'green' | 'yellow';
}

interface FaqSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  className?: string;
}

function splitAnswerAndNote(item: FaqItem): { answer: ReactNode; note?: ReactNode } {
  if (item.note || typeof item.a !== 'string') {
    return { answer: item.a, note: item.note };
  }

  const sentences = item.a
    .trim()
    .match(/[^。！？!?]+[。！？!?]+|[^。！？!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean);

  if (!sentences || sentences.length < 2) {
    return { answer: item.a };
  }

  const note = sentences[sentences.length - 1];
  if (note.length < 12 || note.length > 90) {
    return { answer: item.a };
  }

  return {
    answer: sentences.slice(0, -1).join('').trim(),
    note,
  };
}

export function FaqSection({
  id = 'faq',
  title = 'よくある質問',
  subtitle,
  items,
  className = '',
}: FaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section id={id} className={`bg-white pt-8 pb-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#5A4D41] md:text-4xl">
              {title}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C5A572]" />
            {subtitle && (
              <p className="mt-5 text-sm leading-[2] text-[#8D8070] md:text-base">
                {subtitle}
              </p>
            )}
          </div>

          <div className="space-y-6">
            {items.map((faq, index) => {
              const { answer, note } = splitAnswerAndNote(faq);
              const noteTone = faq.noteTone ?? (index % 2 === 0 ? 'yellow' : 'green');
              const noteClasses =
                noteTone === 'yellow'
                  ? 'border-[#E7D29C] bg-[#FFF8E6] text-[#7A6337]'
                  : 'border-[#C7DDD1] bg-[#E8F2ED] text-[#395B45]';

              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-md"
                >
                  <div className="mb-4">
                    <div className="mb-3 flex items-start gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C5A572] text-sm text-white">
                        Q{index + 1}
                      </span>
                      <h3 className="pt-1 text-lg font-bold leading-relaxed text-[#5A4D41]">
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <div className="leading-relaxed text-[#8D8070]">
                    <p>
                      <strong className="text-[#C5A572]">A.</strong> {answer}
                    </p>
                    {note && (
                      <p className={`mt-4 rounded-lg border px-4 py-3 text-sm leading-relaxed shadow-sm ${noteClasses}`}>
                        {note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
