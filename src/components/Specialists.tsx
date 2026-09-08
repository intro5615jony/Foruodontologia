import React, { useState } from 'react';
import { GraduationCap, ArrowRight, X, Calendar, MessageSquare, Check } from 'lucide-react';
import { SPECIALISTS, CLINIC_INFO } from '../data';
import { Specialist } from '../types';

interface SpecialistsProps {
  onOpenBooking?: (doctorName?: string) => void;
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

      {/* Imagem real (carregada quando o arquivo estiver disponível no caminho previsto) */}
      {!imageError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover brightness-[0.98] contrast-[1.02] transition-opacity duration-500 ${
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

export const Specialists: React.FC<SpecialistsProps> = ({ onOpenBooking }) => {
  const [selectedProfile, setSelectedProfile] = useState<Specialist | null>(null);

  const getCtaLabel = (id: string) => {
    switch (id) {
      case 'dra-fabiana':
        return 'Conheça a Dra. Fabiana →';
      case 'dra-roberta':
        return 'Conheça a Dra. Roberta →';
      case 'dra-tatiana':
        return 'Conheça a Dra. Tatiana →';
      default:
        return 'Conheça a Especialista →';
    }
  };

  const handleOpenBookingForDoctor = (doctorName: string) => {
    setSelectedProfile(null);
    if (onOpenBooking) {
      onOpenBooking(doctorName);
    }
  };

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
                      imageClassName="saturate-[0.96] transition-transform duration-700 ease-out group-hover:scale-102"
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

                    {/* 3. Formação (mesma estrutura para as três) */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3B332D]/90 mb-4 sm:mb-5 font-normal">
                      <GraduationCap className="w-4 h-4 text-[#B88A5A] shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-medium text-[#3B332D]">Formação:</strong> {specialist.curriculum}
                      </span>
                    </div>

                    {/* 4. Texto Resumido */}
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

                    {/* 6. CTA para Perfil Completo */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProfile(specialist)}
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-[#B88A5A] hover:text-[#3B332D] transition-colors py-2 border-b border-[#D4B88A]/50 hover:border-[#3B332D] cursor-pointer min-h-[44px]"
                        aria-label={getCtaLabel(specialist.id)}
                      >
                        <span>{getCtaLabel(specialist.id)}</span>
                        <ArrowRight className="w-4 h-4 text-[#B88A5A] group-hover:text-[#3B332D] transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* MODAL DO PERFIL COMPLETO: CONHEÇA A DRA. */}
      {selectedProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3B332D]/70 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-modal-name"
          onClick={() => setSelectedProfile(null)}
        >
          <div
            className="bg-[#F7F4EF] border border-[#E9DFCF] rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 lg:p-10 relative text-[#3B332D]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProfile(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#E9DFCF]/50 hover:bg-[#E9DFCF] text-[#3B332D] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar perfil"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hierarquia do Perfil Completo:
                1. Fotografia profissional
                2. Nome
                3. CROSP
                4. Cirurgiã-dentista
                5. Breve apresentação
                6. Formação
                7. Áreas de atuação
                8. CTA institucional de contato/agendamento
            */}
            <div className="space-y-6 sm:space-y-7">
              {/* 1. Fotografia profissional */}
              <SpecialistPhoto
                src={selectedProfile.image}
                alt={`${selectedProfile.name} - Cirurgiã-Dentista`}
                objectPosition={selectedProfile.modalObjectPosition || selectedProfile.objectPosition || '50% 20%'}
                aspectClassName="aspect-[16/10] sm:aspect-[2/1] rounded-xl sm:rounded-2xl"
              />

              {/* Informações Editoriais Contínuas (Sem caixas fragmentadas) */}
              <div className="space-y-5">
                {/* 2. Nome */}
                <h3
                  id="profile-modal-name"
                  className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#3B332D] font-normal leading-tight"
                >
                  {selectedProfile.name}
                </h3>

                {/* 3 e 4. CROSP e Cirurgiã-Dentista */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#B88A5A] uppercase tracking-wider">
                  <span>{selectedProfile.cro}</span>
                  <span className="text-[#3B332D]/30">•</span>
                  <span>Cirurgiã-Dentista</span>
                </div>

                {/* 5. Breve apresentação */}
                <p className="text-sm sm:text-base text-[#3B332D]/85 font-light leading-relaxed">
                  {selectedProfile.bio}
                </p>

                {/* 6. Formação */}
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#3B332D]/60 font-semibold block mb-1">
                    Formação:
                  </span>
                  <p className="text-sm sm:text-base text-[#3B332D]/90 font-normal">
                    {selectedProfile.curriculum}
                  </p>
                </div>

                {/* 7. Áreas de Atuação */}
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#3B332D]/60 font-semibold block mb-2.5">
                    Áreas de Atuação:
                  </span>
                  <ul className="space-y-2">
                    {selectedProfile.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm sm:text-base text-[#3B332D]/90 font-light"
                      >
                        <Check className="w-4 h-4 text-[#B88A5A] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 8. CTA institucional de contato/agendamento */}
              <div className="pt-6 border-t border-[#E9DFCF] space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenBookingForDoctor(selectedProfile.name)}
                    className="flex-1 min-h-[48px] px-6 py-3 rounded-full bg-[#B88A5A] hover:bg-[#A37848] text-[#F7F4EF] font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar Consulta</span>
                  </button>

                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[48px] px-6 py-3 rounded-full border border-[#D4B88A] hover:bg-[#E9DFCF]/40 text-[#3B332D] font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#B88A5A]" />
                    <span>WhatsApp da Clínica</span>
                  </a>
                </div>

                  <p className="text-center text-[11px] text-[#3B332D]/60 font-light">
                  Para contato e agendamento, o atendimento é realizado exclusivamente pelos canais gerais da For U Odontologia Especializada.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
