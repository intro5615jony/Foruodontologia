import React from 'react';

export const VisualBreak: React.FC = () => {
  return (
    <section className="relative w-full min-h-[460px] md:min-h-[540px] flex items-center justify-center overflow-hidden bg-[#1E1916]">
      {/* Protagonist Wide Photography — Edifício Company Work Station */}
      <img
        src="/assets/company-work-station.png"
        alt="Fachada do edifício Company Work Station, sede da For U Odontologia Especializada no Brooklin"
        className="absolute inset-0 w-full h-full object-cover object-[70%_72%] sm:object-[60%_65%] md:object-[center_60%]"
        loading="lazy"
      />

      {/* Camada escura uniforme semitransparente (rgba(0, 0, 0, 0.55)) para contraste e legibilidade ideais */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
      />

      {/* Content Frame */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center py-16">
        <span className="text-xs sm:text-sm font-semibold tracking-[0.28em] sm:tracking-[0.3em] uppercase text-[#EAD8C3] block mb-3 sm:mb-4 drop-shadow-xs">
          FOR U ODONTOLOGIA ESPECIALIZADA
        </span>
        <blockquote className="font-heading text-2xl sm:text-4xl md:text-5xl text-[#FFFFFF] font-bold leading-[1.25] sm:leading-[1.22] md:leading-[1.2] tracking-tight mb-4 sm:mb-5 drop-shadow-sm">
          "A precisão técnica encontra o acolhimento humano em cada detalhe."
        </blockquote>
        <p className="text-xs sm:text-sm text-[#FFFFFF] uppercase tracking-[0.25em] font-semibold drop-shadow-xs">
          BROOKLIN · SÃO PAULO
        </p>
      </div>
    </section>
  );
};
