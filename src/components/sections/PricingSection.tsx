import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import WhatsAppButton from "../ui/WhatsAppButton";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const plans = [
  { name:"Starter", price:"35.000", desc:"Untuk barang kos 1-5 item", features:["Foto profesional","Listing di marketplace","Support chat"], msgKey:"starter" as const, highlight:false },
  { name:"Pro", price:"99.000", desc:"Untuk motor bekas", features:["Foto 360° & video walkaround","Listing di 5+ platform","Bantuan urus surat","Prioritas support"], msgKey:"pro" as const, highlight:true },
  { name:"Premium", price:"199.000", desc:"Untuk kos/kontrakan", features:["Foto & video tour lengkap","Listing di 10+ platform","Screening penyewa","Laporan bulanan"], msgKey:"premium" as const, highlight:false },
];

const PricingSection = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} id="harga" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up">
          <SectionTitle title="Paket Harga" subtitle="Pilih paket sesuai kebutuhan. Semua paket sudah termasuk foto profesional & listing optimal." highlight="Harga" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan,i) => (
            <div key={i} className={`fade-up stagger-${i+1} ${plan.highlight ? 'md:-translate-y-2' : ''}`}>
              <Card className={`relative h-full flex flex-col ${plan.highlight ? 'border-gold/50 gold-glow' : ''}`}>
                {plan.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge variant="gold">Best Value</Badge></div>}
                <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted text-sm mb-6">{plan.desc}</p>
                <div className="text-4xl font-bold mb-1">Rp {plan.price}</div>
                <p className="text-xs text-muted mb-6">per {plan.name==="Starter"?"listing":plan.name==="Pro"?"motor":"properti"}</p>
                <div className="mb-6"><Badge variant="green">✓ Bayar setelah laku</Badge></div>
                <ul className="space-y-3 mb-8 text-sm text-muted flex-1">
                  {plan.features.map((f,j)=><li key={j} className="flex items-start gap-2"><span className="text-gold">•</span>{f}</li>)}
                </ul>
                <WhatsAppButton messageKey={plan.msgKey} className={`w-full justify-center ${plan.highlight ? '' : '!bg-transparent !text-gold border-2 border-gold hover:!bg-gold hover:!text-bg'}`} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;