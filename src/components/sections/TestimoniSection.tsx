import SectionTitle from "../ui/SectionTitle";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const testimonials = [
  { stars:5, text:"Motor Beat 2019 saya laku dalam 3 hari! Tim JualCepat bantu foto yang keren banget, harga juga sesuai pasaran. Gak nyangka secepat ini.", name:"Rizky A.", role:"Mahasiswa UGM", initials:"RA" },
  { stars:5, text:"Barang-barang kos saya menumpuk pas mau pindahan. JualCepat ambil semua, fotoin, dan laku total dalam seminggu. Dana langsung masuk!", name:"Sari P.", role:"Freelancer", initials:"SP" },
  { stars:5, text:"Kosan 8 kamar saya selalu penuh sejak pakai JualCepat. Penyewa juga berkualitas karena mereka screening dulu. Recommended banget!", name:"Budi W.", role:"Pemilik Kos", initials:"BW" },
  { stars:5, text:"NMax saya laku dengan harga di atas ekspektasi. Timnya profesional, transaksi aman, dan prosesnya gak bikin pusing sama sekali.", name:"Dimas H.", role:"Karyawan Swasta", initials:"DH" },
  { stars:5, text:"Punya kontrakan 3 pintu di Sleman, 2 minggu udah penuh semua. JualCepat bener-bener bantu cari penyewa yang bonafid.", name:"Andi N.", role:"Pengusaha", initials:"AN" },
];

const TestimoniSection = () => {
  const sectionRef = useScrollAnimation();
  // duplicate untuk seamless loop
  const doubled = [...testimonials, ...testimonials];
  return (
    <section ref={sectionRef} id="testimoni" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up">
          <SectionTitle title="Cerita Pelanggan" subtitle="Ratusan pelanggan sudah merasakan manfaat JualCepat." highlight="Pelanggan" />
        </div>
        <div className="relative overflow-hidden fade-up">
          <div className="testimonial-track flex gap-6" style={{ width: 'max-content' }}>
            {doubled.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 w-80 flex-shrink-0">
                <div className="flex gap-1 mb-3 text-gold">{'★'.repeat(t.stars)}</div>
                <p className="text-sm text-muted mb-4 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-navy to-gold/30 rounded-full flex items-center justify-center font-bold text-gold-light">{t.initials}</div>
                  <div><div className="font-semibold text-sm">{t.name}</div><div className="text-xs text-muted">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimoniSection;