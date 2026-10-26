import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Calendar, Check, Navigation, AlertCircle } from 'lucide-react';
import {
  CLINIC_INFO,
  TREATMENTS,
  SPECIALISTS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
  normalizeDoctorName,
  getDoctorBookingNote,
  atualizarObservacaoProfissional,
  montarMensagemAgendamento,
  enviarAgendamentoWhatsApp,
} from '../data';

interface BookingContactProps {
  initialTreatment?: string;
  initialSpecialist?: string;
  doctorSelection?: { doctorName: string; timestamp: number } | null;
  treatmentSelection?: { treatmentTitle: string; timestamp: number } | null;
}

export const BookingContact: React.FC<BookingContactProps> = ({
  initialTreatment = '',
  initialSpecialist = '',
  doctorSelection,
  treatmentSelection,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: initialTreatment,
    preferredDoctor: initialSpecialist ? normalizeDoctorName(initialSpecialist) : '',
    preferredDate: '',
    preferredTime: 'A combinar',
    notes: initialSpecialist ? getDoctorBookingNote(initialSpecialist) : '',
  });

  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Identifica profissional selecionada na seção Especialistas, preenche campos e rola suavemente
  useEffect(() => {
    if (!doctorSelection || !doctorSelection.doctorName) return;

    const doctorName = normalizeDoctorName(doctorSelection.doctorName);
    const msg = getDoctorBookingNote(doctorName);

    setFormData((prev) => ({
      ...prev,
      preferredDoctor: doctorName,
      notes: atualizarObservacaoProfissional(prev.notes, msg),
    }));

    // Rolagem suave até o formulário com compensação da altura do cabeçalho fixo
    const timer = setTimeout(() => {
      const el = document.getElementById('formulario-agendamento') || document.getElementById('contato');
      if (el) {
        const headerEl = document.getElementById('main-header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 20);

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [doctorSelection]);

  // Identifica tratamento selecionado na seção Tratamentos, preenche campo e rola suavemente
  useEffect(() => {
    if (!treatmentSelection || !treatmentSelection.treatmentTitle) return;

    setFormData((prev) => ({
      ...prev,
      treatment: treatmentSelection.treatmentTitle,
    }));

    // Rolagem suave até o formulário com compensação da altura do cabeçalho fixo
    const timer = setTimeout(() => {
      const el = document.getElementById('formulario-agendamento') || document.getElementById('contato');
      if (el) {
        const headerEl = document.getElementById('main-header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 20);

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [treatmentSelection]);

  // Atualização manual da profissional na lista suspensa do formulário
  const handleDoctorChange = (selectedDoc: string) => {
    setFormData((prev) => {
      let nextNotes = prev.notes;
      if (selectedDoc) {
        const docName = normalizeDoctorName(selectedDoc);
        const noteMsg = getDoctorBookingNote(docName);
        nextNotes = atualizarObservacaoProfissional(prev.notes, noteMsg);
      }
      return {
        ...prev,
        preferredDoctor: selectedDoc,
        notes: nextNotes,
      };
    });
  };

  // Envio do formulário de agendamento: validação e abertura do WhatsApp oficial via enviarAgendamentoWhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'Por favor, informe seu nome completo.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Por favor, informe seu telefone ou WhatsApp.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Feedback informativo sem ocultar nem limpar campos (confirmação depende do retorno da clínica)
    setStatusMessage('Abrindo o WhatsApp da For U com sua solicitação pré-preenchida para você revisar e enviar...');

    // Monta a mensagem e abre o WhatsApp com a API URL e URLSearchParams
    enviarAgendamentoWhatsApp(formData, CLINIC_INFO.whatsappRaw);
  };

  const handleWhatsAppDirect = () => {
    const url = getWhatsAppUrl(WHATSAPP_MESSAGES.general);
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
      window.location.href = url;
    }
  };

  return (
    <section
      id="contato"
      className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-20 py-14 sm:py-24 lg:py-32 bg-[#F7F4EF] text-[#3B332D] border-t border-[#E9DFCF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-[#B88A5A] uppercase block mb-2.5 sm:mb-3">
            Agendamento & Contato
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl text-[#3B332D] font-normal leading-[1.2] sm:leading-[1.18] tracking-tight mb-3.5 sm:mb-6">
            Inicie o Cuidado com o Seu Sorriso
          </h2>
          <p className="text-[#3B332D]/80 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Preencha o formulário abaixo para solicitar sua consulta com a especialista de sua preferência ou fale diretamente com a nossa equipe.
          </p>
        </div>

        {/* 12 — AGENDAMENTO & 13 — CONTATO (Two-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          
          {/* Form Column (12 — AGENDAMENTO) */}
          <div className="lg:col-span-7">
            <div
              id="formulario-agendamento"
              className="bg-[#F7F4EF] border border-[#E9DFCF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 sm:scroll-mt-28"
            >
              <h3 className="font-heading text-2xl sm:text-3xl text-[#3B332D] mb-2 font-normal">
                Solicitar Agendamento
              </h3>
              <p className="text-xs sm:text-sm text-[#3B332D]/70 font-light mb-8">
                Preencha os dados abaixo. Ao clicar em solicitar, o WhatsApp da clínica abrirá com todas as informações organizadas para você enviar.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Nome Completo */}
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                    }}
                    className={`w-full min-h-[48px] bg-[#E9DFCF]/30 border rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] placeholder-[#3B332D]/40 outline-hidden transition-colors ${
                      formErrors.name ? 'border-red-400 focus:border-red-500' : 'border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A]'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.name}</span>
                    </p>
                  )}
                </div>

                {/* WhatsApp / Celular & E-mail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                      WhatsApp / Celular *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      placeholder="(11) 90000-0000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                      }}
                      className={`w-full min-h-[48px] bg-[#E9DFCF]/30 border rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] placeholder-[#3B332D]/40 outline-hidden transition-colors ${
                        formErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.phone}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="booking-email" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                      E-mail (opcional)
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] placeholder-[#3B332D]/40 outline-hidden transition-colors"
                    />
                  </div>
                </div>

                {/* Tratamento de Interesse */}
                <div>
                  <label htmlFor="booking-treatment" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                    Tratamento de Interesse
                  </label>
                  <select
                    id="booking-treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="">Selecione o tratamento (opcional)</option>
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                    <option value="Avaliação Geral / Consulta Inicial">Avaliação Geral / Consulta Inicial</option>
                    <option value="Outro procedimento">Outro procedimento</option>
                  </select>
                </div>

                {/* Profissional Desejada */}
                <div>
                  <label htmlFor="booking-doctor" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                    Profissional Desejada
                  </label>
                  <select
                    id="booking-doctor"
                    value={formData.preferredDoctor}
                    onChange={(e) => handleDoctorChange(e.target.value)}
                    className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="">Sem preferência (Primeira disponível)</option>
                    <option value="Dra. Fabiana Monte Callado">Dra. Fabiana Monte Callado</option>
                    <option value="Dra. Roberta dos S. Rodrigues Asselta">Dra. Roberta dos S. Rodrigues Asselta</option>
                    <option value="Dra. Tatiana Sugano">Dra. Tatiana Sugano</option>
                  </select>
                </div>

                {/* Data de Preferência & Horário de Preferência */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-date" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                      Data de Preferência
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] outline-hidden transition-colors cursor-pointer"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-time" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                      Horário de Preferência
                    </label>
                    <select
                      id="booking-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] outline-hidden transition-colors cursor-pointer"
                    >
                      <option value="A combinar">A combinar</option>
                      <option value="Qualquer horário">Qualquer horário</option>
                      <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                      <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                    </select>
                  </div>
                </div>

                {/* Observações */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="booking-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80">
                      Observações ou dúvidas
                    </label>
                    <span className="text-[11px] text-[#3B332D]/50 font-light">
                      Editável livremente
                    </span>
                  </div>
                  <textarea
                    id="booking-notes"
                    rows={4}
                    placeholder="Conte-nos brevemente o que você procura ou se tem alguma necessidade específica..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] placeholder-[#3B332D]/40 outline-hidden transition-colors resize-none"
                  />
                </div>

                {/* Mensagem de status após submissão */}
                {statusMessage && (
                  <div className="p-3.5 rounded-xl bg-[#E9DFCF]/40 border border-[#D4B88A] text-xs text-[#3B332D] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#B88A5A] shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Form CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:flex-1 min-h-[48px] py-3.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Solicitar Agendamento</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="btn-secondary w-full sm:w-auto min-h-[48px] py-3.5 px-6 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#B88A5A]" />
                    <span>Falar no WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* 13 — CONTATO (Canais de Atendimento diretos — Oculto no Mobile, Visível no Desktop) */}
          <div className="hidden lg:block lg:col-span-5 space-y-6">
            <div className="bg-[#F7F4EF] border border-[#E9DFCF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-5 shadow-xs">
              <div>
                <h3 className="font-heading text-2xl text-[#3B332D] font-normal mb-1">
                  Canais de Atendimento
                </h3>
                <p className="text-xs text-[#3B332D]/70 font-light">
                  Escolha o canal de sua preferência para contato direto com nossa equipe.
                </p>
              </div>

              {/* TELEFONE FIXO 1 */}
              <div className="p-3.5 rounded-xl bg-[#E9DFCF]/35 border border-[#E9DFCF] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] border border-[#D4B88A] flex items-center justify-center text-[#B88A5A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#3B332D]/60 font-semibold block">
                    Telefone
                  </span>
                  <a
                    href={CLINIC_INFO.landlineTel}
                    className="text-base sm:text-lg text-[#3B332D] hover:text-[#B88A5A] transition-colors font-medium block"
                  >
                    {CLINIC_INFO.landlinePhone}
                  </a>
                </div>
              </div>

              {/* TELEFONE FIXO 2 */}
              <div className="p-3.5 rounded-xl bg-[#E9DFCF]/35 border border-[#E9DFCF] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] border border-[#D4B88A] flex items-center justify-center text-[#B88A5A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#3B332D]/60 font-semibold block">
                    Telefone
                  </span>
                  <a
                    href={CLINIC_INFO.landlineTelSecondary}
                    className="text-base sm:text-lg text-[#3B332D] hover:text-[#B88A5A] transition-colors font-medium block"
                  >
                    {CLINIC_INFO.landlinePhoneSecondary}
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="p-3.5 rounded-xl bg-[#E9DFCF]/35 border border-[#E9DFCF] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] border border-[#D4B88A] flex items-center justify-center text-[#B88A5A] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#3B332D]/60 font-semibold block">
                    WhatsApp
                  </span>
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-[#3B332D] hover:text-[#B88A5A] transition-colors block font-medium"
                  >
                    {CLINIC_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* E-MAIL */}
              <div className="p-3.5 rounded-xl bg-[#E9DFCF]/35 border border-[#E9DFCF] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] border border-[#D4B88A] flex items-center justify-center text-[#B88A5A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#3B332D]/60 font-semibold block">
                    E-mail
                  </span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-[#3B332D] hover:text-[#B88A5A] transition-colors block truncate"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 14 — LOCALIZAÇÃO (Visite a For U) */}
        <div id="localizacao" className="pt-12 border-t border-[#E9DFCF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo — Informações da Localização */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B88A5A] uppercase block mb-2">
                  Localização
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#3B332D] font-normal leading-tight mb-3">
                  Visite a For U
                </h3>
                <p className="text-sm text-[#3B332D]/80 font-light leading-relaxed">
                  Localizada em um ponto de fácil acesso no Brooklin, em São Paulo, com ambiente acolhedor e infraestrutura moderna para o seu conforto.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#3B332D]/85">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-[#E9DFCF]">
                  <MapPin className="w-5 h-5 text-[#B88A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-[#3B332D] mb-0.5">Endereço</strong>
                    <span className="block font-medium text-[#3B332D]">Rua Barão do Triunfo, 88</span>
                    <span className="block">Sala/Conjunto 406</span>
                    <span className="block">Brooklin — São Paulo/SP</span>
                    <span className="block text-[11px] text-[#3B332D]/60 mt-0.5 font-mono">
                      CEP 04602-000
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-[#E9DFCF]">
                  <Clock className="w-5 h-5 text-[#B88A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-[#3B332D] mb-0.5">Horário de Atendimento</strong>
                    <span className="block">{CLINIC_INFO.hours.weekdays}</span>
                    <span className="block">{CLINIC_INFO.hours.friday}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-[#E9DFCF]">
                  <Navigation className="w-5 h-5 text-[#B88A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-[#3B332D] mb-0.5">Estacionamento & Acesso</strong>
                    <span className="text-xs text-[#3B332D]/75 leading-relaxed block">
                      Estacionamento com manobrista no local, acessibilidade completa e portaria com controle de acesso.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.address.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto min-h-[48px] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>COMO CHEGAR (WAZE)</span>
                </a>
              </div>
            </div>

            {/* Lado Direito — Mapa Google Interativo */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E9DFCF] shadow-xs bg-[#E9DFCF] h-[360px] sm:h-[420px] lg:h-[460px]">
                <iframe
                  title="Localização da Clínica For U Odontologia no Google Maps"
                  src="https://maps.google.com/maps?q=Rua+Bar%C3%A3o+do+Triunfo,+88+-+Brooklin,+S%C3%A3o+Paulo+-+SP,+04602-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(15%) contrast(95%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
