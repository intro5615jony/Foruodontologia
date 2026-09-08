import React from 'react';
import {
  Anchor,
  Layers,
  Sparkles,
  Sun,
  Smile,
  SmilePlus,
  ShieldCheck,
  ChevronRight,
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

  return (
    <nav
      aria-label="Nossas Especialidades"
      className="relative z-30 bg-[#F7F4EF] border-b border-[#E9DFCF] shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5">
        
        {/* Title bar on small screens indicating scrollability */}
        <div className="flex sm:hidden items-center justify-between mb-2 px-1 text-[11px] uppercase tracking-widest text-[#B88A5A] font-medium">
          <span>Especialidades Principais</span>
          <span className="flex items-center text-[10px] text-[#3B332D]/60 normal-case tracking-normal">
            Deslize para ver todas <ChevronRight className="w-3 h-3 ml-0.5" />
          </span>
        </div>

        {/* Horizontal Navigation List com Snap e Scroll por Toque Suave */}
        <div 
          className="flex items-stretch overflow-x-auto no-scrollbar gap-2.5 sm:gap-3 md:gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory touch-pan-x"
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
