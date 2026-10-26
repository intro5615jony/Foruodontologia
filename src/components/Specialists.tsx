import React, { useState } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { SPECIALISTS } from '../data';
import { Specialist } from '../types';

interface SpecialistsProps {
  onSelectDoctor: (doctorName: string) => void;
}

interface SpecialistPhotoProps {
  src: string;
  alt: string;
  objectPosition?: string;
  aspectClassName: string;
  containerClassName?: string;
  imageClassName?: string;
}

const SpecialistPhoto: React.FC<SpecialistPhotoProps> = ({
  src,
  alt,
  objectPosition,
  aspectClassName,
  containerClassName = '',
  imageClassName = '',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] ${aspectClassName} ${containerClassName}`}
    >
      {/* Fundo neutro e discreto enquanto a fotografia real não estiver disponível */}
      {(!imageLoaded || imageError) && (
        <div className="absolute inset-0 bg-[#EFEAE2] flex flex-col items-center justify-end p-5 pb-6 text-center select-none">
          <div className="w-8 h-[1px] bg-[#D4B88A]/60 mb-2.5" />
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#8C7A6B] uppercase">
            FOTOGRAFIA PROFISSIONAL EM BREVE
          </span>
        </div>
      )}

      {/* Imagem real */}
      {!imageError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageClassName}`}
          style={{ objectPosition: objectPosition || '50% 18%' }}
          loading="lazy"
        />
      )}

      {/* Gradiente sutil inferior exibido somente quando a imagem real estiver carregada */}
      {imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B332D]/40 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export const Specialists: React.FC<SpecialistsProps> = ({ onSelectDoctor }) => {
  return (
    <section
      id="especialistas"
      className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-20 py-20 sm:py-28 lg:py-36 bg-[#F7F4EF] text-[#3B332D] border-t border-[#E9DFCF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28 lg:mb-36">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B88A5A] uppercase block mb-3">
            Corpo Clínico
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#3B332D] font-normal leading-[1.18] tracking-tight mb-4 sm:mb-6">
            Conheça as Especialistas
          </h2>
          <p className="text-[#3B332D]/80 text-base sm:text-lg font-light leading-relaxed">
            Três cirurgiãs-dentistas com formações complementares, unidas para proporcionar um atendimento ético, acolhedor e dedicado.
          </p>
        </div>

        {/* Individual Presentations on HOME: Equal visual weight for all three */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-40">
          {SPECIALISTS.map((specialist: Specialist, index: number) => {
            const isPhotoLeft = index % 2 === 0;

            return (
              <div
                key={specialist.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center"
              >
                {/* Large Portrait Column */}
                <div
                  className={`lg:col-span-5 w-full ${
                    !isPhotoLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="w-full max-w-xs sm:max-w-md mx-auto lg:max-w-none group">
                    <SpecialistPhoto
                      src={specialist.image}
                      alt={`${specialist.name} - Cirurgiã-Dentista`}
                      objectPosition={specialist.objectPosition || '50% 18%'}
                      aspectClassName="aspect-[4/5] rounded-2xl shadow-xs"
                      imageClassName="transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>

                {/* Editorial Information Column: Resumed Home Presentation */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    !isPhotoLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="max-w-xl lg:max-w-2xl">
                    {/* 1. Nome da Profissional */}
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2.35rem] text-[#3B332D] font-normal leading-tight mb-2">
                      {specialist.name}
                    </h3>

                    {/* 2. CROSP & Função */}
                    <p className="text-xs sm:text-[13px] font-medium text-[#B88A5A] tracking-wider uppercase mb-3.5 sm:mb-4">
                      {specialist.cro} • Cirurgiã-Dentista
                    </p>

                    {/* 3. Formação (apenas uma linha, com ícone de graduação) */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3B332D]/90 mb-4 sm:mb-5 font-normal">
                      <GraduationCap className="w-4 h-4 text-[#B88A5A] shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-medium text-[#3B332D]">Formação:</strong> {specialist.curriculum}
                      </span>
                    </div>

                    {/* 4. Descrição Profissional */}
                    <p className="text-sm sm:text-base lg:text-lg text-[#3B332D]/80 font-light leading-relaxed mb-5 sm:mb-6">
                      {specialist.bio}
                    </p>

                    {/* 5. Áreas de Atuação */}
                    <div className="mb-6 sm:mb-7 pt-1">
                      <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#3B332D]/60 font-semibold block mb-2 sm:mb-2.5">
                        Áreas de Atuação:
                      </span>
                      <div className="flex flex-wrap items-center gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-[#3B332D]/85 font-normal">
                        {specialist.highlights.map((highlight, idx) => (
                          <React.Fragment key={highlight}>
                            {idx > 0 && (
                              <span className="mx-2 sm:mx-2.5 text-[#D4B88A] select-none text-xs">
                                •
                              </span>
                            )}
                            <span className="hover:text-[#B88A5A] transition-colors">
                              {highlight}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* 6. CTA Exclusivo: Agendar Consulta (direciona para o formulário pré-preenchido) */}
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => onSelectDoctor(specialist.name)}
                        className="btn-primary text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-full inline-flex items-center gap-2 cursor-pointer shadow-2xs hover:bg-[#3B332D] transition-colors"
                        aria-label={`Agendar consulta com ${specialist.name}`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Agendar Consulta</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
