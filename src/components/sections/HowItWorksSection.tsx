import SectionTitle from "../ui/SectionTitle";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const steps = [
  { num: 1, title: "Hubungi Kami", desc: "Chat via WhatsApp atau isi form. Ceritakan aset yang ingin dijual." },
  { num: 2, title: "Survey & Pemotretan", desc: "Tim kami datang ke lokasi untuk survey, foto, dan videokan asetmu." },
  { num: 3, title: "Listing Aktif", desc: "Asetmu dipasarkan ke jaringan pembeli dan platform premium kami." },
  { num: 4, title: "Laku, Dana Cair", desc: "Transaksi aman. Aset laku, dana langsung cair ke rekeningmu." },
];

const HowItWorksSection = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} id="cara-kerja" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up">
          <SectionTitle title="Cara Kerja Simpel" subtitle="Empat langkah mudah menuju aset laku dan dana cair." highlight="Simpel" />
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`fade-up stagger-${i+1} text-center relative`}>
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-5 text-bg font-bold text-lg relative z-10 gold-glow">{step.num}</div>
                <h4 className="font-display text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorksSection;