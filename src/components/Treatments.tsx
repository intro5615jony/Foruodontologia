import React, { useState } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import { TREATMENTS } from '../data';
import { TreatmentCategory, TreatmentItem } from '../types';

interface TreatmentsProps {
  onOpenBooking: (treatmentTitle?: string) => void;
  selectedTreatmentId?: string;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');
  const [modalTreatment, setModalTreatment] = useState<TreatmentItem | null>(null);

  const categories: { id: TreatmentCategory; label: string }[] = [
    { id: 'all', label: 'Todos os Tratamentos' },
    { id: 'estetica', label: 'Estética & Harmonia' },
    { id: 'reabilitacao', label: 'Reabilitação & Implantes' },
    { id: 'ortodontia', label: 'Ortodontia' },
    { id: 'prevencao', label: 'Prevenção & Saúde' },
  ];

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section
      id="tratamentos"
      className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-20 py-20 sm:py-28 lg:py-36 bg-[#F7F4EF] text-[#3B332D] border-t border-[#E9DFCF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B88A5A] uppercase block mb-3">
              Tratamentos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#3B332D] font-normal leading-[1.18] tracking-tight">
              Cuidado Completo e Integrado
            </h2>
          </div>
          <p className="text-[#3B332D]/80 text-sm sm:text-base font-light max-w-md">
            Soluções personalizadas para a saúde, função mastigatória e harmonia do seu sorriso, com planejamento transparente.
          </p>
        </div>

        {/* Lighter, Editorial Category Filters */}
        {/* Category Navigation Bar — scroll horizontal suave no mobile, centralizado no desktop */}
        <div
          className="flex items-center overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 sm:gap-2.5 pb-2 sm:pb-0 mb-10 sm:mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth touch-pan-x"
          role="tablist"
          aria-label="Categorias de tratamentos"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] flex items-center justify-center ${
                  isActive
                    ? 'bg-[#B88A5A] text-[#F7F4EF] font-semibold shadow-2xs'
                    : 'text-[#3B332D]/70 hover:text-[#3B332D] hover:bg-[#E9DFCF]/50 font-normal bg-[#E9DFCF]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Treatments Grid — 1 por linha no mobile (grid-cols-1), 2 no tablet (md:grid-cols-2), 3 no desktop (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-12 sm:gap-y-16 lg:gap-y-20 items-stretch">
          {filteredTreatments.map((treatment) => (
            <article
              key={treatment.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* 1. FOTOGRAFIA (Protagonista visual, proporção consistente aspect-[4/3], cantos discretos) */}
                <div
                  onClick={() => setModalTreatment(treatment)}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#E9DFCF] border border-[#E9DFCF]/80 cursor-pointer mb-4 sm:mb-6"
                >
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.02] saturate-[0.96] transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#3B332D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* 2. PEQUENA CATEGORIA (Discreta, em dourado/caramelo) */}
                <div className="mb-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B88A5A]">
                    {treatment.highlightTag}
                  </span>
                </div>

                {/* 3. NOME DO TRATAMENTO (Maior destaque tipográfico) */}
                <h3
                  onClick={() => setModalTreatment(treatment)}
                  className="font-heading text-xl sm:text-2xl lg:text-[26px] text-[#3B332D] font-medium leading-snug tracking-tight mb-2.5 group-hover:text-[#B88A5A] transition-colors cursor-pointer"
                >
                  {treatment.title}
                </h3>

                {/* 4. RESUMO DO TRATAMENTO (Visualmente secundária, legível) */}
                <p className="text-sm text-[#3B332D]/75 font-light leading-relaxed mb-3 sm:mb-4">
                  {treatment.shortDescription}
                </p>

                {/* 5. INDICAÇÕES OU BENEFÍCIOS PRINCIPAIS */}
                {((treatment.indications && treatment.indications.length > 0) || (treatment.benefits && treatment.benefits.length > 0)) && (
                  <div className="mb-4 text-xs text-[#3B332D]/70 font-light">
                    <span className="font-medium text-[#3B332D]/85">Indicações: </span>
                    <span>
                      {(treatment.indications || treatment.benefits).slice(0, 2).join(' • ')}
                    </span>
                  </div>
                )}
              </div>

              {/* 6. AÇÕES: Saber mais / Agendar */}
              <div className="pt-2 mt-auto flex items-center justify-between border-t border-[#E9DFCF]/60 pt-3">
                <button
                  type="button"
                  onClick={() => setModalTreatment(treatment)}
                  className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#B88A5A] hover:text-[#3B332D] transition-colors py-1.5 cursor-pointer min-h-[44px]"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B88A5A] group-hover/btn:text-[#3B332D] group-hover/btn:translate-x-1 transition-all" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenBooking(treatment.title)}
                  className="text-xs uppercase tracking-wider text-[#3B332D]/85 hover:text-[#B88A5A] font-medium py-1.5 px-3 rounded-lg hover:bg-[#E9DFCF]/50 transition-colors min-h-[44px] flex items-center cursor-pointer"
                >
                  Agendar
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal Conheça o Tratamento */}
      {modalTreatment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B332D]/70 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#F7F4EF] border border-[#E9DFCF] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            <button
              type="button"
              onClick={() => setModalTreatment(null)}
              className="absolute top-5 right-5 text-[#3B332D]/60 hover:text-[#3B332D] p-2 rounded-full hover:bg-[#E9DFCF]/60 transition-colors cursor-pointer"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold tracking-widest text-[#B88A5A] uppercase block mb-1">
              {modalTreatment.highlightTag}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#3B332D] font-normal mb-2">
              {modalTreatment.title}
            </h3>
            <p className="text-xs text-[#B88A5A] uppercase tracking-wider font-medium mb-4">
              {modalTreatment.subtitle}
            </p>

            <p className="text-sm text-[#3B332D]/85 font-light leading-relaxed mb-6">
              {modalTreatment.fullDescription}
            </p>

            <div className="space-y-2 border-t border-[#E9DFCF] pt-4 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#3B332D]/70 font-semibold block">
                Principais Cuidados:
              </span>
              <ul className="space-y-2">
                {modalTreatment.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#3B332D]/80">
                    <Check className="w-3.5 h-3.5 text-[#B88A5A] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  const title = modalTreatment.title;
                  setModalTreatment(null);
                  onOpenBooking(title);
                }}
                className="btn-primary w-full py-3 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Avaliação para {modalTreatment.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
