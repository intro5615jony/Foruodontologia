import React from 'react';
import { ArrowRight, CheckCircle2, Heart, Sparkles, Users } from 'lucide-react';

interface PhilosophyThreeProps {
  onOpenBooking?: () => void;
}

export const PhilosophyThree: React.FC<PhilosophyThreeProps> = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#E9DFCF]/30 text-[#3B332D] border-t border-[#E9DFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B88A5A] uppercase block mb-3">
                Filosofia For U
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#3B332D] font-normal leading-[1.16] tracking-tight mb-4 sm:mb-6">
                Três especialistas.<br />
                <span className="font-normal text-[#B88A5A]">Um cuidado pensado por inteiro.</span>
              </h2>
              <p className="text-[#3B332D]/85 text-base sm:text-lg font-light leading-relaxed">
                Diferentes áreas de atuação que se complementam para proporcionar uma experiência de cuidado mais completa, próxima e personalizada.
              </p>
            </div>

            {/* 4 Core Pillars of the Union: Editorial Minimalist Presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 pt-4 sm:pt-6 border-t border-[#E9DFCF]">
              {/* Item 1: União */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-[#B88A5A]">
                  <Users className="w-4 h-4 text-[#B88A5A] shrink-0" strokeWidth={1.8} />
                  <h3 className="font-heading text-base sm:text-lg font-medium text-[#3B332D] tracking-tight">
                    União
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                  Três profissionais reunidas por uma mesma forma de enxergar o cuidado odontológico.
                </p>
              </div>

              {/* Item 2: Complementaridade */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-[#B88A5A]">
                  <Sparkles className="w-4 h-4 text-[#B88A5A] shrink-0" strokeWidth={1.8} />
                  <h3 className="font-heading text-base sm:text-lg font-medium text-[#3B332D] tracking-tight">
                    Complementaridade
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                  Diferentes áreas de atuação que permitem uma visão mais ampla das necessidades de cada paciente.
                </p>
              </div>

              {/* Item 3: Confiança */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-[#B88A5A]">
                  <CheckCircle2 className="w-4 h-4 text-[#B88A5A] shrink-0" strokeWidth={1.8} />
                  <h3 className="font-heading text-base sm:text-lg font-medium text-[#3B332D] tracking-tight">
                    Confiança
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                  Informação clara, escuta e proximidade em cada etapa do atendimento.
                </p>
              </div>

              {/* Item 4: Cuidado Humano */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-[#B88A5A]">
                  <Heart className="w-4 h-4 text-[#B88A5A] shrink-0" strokeWidth={1.8} />
                  <h3 className="font-heading text-base sm:text-lg font-medium text-[#3B332D] tracking-tight">
                    Cuidado Humano
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                  Cada paciente é recebido de forma individual, respeitando suas necessidades, expectativas e particularidades.
                </p>
              </div>
            </div>

            {/* CTA Secundário: Conheça as Especialistas */}
            <div className="pt-2">
              <a
                href="#especialistas"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B88A5A] hover:text-[#3B332D] transition-colors py-1 cursor-pointer"
              >
                <span>Conheça as Especialistas</span>
                <ArrowRight className="w-4 h-4 text-[#B88A5A] group-hover:text-[#3B332D] group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Photo of the Three Specialists Together */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xs border border-[#E9DFCF] aspect-[1/1] sm:aspect-[1.11/1] w-full max-w-md mx-auto lg:max-w-none">
              <img
                src="/assets/specialists/3doutoras.png"
                alt="Dra. Roberta, Dra. Fabiana e Dra. Tatiana - Equipe For U Odontologia Especializada"
                className="w-full h-full object-contain sm:object-cover sm:object-top brightness-[0.99] contrast-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B332D]/35 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 p-3 rounded-xl bg-[#F7F4EF]/95 backdrop-blur-sm border border-[#E9DFCF] text-center">
                <p className="text-xs sm:text-sm font-medium text-[#3B332D]">
                  Dra. Roberta • Dra. Fabiana • Dra. Tatiana
                </p>
                <span className="block text-[10px] sm:text-[11px] text-[#B88A5A] uppercase tracking-wider font-semibold mt-0.5">
                  Cirurgiãs-Dentistas • For U Odontologia
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
