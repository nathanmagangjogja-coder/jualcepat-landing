import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import WhatsAppButton from "../ui/WhatsAppButton";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const services = [
  {
    icon: "🏍️",
    title: "Motor Bekas",
    tagline: "Jual Motor Tanpa Ribet",
    badge: "Paling Populer",
    features: [
      "Foto profesional 360° & video walkaround",
      "Harga kompetitif sesuai pasaran",
      "Proses cepat, target laku 48 jam",
      "Bantuan urus surat & balik nama",
    ],
    msgKey: "motor" as const,
    variant: "primary" as const,
  },
  {
    icon: "📦",
    title: "Barang Kos",
    tagline: "Kosongkan Kamarmu, Isi Dompetmu",
    features: [
      "Pickup barang langsung dari kos",
      "Foto & listing optimal",
      "Bayar setelah barang laku",
      "Perabot, elektronik, apa saja",
    ],
    msgKey: "barang" as const,
    variant: "outline" as const,
  },
  {
    icon: "🏠",
    title: "Kos & Kontrakan",
    tagline: "Kamar Kosong = Uang Hilang",
    features: [
      "Foto & video tour profesional",
      "Listing di 5+ platform premium",
      "Filter & screening penyewa",
      "Laporan mingguan update",
    ],
    msgKey: "properti" as const,
    variant: "outline" as const,
  },
];

const ServicesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} id="layanan" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up">
          <SectionTitle
            title="Layanan JualCepat"
            subtitle="Pilih layanan sesuai kebutuhanmu. Semua dikerjakan profesional, hasil maksimal."
            highlight="JualCepat"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div key={i} className={`fade-up stagger-${i + 1} relative`}>
              {service.badge && (
                <div className="absolute -top-3 -right-3 z-10">
                  <Badge variant="gold">{service.badge}</Badge>
                </div>
              )}
              <Card hover className="h-full flex flex-col">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gold font-semibold mb-4">{service.tagline}</p>
                <ul className="space-y-3 mb-8 text-muted text-sm flex-1">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  messageKey={service.msgKey}
                  className={service.variant === "primary" ? "w-full justify-center" : "w-full justify-center !bg-transparent !text-gold border-2 border-gold hover:!bg-gold hover:!text-bg"}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;