import SectionTitle from "../ui/SectionTitle";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const solutions = [
  {
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: "Foto & Listing Profesional",
    desc: "Tim fotografer kami hasilkan foto & deskripsi yang bikin calon pembeli langsung tertarik dan percaya.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Valuasi Harga Akurat",
    desc: "Kami analisa pasar untuk tentukan harga terbaik — kompetitif buat pembeli, maksimal buat kantongmu.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Jaringan Pembeli Terverifikasi",
    desc: "Database pembeli serius yang sudah kami kurasi. Bukan random inquiry — semua calon berkualitas.",
  },
];

const SolutionSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} id="solusi" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up">
          <SectionTitle
            title="JualCepat Hadir Sebagai Solusinya"
            subtitle="Kami urus semuanya dari A-Z. Kamu tinggal terima uang. Tanpa ribet, tanpa stres."
            highlight="Solusinya"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, i) => (
            <div key={i} className={`fade-up stagger-${i + 1} text-center p-8`}>
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold-light/10 rounded-2xl flex items-center justify-center mx-auto mb-6 gold-glow">
                {sol.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{sol.title}</h3>
              <p className="text-muted">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;