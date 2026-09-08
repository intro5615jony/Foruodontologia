import React from 'react';
import { Users2, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutClinicProps {
  onOpenBooking?: () => void;
}

export const AboutClinic: React.FC<AboutClinicProps> = () => {
  return (
    <section
      id="a-clinica"
      className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-20 py-14 sm:py-24 lg:py-32 bg-[#F7F4EF] text-[#3B332D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Layout: Imagem em cima no mobile, lado a lado no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Large Photo Column - As 3 fundadoras na recepção */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-[#E9DFCF]/40 shadow-xs border border-[#E9DFCF] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/6] max-w-lg mx-auto lg:max-w-none">
              <img
                src="/assets/clinic/doutoras-historia.png"
                alt="Dra. Roberta, Dra. Fabiana e Dra. Tatiana - For U Odontologia Especializada"
                className="w-full h-full object-cover object-top sm:object-[center_12%] brightness-[0.99] contrast-[1.01]"
                loading="lazy"
              />
              
              {/* Discrete institutional identification badge without dark overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#F7F4EF]/95 backdrop-blur-sm p-3 rounded-xl border border-[#E9DFCF] shadow-xs text-center">
                <p className="text-xs font-medium text-[#3B332D] leading-tight">
                  Dra. Fabiana • Dra. Roberta • Dra. Tatiana
                </p>
                <span className="block text-[10px] text-[#B88A5A] uppercase tracking-wider font-semibold mt-0.5">
                  Cirurgiãs-Dentistas • For U Odontologia
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Column: Label -> Título -> Texto -> Diferenciais -> CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7">
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-[#B88A5A] uppercase block mb-2.5 sm:mb-3">
                Sobre a For U
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl text-[#3B332D] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight mb-3.5 sm:mb-5">
                Uma história construída juntas.
              </h2>
            </div>

            {/* Factual, neutral institutional message */}
            <div className="space-y-4 text-[#3B332D]/85 text-base sm:text-lg font-light leading-relaxed">
              <p>
                A For U Odontologia Especializada reúne três profissionais com diferentes áreas de atuação e um propósito em comum: oferecer um cuidado próximo, individualizado e pensado para cada paciente.
              </p>
              <p>
                A integração entre diferentes especialidades permite olhar para cada caso de forma mais completa, considerando saúde, função, estética e bem-estar ao longo de todo o cuidado odontológico.
              </p>
            </div>

            {/* Max 3 Small Indicators/Diferenciais (Clean, no excessive card borders) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E9DFCF]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#B88A5A]">
                  <Users2 className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3B332D]">União</span>
                </div>
                <p className="text-xs text-[#3B332D]/75 font-light leading-snug">
                  Três especialistas com visões integradas para cada caso.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#B88A5A]">
                  <HeartHandshake className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3B332D]">Acolhimento</span>
                </div>
                <p className="text-xs text-[#3B332D]/75 font-light leading-snug">
                  Consultas sem pressa, com escuta atenta e empatia.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#B88A5A]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3B332D]">Confiança</span>
                </div>
                <p className="text-xs text-[#3B332D]/75 font-light leading-snug">
                  Transparência nos diagnósticos e planos de tratamento.
                </p>
              </div>
            </div>

            {/* Direct Discovery Link */}
            <div className="pt-2">
              <a
                href="#diferenciais"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B88A5A] hover:text-[#3B332D] transition-colors group cursor-pointer"
              >
                <span>Conhecer os diferenciais da For U</span>
                <ArrowRight className="w-4 h-4 text-[#B88A5A] group-hover:text-[#3B332D] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
