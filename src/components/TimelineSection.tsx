import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const timelineData = [
  { date: 'Juillet 1998', eventKey: 'timeline.event1' },
  { date: 'Octobre 1998', eventKey: 'timeline.event2' },
  { date: 'Avril 2003', eventKey: 'timeline.event3' },
  { date: 'décembre 2007', eventKey: 'timeline.event4' },
  { date: 'Mai 2013', eventKey: 'timeline.event5' },
  { date: 'Novembre 2013', eventKey: 'timeline.event6' },
  { date: 'Février 2015', eventKey: 'timeline.event7' },
  { date: 'Mars 2015', eventKey: 'timeline.event8' },
  { date: 'Janvier 2017', eventKey: 'timeline.event9' },
  { date: 'Mars 2017', eventKey: 'timeline.event10' }
];

export default function TimelineSection() {
  const [selected, setSelected] = useState(0);
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useTranslation();

  // Défilement automatique
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setSlideDir('right');
      setSelected((prev) => (prev + 1) % timelineData.length);
    }, 3500);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isPaused]);

  // Slide direction selon clic
  const handleSelect = (idx: number) => {
    setSlideDir(idx > selected ? 'right' : 'left');
    setSelected(idx);
  };

  return (
    <section className="py-20 bg-white" id="timeline">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">{t('timeline.title')}</h2>
        <div className="relative flex justify-center items-center mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ligne horizontale */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-blue-100 z-0" style={{transform: 'translateY(-50%)'}} />
          <div className="flex gap-6 relative z-10 overflow-x-auto scrollbar-hide">
            {timelineData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`flex flex-col items-center focus:outline-none transition-all duration-300 group`}
                style={{ minWidth: 80 }}
              >
                <div className={`rounded-full flex items-center justify-center border-4 transition-all duration-300 shadow-lg
                  ${selected === idx
                    ? 'bg-cyan-500 border-cyan-400 text-white scale-110 shadow-cyan-200 animate-pulse-timeline'
                    : 'bg-white border-blue-100 text-blue-900 hover:bg-cyan-50 hover:border-cyan-300'}
                  `}
                  style={{ width: 70, height: 70, fontWeight: 600, fontSize: 18 }}
                >
                  {item.date.split(' ')[1] ? item.date.split(' ')[1] : item.date}
                </div>
                <span className={`mt-2 text-xs font-semibold ${selected === idx ? 'text-cyan-600' : 'text-gray-500'}`}>{item.date.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Description animée avec slide */}
        <div className="flex justify-center min-h-[100px]">
          <div
            key={selected}
            className={`max-w-2xl w-full bg-blue-50 rounded-xl shadow p-6 text-center text-gray-700 text-lg font-medium transition-all duration-500
              animate-slide-${slideDir}
            `}
            style={{ minHeight: 80 }}
          >
            {t(timelineData[selected].eventKey)}
          </div>
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        @keyframes pulse-timeline {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.7); }
          50% { box-shadow: 0 0 0 12px rgba(34,211,238,0.15); }
        }
        .animate-pulse-timeline {
          animation: pulse-timeline 1.2s infinite;
        }
        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-left {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right { animation: slide-right 0.5s; }
        .animate-slide-left { animation: slide-left 0.5s; }
      `}</style>
    </section>
  );
} 