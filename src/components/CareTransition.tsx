import React from 'react';

interface CareTransitionProps {
  onOpenBooking: () => void;
}

export const CareTransition: React.FC<CareTransitionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      aria-label="Cuidado Integrado For U"
      className="relative w-full min-h-[460px] sm:min-h-[600px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#3B332D]"
    >
      {/* 1. Protagonist Wide Photography */}
      <img
        src="/assets/hero/DOUTORAS2-1.jpg"
        alt="Ambiente e equipe For U Odontologia Especializada"
        className="absolute inset-0 w-full h-full object-cover object-[center_25%] brightness-[0.72] contrast-[1.02] saturate-[0.96] filter"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* 2. Flat Warm Dark Overlay (Garante contraste e legibilidade sem degradê) */}
      <div
        className="absolute inset-0 z-10 bg-[#3B332D]/60"
        aria-hidden="true"
      />

      {/* 3. Editorial Content Frame */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-16 sm:py-28 lg:py-36">
        
        {/* Subtítulo Institucional */}
        <span className="inline-block text-[10.5px] sm:text-xs font-medium uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#D4B88A] mb-5 sm:mb-8">
          For U Odontologia Especializada
        </span>

        {/* Mensagem Principal */}
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#F7F4EF] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight mb-5 sm:mb-8 max-w-3xl mx-auto">
          Seu sorriso merece um cuidado pensado por inteiro.
        </h2>

        {/* Mensagem Complementar */}
        <p className="text-sm sm:text-lg md:text-xl text-[#F7F4EF]/90 font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
          Na For U, diferentes especialidades se encontram para oferecer um cuidado próximo, integrado e pensado para você.
        </p>

        {/* CTA Principal Único */}
        <div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="btn-primary w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold inline-flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all"
          >
            Agendar uma Avaliação
          </button>
        </div>

      </div>
    </section>
  );
};
