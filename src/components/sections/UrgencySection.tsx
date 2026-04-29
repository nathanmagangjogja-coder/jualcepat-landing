import WhatsAppButton from "../ui/WhatsAppButton";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const UrgencySection = () => {
  const sectionRef = useScrollAnimation();
  const [time, setTime] = useState({ h: "24", m: "00", s: "00" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23,59,59,999);
      const diff = end.getTime() - now.getTime();
      const h = Math.floor(diff/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      setTime({h:String(h).padStart(2,'0'), m:String(m).padStart(2,'0'), s:String(s).padStart(2,'0')});
    };
    update();
    const i = setInterval(update, 1000);
    return ()=>clearInterval(i);
  }, []);

  return (
    <section ref={sectionRef} id="urgensi" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10"></div>
      <div className="relative max-w-4xl mx-auto text-center fade-up">
        <div className="glass-card rounded-3xl p-10 lg:p-16 gold-glow border-gold/30">
          <div className="text-6xl mb-6">⏳</div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Aset yang Tidak Dijual Hari Ini = <span className="gradient-text">Uang yang Tidak Masuk Hari Ini</span></h2>
          <p className="text-muted text-lg mb-8">Setiap hari kamu menunda, nilainya terus berkurang. Motor terdepresiasi. Barang kos jadi beban. Kamar kosong terus merugi.</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            {['h','m','s'].map((unit,i)=>(
              <div key={unit} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-surface rounded-xl flex items-center justify-center gold-glow border border-border-gold">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-gold">{time[unit as keyof typeof time]}</span>
                </div>
                <span className="text-xs text-muted mt-2 block">{unit==='h'?'Jam':unit==='m'?'Menit':'Detik'}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mb-6">* Penawaran spesial: gratis konsultasi & survey hari ini!</p>
          <WhatsAppButton messageKey="default" className="px-10 py-4 text-lg" />
        </div>
      </div>
    </section>
  );
};
export default UrgencySection;