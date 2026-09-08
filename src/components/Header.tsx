import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageSquare, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface HeaderProps {
  onOpenBooking: (treatment?: string) => void;
  activeSection: string;
  onSelectSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, activeSection, onSelectSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueio de rolagem da página quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'A Clínica', href: '#a-clinica', id: 'a-clinica' },
    { label: 'Especialistas', href: '#especialistas', id: 'especialistas' },
    { label: 'Tratamentos', href: '#tratamentos', id: 'tratamentos' },
    { label: 'Avaliações', href: '#avaliacoes', id: 'avaliacoes' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onSelectSection) {
      onSelectSection(id);
    }
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EF]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#E9DFCF] shadow-xs'
          : 'bg-[#3B332D]/60 sm:bg-[#3B332D]/40 backdrop-blur-xs sm:bg-transparent py-3 sm:py-4.5'
      }`}
    >
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between gap-4 lg:gap-8 xl:gap-10">
          {/* 1. ESQUERDA: Logo Oficial For U Odontologia Especializada (Maior presença e sem texto separado) */}
          <div className="flex items-center shrink-0">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio', 'inicio')}
              className="group focus:outline-none focus:ring-1 focus:ring-[#B88A5A] rounded-xl p-0.5 transition-transform shrink-0 flex items-center"
              aria-label="For U Odontologia Especializada - Página Inicial"
            >
              <img
                src="/assets/logo/LOGO FOR U.png"
                alt="For U Odontologia Especializada"
                className={`transition-all duration-300 object-contain w-auto select-none ${
                  isScrolled
                    ? 'h-11 sm:h-12 lg:h-13 max-h-13'
                    : 'h-13 sm:h-15 lg:h-[64px] max-h-[68px]'
                }`}
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* 2. CENTRO: Links de Navegação Principal (Visualmente Centralizados e Uniformes) */}
          <nav
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-9 mx-auto"
            aria-label="Navegação Principal"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const linkClass = !isScrolled ? 'nav-link-hero' : 'nav-link';
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`${linkClass} ${isActive ? 'active' : ''} text-[13px] xl:text-[14px] py-1 tracking-wide whitespace-nowrap`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* 3. DIREITA: WhatsApp (Discreto e Separado) + Divisor Sutil + Botão AGENDAR */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            {/* Bloco de Contato Secundário e Discreto */}
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-xs font-normal tracking-normal whitespace-nowrap transition-colors py-1.5 px-3 rounded-full hover:bg-[#B88A5A]/10 ${
                isScrolled ? 'text-[#3B332D]/80 hover:text-[#B88A5A]' : 'text-[#F7F4EF]/85 hover:text-[#D4B88A]'
              }`}
              aria-label="Falar no WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B88A5A] shrink-0 opacity-85" />
              <span className="whitespace-nowrap">{CLINIC_INFO.whatsapp}</span>
            </a>

            {/* Divisor vertical sutil entre o contato e o botão Agendar */}
            <div
              className={`w-[1px] h-4 shrink-0 transition-colors ${
                isScrolled ? 'bg-[#3B332D]/15' : 'bg-[#F7F4EF]/25'
              }`}
              aria-hidden="true"
            />

            {/* Botão AGENDAR com acabamento elegante e espaço ao redor */}
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="btn-primary text-xs uppercase tracking-[0.15em] font-semibold px-5 xl:px-6 py-2.5 shadow-sm whitespace-nowrap shrink-0 ml-1"
              id="header-booking-button"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </button>
          </div>

          {/* Tablet & Mobile Controles (< 1024px): Apenas o ícone de Menu Hamburger à direita */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`min-w-[44px] min-h-[44px] p-2.5 rounded-full focus:outline-none flex items-center justify-center cursor-pointer transition-colors ${
                isScrolled ? 'text-[#3B332D] hover:bg-[#E9DFCF]/40' : 'text-[#F7F4EF] hover:bg-white/15'
              }`}
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Navigation com Transição Suave e Bloqueio de Fundo */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#F7F4EF] border-b border-[#E9DFCF] px-5 sm:px-8 py-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5" aria-label="Navegação móvel">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`text-base font-medium py-3 px-3.5 rounded-xl transition-colors whitespace-nowrap flex items-center justify-between ${
                    isActive ? 'bg-[#E9DFCF]/70 text-[#B88A5A] font-semibold' : 'text-[#3B332D] hover:bg-[#E9DFCF]/35'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B88A5A]" />}
                </a>
              );
            })}

            {/* Ações Mobile: Botão Destacado Agendar + Links WhatsApp e Telefone */}
            <div className="pt-4 mt-3 border-t border-[#E9DFCF] flex flex-col gap-3">
              {/* Botão Destacado: Agendar */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-primary w-full min-h-[48px] py-3.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                id="mobile-menu-booking-cta"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </button>

              {/* Link WhatsApp */}
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-secondary w-full min-h-[46px] py-3 text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                id="mobile-menu-whatsapp-link"
              >
                <MessageSquare className="w-4 h-4 text-[#B88A5A]" />
                <span>Conversar no WhatsApp ({CLINIC_INFO.whatsapp})</span>
              </a>

              {/* Links Telefones Fixos */}
              <div className="flex items-center justify-center gap-2 text-xs text-[#3B332D]/85 min-h-[44px] py-2.5 font-medium">
                <Phone className="w-3.5 h-3.5 text-[#B88A5A] shrink-0" />
                <span>Fixos:</span>
                <a
                  href={CLINIC_INFO.landlineTel}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#B88A5A] underline underline-offset-2 transition-colors"
                  id="mobile-menu-phone-link-1"
                >
                  {CLINIC_INFO.landlinePhone}
                </a>
                <span className="text-[#3B332D]/40">•</span>
                <a
                  href={CLINIC_INFO.landlineTelSecondary}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#B88A5A] underline underline-offset-2 transition-colors"
                  id="mobile-menu-phone-link-2"
                >
                  {CLINIC_INFO.landlinePhoneSecondary}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
