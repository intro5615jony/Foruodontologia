import React from 'react';
import { Users2, HeartHandshake, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface AboutClinicProps {
  onOpenBooking?: () => void;
}

export const AboutClinic: React.FC<AboutClinicProps> = () => {
  return (
    <section
      id="a-clinica"
      className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-20 py-16 sm:py-24 lg:py-32 bg-[#F7F4EF] text-[#3B332D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção Unificada: Duas Colunas no Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Coluna Esquerda — Fotografia das Três Doutoras */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-[#E9DFCF]/40 shadow-xs border border-[#E9DFCF] aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <img
                src="/assets/aistudio/Retrato_alegre_em_cl_nica_moderna_985923cd.png"
                alt="Dra. Roberta, Dra. Fabiana e Dra. Tatiana - For U Odontologia Especializada"
                className="w-full h-full object-cover object-top brightness-[1.0] contrast-[1.01]"
                loading="lazy"
              />
              
              {/* Faixa clara, discreta com cantos arredondados e texto centralizado */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 bg-[#F7F4EF]/95 backdrop-blur-md py-3 px-4 rounded-xl border border-[#E9DFCF] shadow-xs text-center">
                <p className="text-xs sm:text-[13px] font-medium text-[#3B332D] leading-tight">
                  Dra. Roberta • Dra. Fabiana • Dra. Tatiana
                </p>
                <span className="block text-[9.5px] sm:text-[10px] text-[#B88A5A] uppercase tracking-[0.18em] font-semibold mt-1">
                  CIRURGIÃS-DENTISTAS • FOR U ODONTOLOGIA
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita — Conteúdo Institucional Unificado */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Identificação */}
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B88A5A] uppercase block mb-2 sm:mb-2.5">
              SOBRE A FOR U
            </span>

            {/* 2. Título Principal com destaque em itálico dourado */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[2.5rem] xl:text-[2.85rem] text-[#3B332D] font-normal leading-[1.18] tracking-tight mb-2 sm:mb-2.5">
              Uma história construída <br className="hidden sm:inline" />
              <span className="text-[#B88A5A] italic font-serif">juntas.</span>
            </h2>

            {/* 3. Subtítulo */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#B88A5A] mb-4 sm:mb-5">
              Três especialistas. Um cuidado pensado por inteiro.
            </p>

            {/* 4. Texto Institucional */}
            <div className="space-y-3.5 text-sm sm:text-base text-[#3B332D]/85 font-light leading-relaxed mb-6 sm:mb-7">
              <p>
                A For U Odontologia Especializada nasceu da união de três profissionais que compartilham o mesmo propósito: oferecer um cuidado próximo, individualizado e pensado para cada paciente.
              </p>
              <p>
                Com diferentes áreas de atuação que se complementam, proporcionamos uma visão integrada da saúde bucal, considerando saúde, função, estética e bem-estar em todas as etapas do tratamento.
              </p>
            </div>

            {/* 5. Pilares da For U: Linha fina divisória + Grade de 4 Diferenciais (2x2) */}
            <div className="border-t border-[#E9DFCF] pt-5 sm:pt-6 mb-6 sm:mb-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
                
                {/* Diferencial 1: UNIÃO */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#E9DFCF]/60 border border-[#E9DFCF] text-[#B88A5A] flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-[#E9DFCF]">
                    <Users2 className="w-4.5 h-4.5 text-[#B88A5A]" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3B332D]">
                      União
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                      Três profissionais com visões integradas para cada caso.
                    </p>
                  </div>
                </div>

                {/* Diferencial 2: ACOLHIMENTO */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#E9DFCF]/60 border border-[#E9DFCF] text-[#B88A5A] flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-[#E9DFCF]">
                    <HeartHandshake className="w-4.5 h-4.5 text-[#B88A5A]" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3B332D]">
                      Acolhimento
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                      Consultas sem pressa, com escuta atenta e empatia.
                    </p>
                  </div>
                </div>

                {/* Diferencial 3: CONFIANÇA */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#E9DFCF]/60 border border-[#E9DFCF] text-[#B88A5A] flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-[#E9DFCF]">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#B88A5A]" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3B332D]">
                      Confiança
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                      Transparência nos diagnósticos e planos de tratamento.
                    </p>
                  </div>
                </div>

                {/* Diferencial 4: COMPLEMENTARIDADE */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#E9DFCF]/60 border border-[#E9DFCF] text-[#B88A5A] flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-[#E9DFCF]">
                    <Sparkles className="w-4.5 h-4.5 text-[#B88A5A]" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3B332D]">
                      Complementaridade
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#3B332D]/80 font-light leading-relaxed">
                      Diferentes áreas de atuação que permitem uma visão mais completa das suas necessidades.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 6. Botão de Navegação para a seção de Especialistas */}
            <div className="pt-1">
              <a
                href="#especialistas"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B88A5A] hover:text-[#3B332D] transition-colors group cursor-pointer"
              >
                <span>CONHEÇA NOSSAS ESPECIALISTAS</span>
                <ArrowRight className="w-4 h-4 text-[#B88A5A] group-hover:text-[#3B332D] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
