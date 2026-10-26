import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, MessageSquare, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../data';

interface HeaderProps {
  onOpenBooking: (treatment?: string) => void;
  activeSection: string;
  onSelectSection?: (sectionId: string) => void;
  onSelectTreatment?: (treatmentId: string) => void;
}

// Sincronização centralizada com a fonte única da verdade (TREATMENTS em src/data.ts)
// Nomes idênticos aos cards e ao modal detalhado, ordenados em ordem alfabética (A-Z) para facilidade de navegação
const TREATMENTS_DROPDOWN = [...TREATMENTS]
  .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }))
  .map((t) => ({
    name: t.title,
    id: t.id,
  }));

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  activeSection,
  onSelectSection,
  onSelectTreatment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueio de rolagem do body quando o menu mobile estiver aberto
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

  // Fechar dropdown desktop ao clicar fora ou ao pressionar ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDesktopDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDesktopDropdownOpen(false);
    }, 180);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerEl = document.getElementById('main-header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 10);
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDesktopDropdownOpen(false);
    if (onSelectSection) {
      onSelectSection(id);
    }
    scrollToSection(id);
  };

  const handleTreatmentSelect = (treatmentId: string) => {
    setIsDesktopDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileTreatmentsOpen(false);
    if (onSelectSection) {
      onSelectSection('tratamentos');
    }
    if (onSelectTreatment) {
      onSelectTreatment(treatmentId);
    } else {
      const element = document.getElementById(treatmentId) || document.getElementById('tratamentos');
      if (element) {
        const headerEl = document.getElementById('main-header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 24);
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }
  };

  const navItems = [
    { label: 'Início', href: '#inicio', id: 'inicio', isDropdown: false },
    { label: 'A Clínica', href: '#a-clinica', id: 'a-clinica', isDropdown: false },
    { label: 'Especialistas', href: '#especialistas', id: 'especialistas', isDropdown: false },
    { label: 'Tratamentos', href: '#tratamentos', id: 'tratamentos', isDropdown: true },
    { label: 'Avaliações', href: '#avaliacoes', id: 'avaliacoes', isDropdown: false },
    { label: 'Contato', href: '#contato', id: 'contato', isDropdown: false },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/96 backdrop-blur-md border-b border-[#E9DFCF] shadow-xs transition-all duration-300 ${
        isScrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4 lg:py-4.5'
      }`}
    >
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between gap-4 lg:gap-8 xl:gap-10">
          
          {/* 1. ESQUERDA: Logo Oficial For U Odontologia Especializada (Proporcionalmente ampliado, sem caixas/sombras) */}
          <div className="flex items-center shrink-0">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio', 'inicio')}
              className="focus:outline-none focus:ring-1 focus:ring-[#B88A5A] rounded-xl p-0.5 transition-transform shrink-0 flex items-center"
              aria-label="For U Odontologia Especializada - Página Inicial"
            >
              <img
                src="/assets/logo/LOGO FOR U.png"
                alt="For U Odontologia Especializada"
                className={`transition-all duration-300 object-contain w-auto select-none ${
                  isScrolled
                    ? 'h-13 sm:h-14 lg:h-16 xl:h-[70px] max-h-[72px]'
                    : 'h-14 sm:h-16 lg:h-18 xl:h-[80px] 2xl:h-[84px] max-h-[86px]'
                }`}
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* 2. CENTRO: Links de Navegação Principal com Tratamentos em Dropdown */}
          <nav
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-9 mx-auto"
            aria-label="Navegação Principal"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              if (item.isDropdown) {
                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative group py-2"
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, item.id)}
                        className={`nav-link text-[13.5px] xl:text-[14.5px] py-1 tracking-wide whitespace-nowrap text-[#3B332D] hover:text-[#B88A5A] font-medium transition-colors ${
                          isActive ? 'active' : ''
                        }`}
                        aria-haspopup="true"
                        aria-expanded={isDesktopDropdownOpen}
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
                        }}
                        className="p-1 -ml-0.5 text-[#3B332D]/70 hover:text-[#B88A5A] focus:outline-none transition-colors"
                        aria-label="Alternar menu de tratamentos"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDesktopDropdownOpen ? 'rotate-180 text-[#B88A5A]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Dropdown Menu Desktop */}
                    {isDesktopDropdownOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                        role="menu"
                        aria-label="Lista de tratamentos"
                      >
                        <div className="bg-[#FAF8F5] border border-[#E9DFCF] rounded-2xl shadow-xl shadow-[#3B332D]/8 p-2 backdrop-blur-sm">
                          <div className="flex flex-col gap-0.5">
                            {TREATMENTS_DROPDOWN.map((treatment) => (
                              <button
                                key={treatment.id}
                                type="button"
                                role="menuitem"
                                onClick={() => handleTreatmentSelect(treatment.id)}
                                className="w-full text-left px-3.5 py-2 rounded-xl text-[13px] font-medium text-[#3B332D] hover:text-[#B88A5A] hover:bg-[#E9DFCF]/40 transition-colors cursor-pointer"
                              >
                                {treatment.name}
                              </button>
                            ))}
                          </div>

                          <div className="mt-1.5 pt-1.5 border-t border-[#E9DFCF]/60">
                            <button
                              type="button"
                              onClick={() => {
                                setIsDesktopDropdownOpen(false);
                                scrollToSection('tratamentos');
                              }}
                              className="w-full text-center py-1.5 text-xs font-semibold text-[#B88A5A] hover:text-[#3B332D] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>Ver todos na página</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`nav-link text-[13.5px] xl:text-[14.5px] py-1 tracking-wide whitespace-nowrap text-[#3B332D] hover:text-[#B88A5A] font-medium transition-colors ${
                    isActive ? 'active' : ''
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* 3. DIREITA: WhatsApp Oficial + Divisor Sutil + Botão AGENDAR */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            {/* Bloco de Contato WhatsApp Discreto */}
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-normal tracking-normal whitespace-nowrap transition-colors py-1.5 px-3 rounded-full text-[#3B332D]/85 hover:text-[#B88A5A] hover:bg-[#E9DFCF]/30"
              aria-label="Falar no WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B88A5A] shrink-0" />
              <span className="whitespace-nowrap font-medium">{CLINIC_INFO.whatsapp}</span>
            </a>

            {/* Divisor vertical sutil entre o contato e o botão Agendar */}
            <div
              className="w-[1px] h-4 shrink-0 bg-[#3B332D]/15"
              aria-hidden="true"
            />

            {/* Botão AGENDAR com acabamento elegante e bronze oficial */}
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-[0.14em] font-semibold px-5 xl:px-6 py-2.5 shadow-xs whitespace-nowrap shrink-0 ml-1 hover:bg-[#3B332D] hover:border-[#3B332D] transition-colors cursor-pointer inline-flex items-center gap-2"
              id="header-booking-button"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </a>
          </div>

          {/* Mobile & Tablet Controles (< 1024px): Botão Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-full focus:outline-none flex items-center justify-center cursor-pointer transition-colors text-[#3B332D] hover:bg-[#E9DFCF]/40"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Navigation com Acordeão de Tratamentos */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#E9DFCF] px-5 sm:px-8 py-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5" aria-label="Navegação móvel">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              if (item.isDropdown) {
                return (
                  <div key={item.id} className="flex flex-col">
                    <div
                      className={`text-base font-medium py-3 px-3.5 rounded-xl transition-colors flex items-center justify-between cursor-pointer ${
                        isActive ? 'bg-[#E9DFCF]/70 text-[#B88A5A] font-semibold' : 'text-[#3B332D] hover:bg-[#E9DFCF]/35'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => handleNavClick(e as any, item.href, item.id)}
                        className="text-left flex-1"
                      >
                        {item.label}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                        className="p-1 text-[#3B332D]/70 hover:text-[#B88A5A] transition-colors"
                        aria-label="Abrir lista de tratamentos"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileTreatmentsOpen ? 'rotate-180 text-[#B88A5A]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu Móvel de Tratamentos */}
                    {isMobileTreatmentsOpen && (
                      <div className="ml-3 pl-3 my-1 border-l-2 border-[#E9DFCF] flex flex-col space-y-1 animate-in fade-in duration-150">
                        {TREATMENTS_DROPDOWN.map((treatment) => (
                          <button
                            key={treatment.id}
                            type="button"
                            onClick={() => handleTreatmentSelect(treatment.id)}
                            className="text-left text-sm py-2 px-3 rounded-lg text-[#3B332D]/85 hover:text-[#B88A5A] hover:bg-[#E9DFCF]/35 transition-colors"
                          >
                            {treatment.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

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

            {/* Ações Mobile: Botão Destacado Agendar + Links WhatsApp e Telefones */}
            <div className="pt-4 mt-3 border-t border-[#E9DFCF] flex flex-col gap-3">
              {/* Botão Destacado: Agendar */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full min-h-[48px] py-3.5 px-4 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                id="mobile-menu-booking-cta"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>AGENDAR CONSULTA</span>
              </a>

              {/* Link WhatsApp */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-secondary w-full min-h-[46px] py-3 px-4 text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer font-semibold"
                id="mobile-menu-whatsapp-link"
              >
                <MessageSquare className="w-4 h-4 text-[#B88A5A] shrink-0" />
                <span>CONVERSAR NO WHATSAPP</span>
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
