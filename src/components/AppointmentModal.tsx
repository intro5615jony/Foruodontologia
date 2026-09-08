import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, MessageSquare, Clock, User, Phone, Mail, ShieldCheck, HelpCircle } from 'lucide-react';
import { CLINIC_INFO, SPECIALISTS } from '../data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatment?: string;
  selectedSpecialist?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedSpecialist = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialist: selectedSpecialist,
    preferredShift: 'qualquer',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedSpecialist) {
      setFormData((prev) => ({ ...prev, specialist: selectedSpecialist }));
    }
  }, [selectedSpecialist]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppInstant = () => {
    const shiftText = formData.preferredShift === 'manha' ? 'Manhã' : formData.preferredShift === 'tarde' ? 'Tarde' : 'Qualquer horário';
    const message = encodeURIComponent(
      `Olá! Vim pelo site da For U Odontologia e gostaria de informações sobre agendamento.\n` +
      `${formData.name ? `• Nome: ${formData.name}\n` : ''}` +
      `${formData.specialist ? `• Especialista: ${formData.specialist}\n` : ''}` +
      `• Turno de preferência: ${shiftText}\n` +
      `${formData.notes ? `• Observações: ${formData.notes}` : ''}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${message}`, '_blank');
    onClose();
  };

  const handleWhatsAppQuestions = () => {
    window.open(
      `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(CLINIC_INFO.whatsappDefaultMessage)}`,
      '_blank'
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B332D]/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="bg-[#F7F4EF] border border-[#E9DFCF] rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#3B332D]/60 hover:text-[#3B332D] p-2 rounded-full hover:bg-[#E9DFCF]/60 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#E9DFCF] border border-[#D4B88A] rounded-full flex items-center justify-center text-[#B88A5A] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-semibold text-[#B88A5A] uppercase tracking-widest block">
              {CLINIC_INFO.name}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-[#3B332D] font-normal">
              Solicitação Recebida
            </h3>
            <p className="text-sm text-[#3B332D]/80 font-light max-w-sm mx-auto leading-relaxed">
              Recebemos sua solicitação. A equipe da For U entrará em contato para dar continuidade ao atendimento.
            </p>

            <div className="pt-6 space-y-3">
              <button
                type="button"
                onClick={handleWhatsAppInstant}
                className="btn-primary w-full py-3.5 text-xs uppercase tracking-widest cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary w-full py-3 text-xs uppercase tracking-widest cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#B88A5A] uppercase block mb-1">
                Atendimento com Hora Marcada
              </span>
              <h3 id="modal-headline" className="font-heading text-2xl sm:text-3xl text-[#3B332D] font-normal">
                Agendar Consulta
              </h3>
              <p className="text-xs sm:text-sm text-[#3B332D]/75 font-light mt-1">
                Preencha os campos abaixo ou fale diretamente conosco pelo WhatsApp.
              </p>
            </div>

            {/* Direct WhatsApp Assistance Button */}
            <div className="mb-6 p-4 rounded-xl bg-[#E9DFCF]/50 border border-[#D4B88A]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-[#3B332D] text-[#D4B88A] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#3B332D] uppercase tracking-wider">Prefere tirar dúvidas agora?</p>
                  <p className="text-xs text-[#3B332D]/75">Fale diretamente com nossa equipe no WhatsApp.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppQuestions}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-md shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Tirar Dúvidas</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-[#3B332D] uppercase tracking-wider mb-1.5">
                  Nome Completo *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#E9DFCF] focus:border-[#B88A5A] focus:outline-none text-sm text-[#3B332D] rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#3B332D] uppercase tracking-wider mb-1.5">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#E9DFCF] focus:border-[#B88A5A] focus:outline-none text-sm text-[#3B332D] rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-[#3B332D] uppercase tracking-wider mb-1.5">
                    E-mail
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@exemplo.com"
                    className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#E9DFCF] focus:border-[#B88A5A] focus:outline-none text-sm text-[#3B332D] rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-specialist" className="block text-xs font-semibold text-[#3B332D] uppercase tracking-wider mb-1.5">
                  Especialista de preferência (opcional)
                </label>
                <select
                  id="modal-specialist"
                  value={formData.specialist}
                  onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#E9DFCF] focus:border-[#B88A5A] focus:outline-none text-sm text-[#3B332D] rounded-xl"
                >
                  <option value="">Qualquer Especialista Disponível</option>
                  {SPECIALISTS.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} ({s.role.split(' ')[0]})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3B332D] uppercase tracking-wider mb-1.5">
                  Turno de Preferência
                </label>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { id: 'manha', label: 'Manhã' },
                    { id: 'tarde', label: 'Tarde' },
                    { id: 'qualquer', label: 'Qualquer' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredShift: s.id })}
                      className={`py-2 text-xs rounded-full border transition-all cursor-pointer ${
                        formData.preferredShift === s.id
                          ? 'bg-[#B88A5A] text-[#F7F4EF] border-[#B88A5A] font-semibold shadow-xs'
                          : 'bg-[#F7F4EF] text-[#3B332D] border-[#E9DFCF] hover:border-[#D4B88A]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-semibold text-[#3B332D] uppercase tracking-wider mb-1.5">
                  Mensagem ou Dúvida (opcional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Conte-nos o que você precisa ou prefere..."
                  className="w-full px-3.5 py-2.5 bg-[#F7F4EF] border border-[#E9DFCF] focus:border-[#B88A5A] focus:outline-none text-sm text-[#3B332D] rounded-xl resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Solicitar Agendamento</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#3B332D]/60 text-center font-light flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B88A5A]" />
                  <span>Atendimento exclusivo com privacidade e hora marcada.</span>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
