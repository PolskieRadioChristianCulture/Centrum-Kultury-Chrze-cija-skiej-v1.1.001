
import React from 'react';
import { UserPersona, JOZUE_AVATAR_URL, MIRIAM_AVATAR_URL, JESZUA_AVATAR_URL, fixOrphans, AppLanguage } from '../types';

interface CentrumDashboardProps {
  user: UserPersona;
  onOpenManagement: () => void;
  appLanguage: AppLanguage;
}

export const CentrumDashboard: React.FC<CentrumDashboardProps> = ({ user, onOpenManagement, appLanguage }) => {
  const isMale = user.gender === 'male';
  const mentorName = isMale ? 'Miriam CC' : 'Jeszua';
  const mentorAvatar = isMale ? MIRIAM_AVATAR_URL : JESZUA_AVATAR_URL;

  const translations = {
    pl: {
      welcome: "Witaj w Centrum Pielgrzymie!",
      doormanMsg: "Jestem Jozue. Pilnuję porządku w Twoim Cyfrowym Centrum Uświęcenia. Tutaj masz dostęp do wszystkich narzędzi Christian Culture Global.",
      activeEcosystems: "Aktywne Ekosystemy",
      yourMentor: "Twój Mentor",
      guide: "Przewodnik Uświęcenia",
      studentPanel: "Panel Ucznia",
      futureVersions: "W Przyszłych Wersjach (2026+)",
      statusActive: "Aktywny",
      statusPrep: "W przygotowaniu",
      cards: {
        portal: { title: "Portal Główny", desc: "Strona główna Christian Culture" },
        randka: { title: "Randka CC", desc: "Portal dla singli z wartościami" },
        ccnews: { title: "CC NEWS", desc: "Chrześcijańskie Centrum Informacyjne" },
        multimedia: { title: "Centrum Multimedialne", desc: "Filmy, podcasty i muzyka" },
        biblia: { title: "Biblia CC", desc: "Ekskluzywny czytnik Słowa Bożego" },
        uslugi: { title: "Chrześcijańskie Usługi", desc: "Katalog chrześcijańskich firm" },
        ogloszenia: { title: "Portal Ogłoszeniowy", desc: "Oddam, przyjmę, sprzedam..." },
      }
    },
    en: {
      welcome: "Welcome to the Pilgrim Center!",
      doormanMsg: "I am Joshua. I keep order in your Digital Sanctification Center. Here you have access to all Christian Culture Global tools.",
      activeEcosystems: "Active Ecosystems",
      yourMentor: "Your Mentor",
      guide: "Sanctification Guide",
      studentPanel: "Student Panel",
      futureVersions: "In Future Versions (2026+)",
      statusActive: "Active",
      statusPrep: "In preparation",
      cards: {
        portal: { title: "Main Portal", desc: "Christian Culture Homepage" },
        randka: { title: "CC Dating", desc: "Portal for singles with values" },
        ccnews: { title: "CC NEWS", desc: "Christian Information Center" },
        multimedia: { title: "Multimedia Center", desc: "Movies, podcasts, and music" },
        biblia: { title: "CC Bible", desc: "Exclusive Word of God reader" },
        uslugi: { title: "Christian Services", desc: "Directory of Christian businesses" },
        ogloszenia: { title: "Classifieds Portal", desc: "Give away, accept, sell..." },
      }
    },
    es: {
      welcome: "¡Bienvenido al Centro Peregrino!",
      doormanMsg: "Soy Josué. Mantengo el orden en tu Centro de Santificación Digital. Aquí tienes acceso a todas las herramientas globales de Christian Culture.",
      activeEcosystems: "Ecosistemas Activos",
      yourMentor: "Tu Mentor",
      guide: "Guía de Santificación",
      studentPanel: "Panel del Estudiante",
      futureVersions: "En Versiones Futuras (2026+)",
      statusActive: "Activo",
      statusPrep: "En preparación",
      cards: {
        portal: { title: "Portal Principal", desc: "Página de Christian Culture" },
        randka: { title: "Citas CC", desc: "Portal para solteros con valores" },
        ccnews: { title: "CC NEWS", desc: "Centro de Información Cristiana" },
        multimedia: { title: "Centro Multimedia", desc: "Películas, podcasts y música" },
        biblia: { title: "Biblia CC", desc: "Lector exclusivo de la Palabra" },
        uslugi: { title: "Servicios Cristianos", desc: "Directorio de empresas cristianas" },
        ogloszenia: { title: "Portal de Anuncios", desc: "Donar, recibir, vender..." },
      }
    },
    fallback: {
      welcome: "Welcome to Christian Culture",
      statusPrep: "Coming soon"
    }
  };

  const t = (translations as any)[appLanguage] || translations.en;

  const cards = [
    { id: 'portal', icon: '🏛️', status: 'Aktywny', url: 'https://cclite.pl' },
    { id: 'randka', icon: '💖', status: 'Aktywny', url: 'https://randka.cclite.pl' },
    { id: 'ccnews', icon: '📰', status: 'W przygotowaniu', url: '#' },
    { id: 'multimedia', icon: '🎬', status: 'W przygotowaniu', url: '#' },
    { id: 'biblia', icon: '📖', status: 'W przygotowaniu', url: 'https://biblia.cclite.pl' },
    { id: 'uslugi', icon: '💼', status: 'W przygotowaniu', url: '#' },
    { id: 'ogloszenia', icon: '📢', status: 'W przygotowaniu', url: '#' }
  ];

  const roadmap = [
    { title: 'Virtual Biblical University', icon: '🎓' },
    { title: 'Language Lab CC', icon: '🧪' },
    { title: 'Hermeneutics Center', icon: '🔍' },
    { title: 'Good Counselors Club', icon: '🛡️' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 space-y-12 animate-fade-in">
      
      {/* Jozue Doorman Welcome Section with WOW Shield Effect */}
      <section className="flex flex-col md:flex-row items-center gap-8 p-10 bg-zinc-900/40 border-2 border-[#C5A059]/20 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
        
        {/* WOW EFFECT SHIELD IN BACKGROUND */}
        <div className="absolute -top-12 -right-12 sm:-top-20 sm:-right-20 pointer-events-none select-none transition-all duration-1000 group-hover:scale-110">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#C5A059] rounded-full blur-[80px] sm:blur-[120px] opacity-20 animate-pulse"></div>
            <span className="text-[12rem] sm:text-[20rem] opacity-20 transform rotate-12 drop-shadow-[0_0_40px_rgba(197,160,89,0.4)] block animate-floating-button-pulse">
              🛡️
            </span>
          </div>
        </div>

        <div className="relative flex-shrink-0 z-10">
          <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-[#C5A059] shadow-2xl animate-floating-button-pulse transition-transform group-hover:rotate-2">
            <img src={JOZUE_AVATAR_URL} alt="Jozue" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#C5A059] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg border border-black/20">Doorman</div>
        </div>

        <div className="text-center md:text-left space-y-3 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter italic drop-shadow-md">
            {t.welcome}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            {fixOrphans(t.doormanMsg)}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Active Apps - Main Section */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.5em] pl-4">{t.activeEcosystems}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map(card => {
              const cardData = t.cards[card.id] || { title: card.id, desc: "" };
              const isActuallyActive = card.status === 'Aktywny';
              return (
                <a 
                  key={card.id} 
                  href={card.url} 
                  onClick={(e) => !isActuallyActive && e.preventDefault()}
                  className={`group p-8 bg-zinc-900/60 border border-white/5 rounded-[2.5rem] transition-all shadow-xl flex flex-col justify-between min-h-[220px] ${isActuallyActive ? 'hover:border-[#C5A059]/40 hover:shadow-[#C5A059]/5' : 'cursor-default opacity-80'}`}
                >
                  <div>
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">{card.icon}</div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">{cardData.title}</h4>
                    <p className="text-zinc-500 text-xs mt-2 font-medium">{cardData.desc}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                     <span className={`text-[8px] font-black uppercase px-2 py-1 rounded ${isActuallyActive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'}`}>
                       {isActuallyActive ? t.statusActive : t.statusPrep}
                     </span>
                     {isActuallyActive && (
                       <svg className="w-5 h-5 text-[#C5A059] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                     )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Dynamic Mentor Sidebar */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.5em] pl-4">{t.yourMentor}</h3>
          <div className="p-8 bg-zinc-950 border-2 border-[#C5A059]/30 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
            <img src={mentorAvatar} alt={mentorName} className="w-24 h-24 rounded-full border-2 border-[#C5A059] mb-6 object-cover shadow-xl" />
            <h4 className="text-lg font-black text-white uppercase italic">{mentorName}</h4>
            <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1 mb-6">{t.guide}</p>
            <p className="text-xs text-zinc-400 leading-relaxed italic mb-8">
              {isMale 
                ? "\"Pozwól, że pomogę Ci odnaleźć drogę w Słowie Bożym na każdy dzień.\"" 
                : "\"Pójdź za mną, a uczynię Cię rybakiem ludzi w cyfrowym świecie.\""}
            </p>
            <button onClick={onOpenManagement} className="w-full py-4 bg-[#C5A059] text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:scale-105 transition-all">{t.studentPanel}</button>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <section className="space-y-6">
        <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] pl-4">{t.futureVersions}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {roadmap.map(item => (
            <div key={item.title} className="p-6 bg-zinc-900/20 border border-white/5 rounded-3xl flex flex-col items-center text-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-[9px] font-black text-white uppercase tracking-tight leading-tight">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
