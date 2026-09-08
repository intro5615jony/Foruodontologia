import React, { useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS, CLINIC_INFO } from '../data';

export const Testimonials: React.FC = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      // swipe left -> next
      setActiveMobileIndex((prev) => (prev + 1) % TESTIMONIAL_PLACEHOLDERS.length);
    } else if (diff < -50) {
      // swipe right -> prev
      setActiveMobileIndex(
        (prev) => (prev - 1 + TESTIMONIAL_PLACEHOLDERS.length) % TESTIMONIAL_PLACEHOLDERS.length
      );
    }
    setTouchStart(null);
  };

  return (
    <section
      id="avaliacoes"
      className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-20 py-14 sm:py-28 lg:py-36 bg-[#F7F4EF] text-[#3B332D] border-t border-[#E9DFCF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Header & Google Rating Highlight */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-[#B88A5A] uppercase block mb-2.5 sm:mb-3">
              Experiências na For U
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-[#3B332D] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight mb-3 sm:mb-4">
              A experiência de quem já passou pela For U.
            </h2>
            <p className="text-[#3B332D]/75 text-sm sm:text-base font-light leading-relaxed">
              A escuta atenta, o acolhimento humano e a confiança construída com cada paciente.
            </p>
          </div>

          {/* 2. Destaque do Google — discreto e preparado para dados reais futuros */}
          <div className="shrink-0 lg:pb-1">
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 sm:px-5 py-3 rounded-xl bg-[#E9DFCF]/35 border border-[#E9DFCF] w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-wider text-[#3B332D] uppercase">
                  Google
                </span>
                <div className="flex items-center gap-0.5 text-[#B88A5A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B88A5A] text-[#B88A5A]" />
                  ))}
                </div>
              </div>
              <div className="hidden sm:block h-3.5 w-px bg-[#E9DFCF]" />
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#3B332D]/70 font-light">
                <span>Avaliação 5.0 estrelas</span>
                <span className="text-[#3B332D]/40">•</span>
                <span>Google Avaliações</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Desktop Reviews Grid — 3 highlights, light editorial layout, no heavy cards */}
        <div className="hidden md:grid md:grid-cols-3 divide-x divide-[#E9DFCF] items-stretch">
          {TESTIMONIAL_PLACEHOLDERS.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between ${
                idx === 0 ? 'pr-8 lg:pr-10' : idx === 1 ? 'px-8 lg:px-10' : 'pl-8 lg:pl-10'
              }`}
            >
              <div>
                {/* Header: Stars & Google Origin */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#B88A5A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B88A5A] text-[#B88A5A]" />
                    ))}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#3B332D]/50 font-medium">
                    Google
                  </span>
                </div>

                {/* Review Text Placeholder */}
                <p className="text-sm sm:text-base text-[#3B332D]/85 font-light leading-relaxed mb-8 italic">
                  "{item.quotePlaceholder}"
                </p>
              </div>

              {/* Patient Attribution */}
              <div className="pt-4 border-t border-[#E9DFCF]/60 mt-auto flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E9DFCF] text-[#B88A5A] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-[#B88A5A]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-[#3B332D] font-medium truncate">
                    {item.authorLabel}
                  </p>
                  <span className="text-[11px] text-[#3B332D]/50 block">
                    Avaliação via Google
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Mobile Reviews Carousel — 1 review at a time with simple, accessible touch controls */}
        <div
          className="block md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {(() => {
            const currentItem = TESTIMONIAL_PLACEHOLDERS[activeMobileIndex];
            return (
              <div className="pb-2">
                {/* Stars & Origin */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#B88A5A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B88A5A] text-[#B88A5A]" />
                    ))}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#3B332D]/50 font-medium">
                    Google
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#3B332D]/85 font-light leading-relaxed mb-6 italic min-h-[72px]">
                  "{currentItem.quotePlaceholder}"
                </p>

                {/* Attribution */}
                <div className="pt-4 border-t border-[#E9DFCF]/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E9DFCF] text-[#B88A5A] flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-[#B88A5A]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#3B332D] font-medium">
                        {currentItem.authorLabel}
                      </p>
                      <span className="text-[11px] text-[#3B332D]/50 block">
                        Avaliação via Google
                      </span>
                    </div>
                  </div>

                  {/* Carousel Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Avaliação anterior"
                      onClick={() =>
                        setActiveMobileIndex(
                          (prev) =>
                            (prev - 1 + TESTIMONIAL_PLACEHOLDERS.length) %
                            TESTIMONIAL_PLACEHOLDERS.length
                        )
                      }
                      className="w-10 h-10 rounded-full border border-[#E9DFCF] flex items-center justify-center text-[#3B332D]/70 hover:text-[#3B332D] hover:bg-[#E9DFCF]/50 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Próxima avaliação"
                      onClick={() =>
                        setActiveMobileIndex(
                          (prev) => (prev + 1) % TESTIMONIAL_PLACEHOLDERS.length
                        )
                      }
                      className="w-10 h-10 rounded-full border border-[#E9DFCF] flex items-center justify-center text-[#3B332D]/70 hover:text-[#3B332D] hover:bg-[#E9DFCF]/50 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Dots indicator */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  {TESTIMONIAL_PLACEHOLDERS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ir para avaliação ${i + 1}`}
                      onClick={() => setActiveMobileIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeMobileIndex ? 'w-6 bg-[#B88A5A]' : 'w-1.5 bg-[#E9DFCF]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* 5. Single End-of-Section CTA: VER TODAS AS AVALIAÇÕES NO GOOGLE → */}
        <div className="mt-14 sm:mt-20 text-center">
          <a
            href={CLINIC_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B88A5A] hover:text-[#3B332D] transition-colors py-2 group cursor-pointer"
          >
            <span>Ver todas as avaliações no Google</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#B88A5A] group-hover:text-[#3B332D]" />
          </a>
        </div>

      </div>
    </section>
  );
};
