import React from 'react';
import { HeartHandshake, Users2, ClipboardCheck, Coffee, Calendar } from 'lucide-react';
import { WHY_FOR_U_ITEMS } from '../data';

interface WhyForUProps {
  onOpenBooking: () => void;
}

export const WhyForU: React.FC<WhyForUProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    const iconClass = 'w-4.5 h-4.5 text-[#D4B88A] shrink-0';
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} strokeWidth={1.8} />;
      case 'Users2':
        return <Users2 className={iconClass} strokeWidth={1.8} />;
      case 'ClipboardCheck':
        return <ClipboardCheck className={iconClass} strokeWidth={1.8} />;
      case 'Coffee':
      default:
        return <Coffee className={iconClass} strokeWidth={1.8} />;
    }
  };

  return (
    <section
      id="diferenciais"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-[#3B332D] text-[#F7F4EF] relative overflow-hidden"
    >
      {/* Subtle atmospheric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B88A5A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D4B88A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout: ~55% content on left, ~45% photography on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: ~55% visual proportion with controlled width */}
          <div className="lg:col-span-7">
            <div className="max-w-xl lg:max-w-[540px]">
              {/* Section Header */}
              <div className="mb-8 sm:mb-10">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#D4B88A] uppercase block mb-3">
                  Diferenciais
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-[#F7F4EF] font-normal leading-[1.18] tracking-tight mb-4 sm:mb-5">
                  Por que a For U?
                </h2>
                <p className="text-[#E9DFCF]/85 text-sm sm:text-base font-light leading-relaxed">
                  Priorizamos uma prática odontológica transparente e compassiva, onde a dedicação aos detalhes faz toda a diferença na sua experiência.
                </p>
              </div>

              {/* Editorial Differentials: Icon + Title + Description without cards or boxes */}
              <div className="space-y-6 sm:space-y-7 mb-8 sm:mb-10">
                {WHY_FOR_U_ITEMS.map((item) => (
                  <div key={item.id} className="flex items-start gap-3.5 sm:gap-4 group">
                    <div className="mt-1 text-[#D4B88A] shrink-0 transition-transform duration-200 group-hover:scale-105">
                      {getIcon(item.iconName)}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-heading text-base sm:text-lg text-[#F7F4EF] font-medium tracking-tight group-hover:text-[#D4B88A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#E9DFCF]/80 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action: Desktop (exibido na coluna esquerda) */}
              <div className="hidden lg:block pt-1">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="btn-primary px-8 sm:px-9 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
                  id="why-foru-desktop-cta"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Sua Avaliação</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: ~45% visual proportion, enhanced photo prominence */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-[#2A2420] border border-[#D4B88A]/25 shadow-xs aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] xl:aspect-[5/6] w-full max-w-lg mx-auto lg:max-w-none">
              <img
                src="/assets/clinic/FORU.jpg"
                alt="Recepção e logotipo da clínica For U Odontologia Especializada"
                className="w-full h-full object-cover object-[center_36%] brightness-[0.99] contrast-[1.01] transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Refined and discreet caption */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-3.5 rounded-xl bg-[#3B332D]/90 backdrop-blur-md border border-[#D4B88A]/30 text-left">
                <p className="font-heading text-xs sm:text-sm text-[#F7F4EF] font-normal leading-snug">
                  "O cuidado que você merece, planejado com calma e atenção exclusiva."
                </p>
                <span className="block text-[9.5px] text-[#D4B88A] uppercase tracking-wider mt-1 font-medium">
                  Recepção & Atendimento For U
                </span>
              </div>
            </div>

            {/* Call to Action: Mobile (exibido abaixo da fotografia para fechar a narrativa com naturalidade) */}
            <div className="block lg:hidden mt-8 text-center sm:text-left">
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn-primary w-full sm:w-auto min-h-[48px] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                id="why-foru-mobile-cta"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Sua Avaliação</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
