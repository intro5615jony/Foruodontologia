import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, CLINIC_INFO } from '../data';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full bg-[#FAF8F5] overflow-hidden pt-20 sm:pt-24 lg:pt-20 border-b border-[#E9DFCF]/70"
      aria-label="Início - For U Odontologia Especializada"
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-80px)] lg:min-h-[660px] xl:min-h-[720px] 2xl:min-h-[780px]">
        
        {/* =========================================================================
            CONTEÚDO TEXTUAL — (Lado esquerdo no Desktop; Abaixo da foto no Mobile)
            Fundo claro, sofisticado e acolhedor em tons de bege / off-white
           ========================================================================= */}
        <div className="w-full lg:w-[48%] xl:w-[47%] 2xl:w-[45%] flex items-center justify-center lg:justify-end shrink-0 z-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-5 sm:px-8 md:px-12 lg:pl-10 lg:pr-6 xl:pl-16 xl:pr-10 2xl:pl-24 2xl:pr-14 order-2 lg:order-1">
          <div className="w-full max-w-xl text-left">
            
            {/* Texto superior / Kicker */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4 lg:mb-5">
              <span className="w-6 sm:w-8 h-px bg-[#B88A5A]" aria-hidden="true" />
              <span className="text-[#B88A5A] font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-xs md:text-[13px] uppercase">
                {CLINIC_INFO.name}
              </span>
            </div>

            {/* Título Principal padronizado rigorosamente em 4 linhas */}
            <h1 className="font-heading text-[1.65rem] xs:text-[1.85rem] sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.85rem] 2xl:text-[3.25rem] leading-[1.14] sm:leading-[1.14] tracking-tight mb-4 sm:mb-6 uppercase text-left">
              <span className="block text-[#2D241E] font-normal">
                <span className="block whitespace-nowrap">ODONTOLOGIA FEITA</span>
                <span className="block whitespace-nowrap">COM PRECISÃO.</span>
              </span>
              <span className="block text-[#B88A5A] mt-1 sm:mt-1.5 font-medium">
                <span className="block whitespace-nowrap">CUIDADO FEITO</span>
                <span className="block whitespace-nowrap">PARA VOCÊ.</span>
              </span>
            </h1>

            {/* Descrição Institucional */}
            <p className="text-[#5C5248] text-sm sm:text-base lg:text-[17px] font-light leading-relaxed max-w-xl">
              Um espaço pensado para o seu bem-estar, onde a união de especialistas dedicadas transforma cada consulta em uma experiência acolhedora e segura.
            </p>

          </div>
        </div>

        {/* =========================================================================
            FOTOGRAFIAS — (Lado direito no Desktop; Acima do texto no Mobile)
            Fotografias reais, naturais, claras e com carrossel automático em crossfade
           ========================================================================= */}
        <div className="w-full lg:w-[52%] xl:w-[53%] 2xl:w-[55%] relative min-h-[300px] xs:min-h-[340px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-full flex-1 overflow-hidden bg-[#FAF8F5] order-1 lg:order-2">
          
          {/* Carrossel de Fotografias Reais (Crossfade Suave com Opacidade) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
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
                    className={`w-full h-full object-cover ${slide.objectPosition || 'object-center'} ${slide.imageClassName || ''} brightness-[1.0] contrast-[1.01] filter`}
                    style={slide.imageStyle}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                  />
                </div>
              );
            })}
          </div>

          {/* DEGRADÊ HORIZONTAL SUAVE (Desktop):
              Começa com o tom de fundo da área esquerda (#FAF8F5) e desaparece progressivamente
              sobre a fotografia do lado direito, garantindo uma transição fluida sem linhas duras */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-32 xl:w-44 2xl:w-56 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #FAF8F5 0%, rgba(250, 248, 245, 0.95) 15%, rgba(250, 248, 245, 0.75) 40%, rgba(250, 248, 245, 0.25) 75%, rgba(250, 248, 245, 0) 100%)',
            }}
            aria-hidden="true"
          />

          {/* DEGRADÊ VERTICAL SUAVE (Mobile / Tablet):
              Transição suave do fundo da fotografia para o conteúdo textual inferior */}
          <div
            className="lg:hidden absolute bottom-0 inset-x-0 h-16 sm:h-20 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #FAF8F5 0%, rgba(250, 248, 245, 0.7) 40%, rgba(250, 248, 245, 0) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Transição inferior sutil para a barra de especialidades no desktop */}
          <div
            className="hidden lg:block absolute bottom-0 inset-x-0 h-16 sm:h-20 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(247, 244, 239, 0.85) 0%, rgba(247, 244, 239, 0.35) 45%, rgba(247, 244, 239, 0) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Sombra sutil superior no desktop para contraste refinado da barra superior */}
          <div
            className="hidden lg:block absolute top-0 inset-x-0 h-20 z-15 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(50, 42, 36, 0.22) 0%, rgba(50, 42, 36, 0) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Legenda institucional discreta da fotografia atual (Posicionada no canto inferior direito) */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-24 z-30 pointer-events-none max-w-[calc(100%-2rem)] sm:max-w-md">
            <p className="text-[10.5px] sm:text-xs text-[#FAF8F5] font-light tracking-wide bg-[#2D241E]/80 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-md truncate sm:whitespace-normal">
              {HERO_SLIDES[currentSlideIndex].caption}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
