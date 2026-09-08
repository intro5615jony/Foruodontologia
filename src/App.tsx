import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpecialtiesBar } from './components/SpecialtiesBar';
import { AboutClinic } from './components/AboutClinic';
import { WhyForU } from './components/WhyForU';
import { PhilosophyThree } from './components/PhilosophyThree';
import { ClinicSpace } from './components/ClinicSpace';
import { Specialists } from './components/Specialists';
import { VisualBreak } from './components/VisualBreak';
import { Treatments } from './components/Treatments';
import { Testimonials } from './components/Testimonials';
import { CareTransition } from './components/CareTransition';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');
  const [selectedSpecialist, setSelectedSpecialist] = useState<string>('');

  // Robust ScrollSpy to accurately track the active section in view for the header
  useEffect(() => {
    const sectionIds = ['inicio', 'a-clinica', 'especialistas', 'tratamentos', 'avaliacoes', 'contato'];

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const headerEl = document.getElementById('main-header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 70;

      // 1. If at the bottom of the page, activate the last section ('contato')
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection('contato');
        return;
      }

      // 2. If near top, activate 'inicio'
      if (scrollY < 120) {
        setActiveSection('inicio');
        return;
      }

      // 3. Check section positions relative to viewport scroll
      const targetPoint = scrollY + headerHeight + 80;
      let matchedSection = 'inicio';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (targetPoint >= top && targetPoint < top + height) {
            matchedSection = id;
            break;
          } else if (targetPoint >= top) {
            matchedSection = id;
          }
        }
      }

      setActiveSection(matchedSection);
    };

    // Run on initial load
    handleScrollSpy();

    // Listen to scroll events with passive optimization
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    window.addEventListener('resize', handleScrollSpy, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      window.removeEventListener('resize', handleScrollSpy);
    };
  }, []);

  const handleOpenBooking = (itemOrDoctor?: string) => {
    // If the string starts with 'Dra.', treat it as doctor preference, otherwise treatment
    if (itemOrDoctor) {
      if (itemOrDoctor.startsWith('Dra.')) {
        setSelectedSpecialist(itemOrDoctor);
        setSelectedTreatment('');
      } else {
        setSelectedTreatment(itemOrDoctor);
        setSelectedSpecialist('');
      }
    } else {
      setSelectedTreatment('');
      setSelectedSpecialist('');
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#3B332D] flex flex-col selection:bg-[#B88A5A] selection:text-[#F7F4EF]">
      {/* Header with Navigation & ScrollSpy */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      {/* Main Content Sections (One-Page Editorial Architecture) */}
      <main className="flex-1">
        {/* 01 — HERO */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 02 — NOSSAS ESPECIALIDADES (Faixa horizontal minimalista logo abaixo do Hero) */}
        <SpecialtiesBar onSelectTreatment={(treatmentId) => handleOpenBooking(treatmentId)} />

        {/* 03 — NOSSA HISTÓRIA (Sobre a For U - Uma história construída juntas) */}
        <AboutClinic onOpenBooking={() => handleOpenBooking()} />

        {/* 04 — POR QUE FOR U? (Layout dividido com fundo marrom escuro) */}
        <WhyForU onOpenBooking={() => handleOpenBooking()} />

        {/* 10 — AS TRÊS JUNTAS / FILOSOFIA FOR U (Três especialistas. Um cuidado pensado por inteiro) */}
        <PhilosophyThree onOpenBooking={() => handleOpenBooking()} />

        {/* 09 — A CLÍNICA (O Espaço Físico - Mosaico fotográfico editorial) */}
        <ClinicSpace />

        {/* 05 — CONHEÇA AS ESPECIALISTAS (Apresentação individual editorial com peso igual) */}
        <Specialists onOpenBooking={(doctor) => handleOpenBooking(doctor)} />

        {/* 07 — QUEBRA VISUAL / FOTOGRAFIA (Grande fotografia panorâmica como protagonista) */}
        <VisualBreak />

        {/* 06 — TRATAMENTOS (Cards simplificados, sem claims exagerados, modal informativo) */}
        <Treatments onOpenBooking={(treatment) => handleOpenBooking(treatment)} />

        {/* 11 — AVALIAÇÕES (Experiências na For U - Sem fake reviews, placeholders Google) */}
        <Testimonials />

        {/* TRANSIÇÃO VISUAL & EMOCIONAL / CUIDADO INTEGRADO (Fechamento institucional antes do agendamento) */}
        <CareTransition onOpenBooking={() => handleOpenBooking()} />

        {/* 12, 13, 14 — AGENDAMENTO, CONTATO & LOCALIZAÇÃO (Telefone/WhatsApp separados, Visite a For U) */}
        <BookingContact initialTreatment={selectedTreatment} initialSpecialist={selectedSpecialist} />
      </main>

      {/* 15 — RODAPÉ (Dados regulatórios estritos com placeholders e canais separados) */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedTreatment={selectedTreatment}
        selectedSpecialist={selectedSpecialist}
      />

      {/* Discreet Floating WhatsApp Concierge Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#B88A5A] text-[#F7F4EF] p-3.5 rounded-full shadow-xl hover:bg-[#3B332D] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B88A5A] cursor-pointer"
        aria-label="Conversar no WhatsApp com a For U Odontologia Especializada"
        title="Falar no WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
      </a>
    </div>
  );
}
