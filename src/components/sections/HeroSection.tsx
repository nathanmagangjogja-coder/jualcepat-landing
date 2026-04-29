import WhatsAppButton from "../ui/WhatsAppButton";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { STATS } from "../../config/constants";

const HeroSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh"
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-gold rounded-full opacity-40"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 text-center">
        {/* Badge */}
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-gold bg-surface/50 mb-8">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
          <span className="text-xs text-gold-light font-mono tracking-wider">#1 PLATFORM JUAL ASET DI JOGJA</span>
        </div>

        <h1 className="fade-up stagger-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Jual Asetmu. <br className="hidden sm:block" />
          <span className="gradient-text">Cepat. Aman. Menguntungkan.</span>
        </h1>

        <p className="fade-up stagger-2 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Platform pemasaran aset premium di Jogja. Motor bekas, barang kos, hingga properti — kami bantu laku cepat dengan harga terbaik.
        </p>

        <div className="fade-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <WhatsAppButton messageKey="default" className="px-8 py-4 text-lg" />
          <a
            href="#cara-kerja"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-gold text-gold font-semibold rounded-full hover:bg-gold/10 transition-all"
          >
            Lihat Cara Kerja
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats Row */}
        <div className="fade-up stagger-4 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gold font-mono">{STATS.asetTerjual}</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Aset Terjual</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gold font-mono">{STATS.rataHariLaku}</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Rata-rata Laku</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gold font-mono">{STATS.rating}</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gold font-mono">{STATS.jaminan}</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Aman</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent"></div>
    </section>
  );
};

export default HeroSection;