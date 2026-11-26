import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS, CLINIC_INFO, GOOGLE_RATING } from '../data';

export const Testimonials: React.FC = () => {
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
                <span className="font-medium text-[#3B332D]">{GOOGLE_RATING.score}</span>
                <span className="text-[#3B332D]/40">•</span>
                <span>{GOOGLE_RATING.count} avaliações no Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Carrossel contínuo (direita → esquerda), pausa ao passar o mouse */}
        <div className="reviews-marquee relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden" aria-label="Avaliações de pacientes no Google">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 z-10 bg-gradient-to-r from-[#F7F4EF] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 z-10 bg-gradient-to-l from-[#F7F4EF] to-transparent" />
          <div className="reviews-track flex w-max py-2">
            {[...TESTIMONIAL_PLACEHOLDERS, ...TESTIMONIAL_PLACEHOLDERS].map((item, idx) => (
              <article
                key={`${item.id}-${idx}`}
                aria-hidden={idx >= TESTIMONIAL_PLACEHOLDERS.length}
                className="w-[290px] sm:w-[360px] mr-5 sm:mr-8 shrink-0 flex flex-col justify-between rounded-2xl bg-[#FAF8F5] border border-[#E9DFCF] p-5 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#B88A5A] text-[#B88A5A]" />
                      ))}
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#3B332D]/50 font-medium">Google</span>
                  </div>
                  <p className="text-sm text-[#3B332D]/85 font-light leading-relaxed italic mb-6">
                    "{item.quotePlaceholder}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E9DFCF]/60 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-[#B88A5A] text-[#F7F4EF] flex items-center justify-center shrink-0 text-sm font-semibold overflow-hidden" aria-hidden="true">
                    {item.authorLabel.charAt(0)}
                    {item.avatarUrl && (
                      <img
                        src={item.avatarUrl}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[#3B332D] font-medium truncate">{item.authorLabel}</p>
                    <span className="text-[11px] text-[#3B332D]/50 block">Avaliação via Google</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
