import React, { useState } from 'react';
import {
  Anchor,
  Layers,
  Sparkles,
  Sun,
  Smile,
  SmilePlus,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { SPECIALTY_BAR_ITEMS } from '../data';

interface SpecialtiesBarProps {
  onSelectTreatment?: (treatmentId: string) => void;
}

export const SpecialtiesBar: React.FC<SpecialtiesBarProps> = ({ onSelectTreatment }) => {
  const getIcon = (iconName: string) => {
    const iconClass = 'w-5 h-5 text-[#B88A5A] transition-colors duration-200 group-hover:text-[#3B332D]';
    switch (iconName) {
      case 'Anchor':
        return <Anchor className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Sun':
        return <Sun className={iconClass} />;
      case 'Smile':
        return <Smile className={iconClass} />;
      case 'SmilePlus':
        return <SmilePlus className={iconClass} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  const handleItemClick = (treatmentId?: string) => {
    if (treatmentId && onSelectTreatment) {
      onSelectTreatment(treatmentId);
    }
    const treatmentsSection = document.getElementById('tratamentos');
    if (treatmentsSection) {
      const headerEl = document.getElementById('main-header');
      const offset = headerEl ? headerEl.offsetHeight + 10 : 75;
      const topPos = treatmentsSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const displayedMobileItems = isExpanded
    ? SPECIALTY_BAR_ITEMS
    : SPECIALTY_BAR_ITEMS.slice(0, 4);

  return (
    <nav
      aria-label="Nossas Especialidades"
      className="relative z-30 bg-[#F7F4EF] border-b border-[#E9DFCF] shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        
        {/* =========================================================================
            VERSÃO MOBILE EXCLUSIVA (< 640px)
            Lista vertical compacta, elegante e sem rolagem horizontal
           ========================================================================= */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between mb-3 px-0.5">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#B88A5A] uppercase">
              Especialidades Principais
            </span>
            <span className="text-[10px] text-[#3B332D]/60 font-medium">
              {isExpanded ? `${SPECIALTY_BAR_ITEMS.length} especialidades` : `4 de ${SPECIALTY_BAR_ITEMS.length}`}
            </span>
          </div>

          <div className="space-y-2" role="list">
            {displayedMobileItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.treatmentId)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#E9DFCF] hover:border-[#B88A5A] hover:bg-white active:bg-[#E9DFCF]/50 transition-all text-left shadow-2xs group cursor-pointer"
                title={`Ver tratamento de ${item.title}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#F7F4EF] border border-[#E9DFCF] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-[#3B332D] group-hover:text-[#B88A5A] transition-colors leading-tight truncate">
                      {item.title}
                    </span>
                    <span className="block text-[10px] text-[#3B332D]/60 tracking-wider uppercase font-light mt-0.5 truncate">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="pl-2 shrink-0">
                  <ChevronRight className="w-4 h-4 text-[#B88A5A] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>

          {/* Botão de Expansão Vertical no Mobile */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2.5 py-2.5 px-4 rounded-xl border border-[#D4B88A] bg-[#FAF8F5]/80 hover:bg-[#E9DFCF]/40 active:bg-[#E9DFCF] text-xs uppercase tracking-wider font-semibold text-[#B88A5A] hover:text-[#3B332D] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <span>{isExpanded ? 'VER MENOS ESPECIALIDADES' : 'VER TODAS AS ESPECIALIDADES'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* =========================================================================
            VERSÃO DESKTOP & TABLET (>= 640px) — PRESERVADA INTEGRALMENTE
            Cards horizontais com snap e navegação tátil / mouse
           ========================================================================= */}
        <div 
          className="hidden sm:flex items-stretch overflow-x-auto no-scrollbar gap-2.5 sm:gap-3 md:gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory touch-pan-x"
          role="region"
          aria-label="Carrossel de especialidades"
        >
          {SPECIALTY_BAR_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleItemClick(item.treatmentId)}
              className="group flex-1 min-w-[138px] sm:min-w-0 shrink-0 sm:shrink snap-start py-3 px-3 sm:py-3.5 sm:px-3.5 rounded-xl bg-[#E9DFCF]/40 hover:bg-[#E9DFCF] border border-[#E9DFCF] hover:border-[#D4B88A] transition-all duration-200 flex flex-col items-center text-center justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#B88A5A]"
              title={`Ver tratamento de ${item.title}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#F7F4EF] border border-[#E9DFCF] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform duration-200 shadow-2xs shrink-0">
                {getIcon(item.iconName)}
              </div>
              <div className="w-full">
                <span className="block text-xs sm:text-sm font-medium text-[#3B332D] leading-tight group-hover:text-[#B88A5A] transition-colors">
                  {item.title}
                </span>
                <span className="block text-[10px] text-[#3B332D]/60 tracking-wider uppercase font-light mt-1 truncate">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
};
