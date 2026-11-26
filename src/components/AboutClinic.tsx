import React from 'react';

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
                alt="Dra. Fabiana, Dra. Roberta e Dra. Tatiana - For U Odontologia Especializada"
                className="w-full h-full object-cover object-top brightness-[1.0] contrast-[1.01]"
                loading="lazy"
              />
              
              {/* Faixa clara, discreta com cantos arredondados e texto centralizado */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 bg-[#F7F4EF]/95 backdrop-blur-md py-3 px-4 rounded-xl border border-[#E9DFCF] shadow-xs text-center">
                <p className="text-xs sm:text-[13px] font-medium text-[#3B332D] leading-tight">
                  Dra. Fabiana • Dra. Roberta • Dra. Tatiana
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
            <div className="space-y-3.5 text-sm sm:text-base text-[#3B332D]/85 font-light leading-relaxed">
              <p>
                A For U Odontologia Especializada nasceu da união de três profissionais que compartilham o mesmo propósito: oferecer uma odontologia pautada na confiança, no acolhimento e no cuidado às necessidades de cada paciente.
              </p>
              <p>
                Com áreas de atuação complementares, as dentistas reúnem conhecimentos e experiências profissionais para oferecer um tratamento odontológico integrado, que valoriza a saúde e o bem-estar em todas as suas dimensões.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
