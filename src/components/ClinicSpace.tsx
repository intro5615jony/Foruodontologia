import React, { useState, useEffect } from 'react';

const WAITING_ROOM_SLIDES = [
  {
    id: 'waiting-1',
    image: '/assets/clinic/sala-espera-1.png',
    alt: 'Sala de espera acolhedora com sofás confortáveis e plantas',
    objectPosition: 'object-[center_45%]',
  },
  {
    id: 'waiting-2',
    image: '/assets/clinic/sala-espera-2.png',
    alt: 'Cantinho de café aconchegante e moderno na sala de espera',
    objectPosition: 'object-[center_38%]',
  },
  {
    id: 'waiting-3',
    image: '/assets/clinic/sala-espera-kids.png',
    alt: 'Cantinho infantil com TV e brinquedos educativos preparado para as crianças',
    objectPosition: 'object-[center_38%]',
  },
];

const ADVANCED_TECH_SLIDES = [
  {
    id: 'tech-1',
    image: '/assets/clinic/tecnologia-1.jpg',
    alt: 'Scanner intraoral 3D digital para escaneamento e diagnóstico de alta precisão',
    objectPosition: 'object-[center_35%]',
  },
  {
    id: 'tech-2',
    image: '/assets/clinic/tecnologia-2.jpg',
    alt: 'Modelo anatômico odontológico demonstrando implantes e reabilitação oral',
    objectPosition: 'object-[center_45%]',
  },
  {
    id: 'tech-3',
    image: '/assets/clinic/tecnologia-3.jpg',
    alt: 'Equipamento e tecnologia odontológica moderna para procedimentos precisos e seguros',
    objectPosition: 'object-[center_45%]',
  },
];

const DENTAL_OFFICE_SLIDES = [
  {
    id: 'consultorio-01',
    image: '/assets/clinica/consultorio-01.webp',
    alt: 'Consultório odontológico moderno com mesa de atendimento, flores e cadeira odontológica',
    objectPosition: 'object-[center_35%]',
  },
  {
    id: 'consultorio-02',
    image: '/assets/clinica/consultorio-02.webp',
    alt: 'Consultório odontológico com painel em madeira ripada, iluminação acolhedora e equipamentos',
    objectPosition: 'object-[center_35%]',
  },
  {
    id: 'consultorio-03',
    image: '/assets/clinica/consultorio-03.webp',
    alt: 'Visão completa do consultório com iluminação natural, armários e cadeira odontológica',
    objectPosition: 'object-[center_40%]',
  },
];

export const ClinicSpace: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Monitora preferência de redução de movimento do sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Sincronização centralizada dos três carrosséis a cada 5 segundos
  // Pausa automaticamente se o usuário passar o mouse sobre o card ou se houver prefers-reduced-motion
  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;

    let timer: ReturnType<typeof setInterval>;

    const startTimer = () => {
      timer = setInterval(() => {
        setActiveSlideIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 5000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        clearInterval(timer);
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion, isHovered]);

  // Pré-carregamento das imagens dos três carrosséis para transições instantâneas e sem piscadas
  useEffect(() => {
    const allImages = [
      ...WAITING_ROOM_SLIDES.map((s) => s.image),
      ...ADVANCED_TECH_SLIDES.map((s) => s.image),
      ...DENTAL_OFFICE_SLIDES.map((s) => s.image),
    ];

    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const transitionDurationClass = prefersReducedMotion ? 'duration-0' : 'duration-[600ms]';

  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-[#F7F4EF] text-[#3B332D] border-t border-[#E9DFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-[#B88A5A] uppercase block mb-2.5 sm:mb-3">
            O Espaço Físico
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl text-[#3B332D] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight mb-3 sm:mb-4">
            Um espaço pensado para você.
          </h2>
          <p className="text-[#3B332D]/80 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Ambientes planejados com iluminação suave e acolhimento em cada detalhe, em localização de fácil acesso no Brooklin.
          </p>
        </div>

        {/* Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          
          {/* Main Large Photo / Automatic Carousel: Sala de Espera */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] shadow-xs h-full min-h-[260px] sm:min-h-[440px] group">
              {/* Carousel Slides */}
              {WAITING_ROOM_SLIDES.map((slide, index) => {
                const isActive = index === activeSlideIndex;
                return (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-cover ${slide.objectPosition} brightness-[0.98] contrast-[1.02] saturate-[0.96] transition-opacity ${transitionDurationClass} ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                );
              })}

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B332D]/80 via-[#3B332D]/20 to-transparent pointer-events-none z-20" />

              {/* Fixed Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-[#F7F4EF] z-30">
                <h3 className="font-heading text-lg sm:text-2xl font-normal mb-1">
                  Sala de Espera
                </h3>
                <p className="text-xs sm:text-sm text-[#E9DFCF]/85 font-light">
                  Um ambiente acolhedor e confortável, pensado para receber você e sua família com carinho e tranquilidade.
                </p>
                <span className="inline-block text-[9.5px] sm:text-[10px] uppercase tracking-wider text-[#D4B88A] mt-1.5 sm:mt-2 font-semibold">
                  ESPAÇO & ACOLHIMENTO FOR U
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Photos Column: Tecnologia Avançada & Consultório Odontológico */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-8 justify-between">
            {/* Top Card: Tecnologia Avançada (Automatic Carousel) */}
            <div className="relative rounded-2xl overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] shadow-xs flex-1 min-h-[180px] sm:min-h-[210px] group">
              {ADVANCED_TECH_SLIDES.map((slide, index) => {
                const isActive = index === activeSlideIndex;
                return (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-cover ${slide.objectPosition} brightness-[0.98] contrast-[1.02] saturate-[0.96] transition-opacity ${transitionDurationClass} ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B332D]/70 via-[#3B332D]/15 to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-[#F7F4EF] z-30">
                <h4 className="font-heading text-base sm:text-lg font-normal mb-0.5">
                  Tecnologia Avançada
                </h4>
                <p className="text-[11px] text-[#E9DFCF]/80 font-light">
                  Equipamentos e tecnologias que proporcionam mais precisão, segurança e conforto em cada atendimento.
                </p>
              </div>
            </div>

            {/* Bottom Card: Consultório Odontológico (Automatic Carousel Sincronizado com Pause on Hover) */}
            <div
              className="relative rounded-2xl overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] shadow-xs flex-1 min-h-[180px] sm:min-h-[210px] group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {DENTAL_OFFICE_SLIDES.map((slide, index) => {
                const isActive = index === activeSlideIndex;
                return (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-cover ${slide.objectPosition} brightness-[0.98] contrast-[1.02] saturate-[0.96] transition-opacity ${transitionDurationClass} ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B332D]/70 via-[#3B332D]/15 to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-[#F7F4EF] z-30">
                <h4 className="font-heading text-base sm:text-lg font-normal mb-0.5">
                  Consultório Odontológico
                </h4>
                <p className="text-[11px] text-[#E9DFCF]/80 font-light">
                  Estrutura acolhedora pensada para o seu bem-estar e conforto.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
