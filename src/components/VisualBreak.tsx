import React from 'react';

export const VisualBreak: React.FC = () => {
  return (
    <section className="relative w-full min-h-[460px] md:min-h-[540px] flex items-center justify-center overflow-hidden bg-[#3B332D]">
      {/* Protagonist Wide Photography */}
      <img
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2400&q=85"
        alt="Ambiente calmo e acolhedor da clínica For U Odontologia Especializada"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.80] contrast-[1.02] saturate-[0.96] filter"
        loading="lazy"
      />

      {/* Subtle Warm Overlay in Palette Tone */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(59, 51, 45, 0.48)' }}
      />

      {/* Content Frame */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center py-16">
        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#D4B88A] block mb-4">
          For U Odontologia Especializada
        </span>
        <blockquote className="font-heading text-2xl sm:text-4xl md:text-5xl text-[#F7F4EF] font-normal leading-snug tracking-tight mb-4">
          "A precisão técnica encontra o acolhimento humano em cada detalhe."
        </blockquote>
        <p className="text-xs sm:text-sm text-[#E9DFCF]/80 uppercase tracking-widest font-light">
          Brooklin • São Paulo
        </p>
      </div>
    </section>
  );
};
