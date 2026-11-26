import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'foru-cookie-consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (!saved) setVisible(true);
  }, []);

  const choose = (choice: 'granted' | 'denied') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* navegação privada: segue sem salvar */
    }
    window.gtag?.('consent', 'update', { analytics_storage: choice });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md z-50 rounded-2xl bg-[#FAF8F5] border border-[#E9DFCF] shadow-xl shadow-[#3B332D]/10 p-5"
    >
      <p className="text-sm text-[#3B332D]/85 font-light leading-relaxed mb-4">
        Usamos cookies para entender como o site é utilizado e melhorar sua experiência. Você pode aceitar ou recusar.
      </p>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="text-xs uppercase tracking-wider font-medium text-[#3B332D]/75 hover:text-[#3B332D] px-4 py-2.5 rounded-full hover:bg-[#E9DFCF]/50 transition-colors cursor-pointer"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="text-xs uppercase tracking-wider font-semibold text-[#F7F4EF] bg-[#B88A5A] hover:bg-[#3B332D] px-5 py-2.5 rounded-full transition-colors cursor-pointer"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};
