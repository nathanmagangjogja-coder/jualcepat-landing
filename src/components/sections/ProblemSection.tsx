import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const problems = [
  {
    icon: (
      <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a2.4 2.4 0 012.08-.67l.567.057c.435.043.87-.105 1.19-.42l1.049-1.049c.32-.32.467-.754.42-1.19l-.057-.567a2.4 2.4 0 01.67-2.08l.723-.723c.342-.342.427-.865.21-1.298l-.076-.153a1.05 1.05 0 00-1.006-.622h-1.089c-.298 0-.585-.119-.795-.329l-1.348-1.348a1.05 1.05 0 00-1.298-.21l-.775.387L10.36 8.11a6 6 0 00-3.257-1.676l-1.913-.319a1.05 1.05 0 00-1.075.926z" />
      </svg>
    ),
    title: "Foto & Listing Tidak Menarik",
    desc: "Foto seadanya bikin calon pembeli skip. Listing asal-asalan bikin asetmu tenggelam di antara ribuan yang lain.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tidak Tahu Harga Pasaran",
    desc: "Bingung pasang harga? Kemahalan gak laku, kemurahan malah rugi. Valuasi yang salah bikin aset nganggur berbulan-bulan.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Calon Pembeli Ghosting",
    desc: "Banyak yang tanya-tanya doang, nego gak jelas, lalu hilang tanpa kabar. Buang-buang waktu dan energi.",
  },
];

const ProblemSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} id="problem" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up">
          <SectionTitle
            title="Kenapa Asetmu Susah Laku?"
            subtitle="Masalah klasik yang bikin aset nganggur dan uang nggak cair. Kenali dulu, baru kami kasih solusinya."
            highlight="Susah Laku?"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob, i) => (
            <div key={i} className={`fade-up stagger-${i + 1}`}>
              <Card hover className="group">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                  {prob.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{prob.title}</h3>
                <p className="text-muted leading-relaxed">{prob.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;