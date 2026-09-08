import React from 'react';
import { CLINIC_SPACE_PHOTOS } from '../data';

export const ClinicSpace: React.FC = () => {
  const mainPhoto = CLINIC_SPACE_PHOTOS.find(p => p.aspect === 'large') || CLINIC_SPACE_PHOTOS[0];
  const secondaryPhotos = CLINIC_SPACE_PHOTOS.filter(p => p.id !== mainPhoto.id);

  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-[#F7F4EF] text-[#3B332D] border-t border-[#E9DFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-[#B88A5A] uppercase block mb-2.5 sm:mb-3">
            O Espaço Físico
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl text-[#3B332D] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight mb-3 sm:mb-4">
            Um espaço pensado para você.
          </h2>
          <p className="text-[#3B332D]/80 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Ambientes planejados com iluminação suave e acolhimento em cada detalhe, em localização de fácil acesso no Brooklin.
          </p>
        </div>

        {/* Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch mb-8">
          
          {/* Main Large Photo */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] shadow-xs h-full min-h-[260px] sm:min-h-[440px] group">
              <img
                src={mainPhoto.image}
                alt={mainPhoto.title}
                className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.02] saturate-[0.96] transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B332D]/75 via-[#3B332D]/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-[#F7F4EF]">
                <h3 className="font-heading text-lg sm:text-2xl font-normal mb-1">
                  {mainPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E9DFCF]/85 font-light">
                  {mainPhoto.description}
                </p>
                <span className="inline-block text-[9.5px] sm:text-[10px] uppercase tracking-wider text-[#D4B88A] mt-1.5 sm:mt-2 font-medium">
                  Espaço & Acolhimento For U
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Photos Column */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-8 justify-between">
            {secondaryPhotos.slice(0, 2).map((photo) => (
              <div
                key={photo.id}
                className="relative rounded-2xl overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] shadow-xs flex-1 min-h-[180px] sm:min-h-[210px] group"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.02] saturate-[0.96] transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B332D]/70 via-[#3B332D]/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-[#F7F4EF]">
                  <h4 className="font-heading text-base sm:text-lg font-normal mb-0.5">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-[#E9DFCF]/80 font-light">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Tertiary Photo Strip */}
        {secondaryPhotos[2] && (
          <div className="relative rounded-2xl overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3B332D]/70 font-light">
            <p className="font-heading font-normal text-sm text-[#3B332D]">
              "Ambiente planejado para proporcionar tranquilidade desde a recepção até a conclusão do seu tratamento."
            </p>
            <span className="text-[10px] uppercase tracking-wider text-[#B88A5A] font-semibold shrink-0">
              Estrutura acolhedora e moderna
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
