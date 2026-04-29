import SectionTitle from "../ui/SectionTitle";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useState } from "react";

const faqs = [
  { q:"Berapa lama proses jual motor?", a:"Rata-rata motor laku dalam 48-72 jam setelah listing aktif. Tergantung kondisi motor dan harga pasaran, tapi kami optimalkan semua faktor agar terjual secepat mungkin. Proses dari survey hingga dana cair biasanya 3-5 hari kerja." },
  { q:"Apakah ada biaya di awal?", a:"Tidak ada biaya di awal! Kami bekerja dengan sistem 'pay after sold' — kamu hanya membayar setelah asetmu berhasil terjual. Survey dan pemotretan awal 100% gratis tanpa ikatan apapun." },
  { q:"Area mana saja yang dilayani?", a:"Saat ini kami melayani area Jogjakarta dan sekitarnya: Kota Jogja, Sleman, Bantul, Gunung Kidul, dan Kulon Progo. Untuk area di luar itu, silakan hubungi kami dulu." },
  { q:"Bagaimana keamanan transaksi?", a:"Transaksi 100% aman. Kami menggunakan rekening bersama (escrow) untuk transaksi besar seperti motor dan properti. Untuk barang kos, pembayaran via transfer langsung setelah barang diterima pembeli." },
  { q:"Apa yang membedakan JualCepat dari marketplace biasa?", a:"Di marketplace biasa, kamu upload sendiri, foto sendiri, deal sendiri — dan seringkali dapat pembeli tidak serius. JualCepat mengurus semuanya: foto profesional, valuasi harga, listing optimal, screening pembeli, hingga pendampingan transaksi." },
  { q:"Bisa konsultasi dulu sebelum daftar?", a:"Tentu! Konsultasi 100% gratis dan tanpa komitmen. Hubungi kami via WhatsApp, ceritakan aset yang ingin kamu jual, dan tim kami akan berikan estimasi harga serta strategi terbaik." },
];

const FAQSection = () => {
  const sectionRef = useScrollAnimation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i:number) => setOpenIdx(openIdx===i ? null : i);

  return (
    <section ref={sectionRef} id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="fade-up">
          <SectionTitle title="Ada Pertanyaan?" subtitle="Semua yang perlu kamu tahu tentang layanan JualCepat." highlight="Pertanyaan?" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq,i)=>(
            <div key={i} className={`fade-up stagger-${(i%3)+1} glass-card rounded-xl overflow-hidden`}>
              <button onClick={()=>toggle(i)} className="w-full flex items-center justify-between p-5 text-left font-semibold hover:text-gold transition-colors">
                <span>{faq.q}</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${openIdx===i?'rotate-180':''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className={`accordion-content ${openIdx===i?'open':''}`}>
                <div className="px-5 pb-5 text-muted text-sm leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;