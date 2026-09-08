import React from 'react';
import { ArrowUp, Instagram, Phone, MessageSquare, Mail, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerEl = document.getElementById('main-header');
      const headerOffset = headerEl ? (headerEl.offsetHeight > 70 ? 70 : headerEl.offsetHeight) : 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#3B332D] text-[#F7F4EF] border-t border-[#B88A5A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          
          {/* Brand & Regulatory Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/assets/logo/foru-logo-full.svg"
                  alt="For U Odontologia Especializada"
                  className="w-full h-full object-contain filter drop-shadow-xs"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <span className="font-heading text-lg tracking-tight leading-none font-medium text-[#F7F4EF]">
                  For U
                </span>
                <span className="block text-[9px] tracking-[0.25em] font-semibold uppercase mt-0.5 text-[#D4B88A]">
                  Odontologia Especializada
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E9DFCF]/80 font-light leading-relaxed max-w-sm">
              Odontologia feita com precisão. Cuidado feito para você. Um espaço acolhedor com especialidades integradas para a sua saúde e harmonia do sorriso.
            </p>

            {/* Endereço Confirmado */}
            <div className="text-xs text-[#E9DFCF]/80 font-light space-y-0.5">
              <p className="font-medium text-[#F7F4EF]">Rua Barão do Triunfo, 88 — sala/conjunto 406</p>
              <p>Brooklin — São Paulo/SP</p>
              <p className="text-[11px] text-[#E9DFCF]/60">CEP 04602-000</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-[#D4B88A]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-[#E9DFCF]/80">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="hover:text-[#D4B88A] transition-colors py-1 inline-block"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#a-clinica"
                  onClick={(e) => handleNavClick(e, '#a-clinica')}
                  className="hover:text-[#D4B88A] transition-colors py-1 inline-block"
                >
                  A Clínica
                </a>
              </li>
              <li>
                <a
                  href="#especialistas"
                  onClick={(e) => handleNavClick(e, '#especialistas')}
                  className="hover:text-[#D4B88A] transition-colors py-1 inline-block"
                >
                  Especialistas
                </a>
              </li>
              <li>
                <a
                  href="#tratamentos"
                  onClick={(e) => handleNavClick(e, '#tratamentos')}
                  className="hover:text-[#D4B88A] transition-colors py-1 inline-block"
                >
                  Tratamentos
                </a>
              </li>
              <li>
                <a
                  href="#avaliacoes"
                  onClick={(e) => handleNavClick(e, '#avaliacoes')}
                  className="hover:text-[#D4B88A] transition-colors py-1 inline-block"
                >
                  Avaliações
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="hover:text-[#D4B88A] transition-colors py-1 inline-block"
                >
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Separated Landlines vs WhatsApp) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-[#D4B88A]">
              Contato & Horários
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-light text-[#E9DFCF]/80">
              {/* Telefones Fixos */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4B88A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#E9DFCF]/60 block uppercase font-medium">Telefone</span>
                  <div className="flex flex-col gap-0.5">
                    <a href={CLINIC_INFO.landlineTel} className="hover:text-[#D4B88A] transition-colors py-0.5 inline-block text-sm font-medium">
                      {CLINIC_INFO.landlinePhone}
                    </a>
                    <a href={CLINIC_INFO.landlineTelSecondary} className="hover:text-[#D4B88A] transition-colors py-0.5 inline-block text-sm font-medium">
                      {CLINIC_INFO.landlinePhoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#D4B88A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#E9DFCF]/60 block uppercase font-medium">WhatsApp</span>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4B88A] transition-colors py-0.5 inline-block text-sm font-medium"
                  >
                    {CLINIC_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4B88A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#E9DFCF]/60 block uppercase font-medium">E-mail</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-[#D4B88A] transition-colors py-0.5 inline-block text-xs sm:text-sm break-all">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4B88A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-[#E9DFCF]/60 block uppercase font-medium">Horários</span>
                  <p className="text-xs">{CLINIC_INFO.hours.weekdays}</p>
                  <p className="text-xs">{CLINIC_INFO.hours.saturday}</p>
                </div>
              </div>

              {/* Pagamento e Convênios */}
              <div className="pt-2 border-t border-[#D4B88A]/15 text-[11px] space-y-0.5 text-[#E9DFCF]/70">
                <p><span className="text-[#D4B88A]">Pagamento:</span> {CLINIC_INFO.paymentMethods}</p>
                <p><span className="text-[#D4B88A]">Convênios:</span> {CLINIC_INFO.insurance}</p>
              </div>
            </div>
          </div>

          {/* Action & Social Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-[#D4B88A] mb-3">
                Instagram
              </h4>
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram For U Odontologia Especializada"
                className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#F7F4EF]/10 border border-[#D4B88A]/40 text-[#D4B88A] hover:bg-[#B88A5A] hover:text-[#F7F4EF] transition-all text-xs font-medium shadow-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4B88A] hover:text-[#F7F4EF] transition-colors cursor-pointer py-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Voltar ao Topo</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-[#B88A5A]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#E9DFCF]/60">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#E9DFCF]/50">
            Conforme as normas do Conselho Federal de Odontologia (CFO).
          </p>
        </div>

      </div>
    </footer>
  );
};
