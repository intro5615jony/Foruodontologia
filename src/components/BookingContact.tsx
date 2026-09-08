import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Calendar, CheckCircle2, Navigation, Send, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS, SPECIALISTS } from '../data';

interface BookingContactProps {
  initialTreatment?: string;
  initialSpecialist?: string;
}

export const BookingContact: React.FC<BookingContactProps> = ({
  initialTreatment = '',
  initialSpecialist = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: initialTreatment,
    preferredDoctor: initialSpecialist,
    preferredShift: 'qualquer',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    if (!formData.name && !formData.treatment && !formData.preferredDoctor && !formData.notes && formData.preferredShift === 'qualquer') {
      window.open(
        `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`,
        '_blank'
      );
      return;
    }

    const shiftLabel =
      formData.preferredShift === 'manha'
        ? 'Manhã'
        : formData.preferredShift === 'tarde'
        ? 'Tarde'
        : 'Qualquer horário';

    const text = encodeURIComponent(
      `Olá! Vim pelo site da For U Odontologia e gostaria de informações sobre agendamento.\n` +
      `${formData.name ? `• Nome: ${formData.name}\n` : ''}` +
      `${formData.treatment ? `• Tratamento: ${formData.treatment}\n` : ''}` +
      `${formData.preferredDoctor ? `• Preferência de profissional: ${formData.preferredDoctor}\n` : ''}` +
      `• Turno de preferência: ${shiftLabel}\n` +
      `${formData.notes ? `• Observações: ${formData.notes}` : ''}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${text}`, '_blank');
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
            <div className="bg-[#F7F4EF] border border-[#E9DFCF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xs">
              <h3 className="font-heading text-2xl sm:text-3xl text-[#3B332D] mb-2 font-normal">
                Solicitar Agendamento
              </h3>
              <p className="text-xs sm:text-sm text-[#3B332D]/70 font-light mb-8">
                Nossa equipe entrará em contato para confirmar o melhor horário para a sua consulta.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#E9DFCF] rounded-full flex items-center justify-center text-[#B88A5A] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-normal text-2xl text-[#3B332D]">
                    Solicitação Recebida
                  </h4>
                  <p className="text-sm text-[#3B332D]/80 font-light max-w-md mx-auto leading-relaxed">
                    Recebemos sua solicitação. A equipe da For U entrará em contato para dar continuidade ao atendimento.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        treatment: '',
                        preferredDoctor: '',
                        preferredShift: 'qualquer',
                        notes: '',
                      });
                    }}
                    className="btn-secondary text-xs uppercase tracking-widest px-6 py-2.5 mt-4 cursor-pointer"
                  >
                    Nova Solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] placeholder-[#3B332D]/40 outline-hidden transition-colors"
                    />
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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] placeholder-[#3B332D]/40 outline-hidden transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-email" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
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

                  {/* Profissional de Preferência (Opcional - Dra. Fabiana, Dra. Roberta, Dra. Tatiana) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-doctor" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                        Profissional de Preferência
                      </label>
                      <select
                        id="booking-doctor"
                        value={formData.preferredDoctor}
                        onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                        className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] outline-hidden transition-colors cursor-pointer"
                      >
                        <option value="">Sem preferência (Primeira disponível)</option>
                        {SPECIALISTS.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Turno de Preferência */}
                    <div>
                      <label htmlFor="booking-shift" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                        Turno de Preferência
                      </label>
                      <select
                        id="booking-shift"
                        value={formData.preferredShift}
                        onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                        className="w-full min-h-[48px] bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] outline-hidden transition-colors cursor-pointer"
                      >
                        <option value="qualquer">Qualquer horário</option>
                        <option value="manha">Manhã (08h às 12h)</option>
                        <option value="tarde">Tarde (13h às 18h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Observações */}
                  <div>
                    <label htmlFor="booking-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#3B332D]/80 mb-1.5">
                      Observações ou dúvidas
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      placeholder="Conte-nos brevemente o que você procura ou se tem alguma necessidade específica..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#E9DFCF]/30 border border-[#E9DFCF] focus:border-[#B88A5A] focus:ring-1 focus:ring-[#B88A5A] rounded-xl px-4 py-3 text-base sm:text-sm text-[#3B332D] placeholder-[#3B332D]/40 outline-hidden transition-colors resize-none"
                    />
                  </div>

                  {/* Form CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:flex-1 min-h-[48px] py-3.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isSubmitting ? 'Enviando...' : 'Solicitar Agendamento'}</span>
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
              )}
            </div>
          </div>

          {/* 13 — CONTATO (Separação estrita: Telefone Fixo e WhatsApp como canais distintos) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#F7F4EF] border border-[#E9DFCF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
              <h3 className="font-heading text-2xl text-[#3B332D] font-normal mb-1">
                Canais de Atendimento
              </h3>
              <p className="text-xs text-[#3B332D]/70 font-light">
                Escolha o canal de sua preferência para contato direto com nossa equipe.
              </p>

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
                    href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`}
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

              {/* HORÁRIOS & ATENDIMENTO */}
              <div className="p-3.5 rounded-xl bg-[#E9DFCF]/35 border border-[#E9DFCF] flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F7F4EF] border border-[#D4B88A] flex items-center justify-center text-[#B88A5A] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs text-[#3B332D]/80 font-light space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#3B332D]/60 font-semibold block">
                    Horário de Atendimento
                  </span>
                  <p className="font-normal text-[#3B332D]">{CLINIC_INFO.hours.weekdays}</p>
                  <p className="font-normal text-[#3B332D]">{CLINIC_INFO.hours.saturday}</p>
                  
                  <div className="pt-2 mt-2 border-t border-[#E9DFCF] text-[11px] text-[#3B332D]/75 space-y-0.5">
                    <p><strong className="font-medium text-[#3B332D]">Formas de pagamento:</strong> {CLINIC_INFO.paymentMethods}</p>
                    <p><strong className="font-medium text-[#3B332D]">Convênios:</strong> {CLINIC_INFO.insurance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 14 — LOCALIZAÇÃO: VISITE A FOR U */}
        <div className="pt-12 border-t border-[#E9DFCF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Location Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B88A5A] uppercase block mb-2">
                  Localização
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#3B332D] font-normal leading-tight mb-3">
                  For U Odontologia Especializada
                </h3>
                <p className="text-sm text-[#3B332D]/80 font-light leading-relaxed">
                  Localizada no Brooklin, em São Paulo, com fácil acesso e estrutura pensada para o seu bem-estar e conforto.
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#3B332D]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B88A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-[#3B332D]">Endereço</strong>
                    <span>Rua Barão do Triunfo, 88</span>
                    <span className="block">sala/conjunto 406</span>
                    <span className="block">Brooklin — São Paulo/SP</span>
                    <span className="block text-[11px] text-[#3B332D]/60 mt-0.5">
                      CEP 04602-000
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B88A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-[#3B332D]">Horário de Atendimento</strong>
                    <span className="block">{CLINIC_INFO.hours.weekdays}</span>
                    <span className="block">{CLINIC_INFO.hours.saturday}</span>
                  </div>
                </div>
              </div>

              {/* CTA COMO CHEGAR */}
              <div className="pt-2">
                <a
                  href={CLINIC_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto min-h-[48px] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como Chegar</span>
                </a>
              </div>
            </div>

            {/* Right Location Map Embed / Frame */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E9DFCF] border border-[#E9DFCF] shadow-xs aspect-16/10">
                <iframe
                  title="Localização da For U Odontologia Especializada"
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
