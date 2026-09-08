import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, CLINIC_INFO } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerEl = document.getElementById('main-header');
      const headerOffset = headerEl ? (headerEl.offsetHeight > 70 ? 70 : headerEl.offsetHeight) : 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#3B332D] pt-20 pb-14 sm:py-0"
    >
      {/* Background Slides with Crossfade Animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover ${slide.objectPosition || 'object-center'} transition-transform duration-6000 ease-out`}
                loading={index === 0 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        {/* Warm Dark Overlay (55% to 60% Opacity) for Enhanced Legibility & Contrast */}
        <div
          className="absolute inset-0 z-20"
          style={{ backgroundColor: 'rgba(50, 42, 36, 0.58)' }}
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center flex flex-col items-center">
        
        {/* Subtitle / Supertitle */}
        <p className="text-[#D4B88A] font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-sm uppercase mb-3.5 sm:mb-5 drop-shadow-[0_1px_6px_rgba(30,22,16,0.45)]">
          {CLINIC_INFO.name}
        </p>

        {/* Main Authorial Headline: Quebra natural no mobile, duas linhas no desktop */}
        <h1 className="font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[3.15rem] xl:text-[3.75rem] text-[#F7F4EF] leading-[1.22] sm:leading-[1.18] font-normal tracking-tight max-w-4xl mb-5 sm:mb-8 drop-shadow-[0_2px_12px_rgba(25,18,12,0.45)]">
          <span className="inline lg:block lg:whitespace-nowrap">Odontologia feita com precisão. </span>
          <span className="inline lg:block lg:whitespace-nowrap text-[#D4B88A]">Cuidado feito para você.</span>
        </h1>

        {/* Short & Human Supporting Narrative */}
        <p className="text-[#F7F4EF]/95 text-xs sm:text-base md:text-lg font-light leading-relaxed max-w-xl mb-7 sm:mb-10 px-2 sm:px-4 drop-shadow-[0_1px_8px_rgba(25,18,12,0.4)]">
          Um espaço pensado para o seu bem-estar, onde a união de especialistas dedicadas transforma cada consulta em uma experiência acolhedora e segura.
        </p>

        {/* Main Call to Actions: Empilhados verticalmente no mobile, lado a lado no desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-none px-2 sm:px-0">
          {/* CTA Principal: Agendar Consulta */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#B88A5A] hover:bg-[#A37547] text-[#F7F4EF] border border-[#B88A5A] px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-[13px] uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            id="hero-primary-cta"
          >
            <Calendar className="w-4 h-4 text-[#F7F4EF]" />
            <span>Agendar Consulta</span>
          </button>

          {/* CTA Secundário: Conheça a For U */}
          <button
            type="button"
            onClick={() => handleScrollToSection('#a-clinica')}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#F7F4EF]/15 text-[#F7F4EF] border border-[#F7F4EF]/55 hover:border-[#F7F4EF] px-6 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-[13px] uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer backdrop-blur-[2px]"
            id="hero-secondary-cta"
          >
            <span>Conheça a For U</span>
            <ArrowRight className="w-4 h-4 text-[#F7F4EF]/85" />
          </button>
        </div>

        {/* Slide Counter / Indicators */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center gap-3" aria-label="Navegação de fotos">
          <span className="text-[11px] font-bold tracking-tight text-[#D4B88A]">
            0{currentSlideIndex + 1}
          </span>
          <div className="flex items-center gap-2 py-2">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                    isActive ? 'w-8 bg-[#D4B88A]' : 'w-3 bg-[#F7F4EF]/40 hover:bg-[#F7F4EF]/70'
                  }`}
                  aria-label={`Ver foto ${slide.caption}`}
                />
              );
            })}
          </div>
          <span className="text-[11px] font-medium text-[#E9DFCF]/80">
            0{HERO_SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
};
