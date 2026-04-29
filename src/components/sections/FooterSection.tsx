import { WA_BASE, WA_MESSAGES } from "../../config/constants";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border-gold bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span className="font-display text-xl font-bold">Jual<span className="gradient-text">Cepat</span></span>
            </a>
            <p className="text-muted text-sm max-w-sm">Platform pemasaran aset premium di Jogja. Kami bantu jual motor, barang kos, dan pasarkan propertimu dengan cepat, aman, dan menguntungkan.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#layanan" className="hover:text-gold">Layanan</a></li>
              <li><a href="#cara-kerja" className="hover:text-gold">Cara Kerja</a></li>
              <li><a href="#harga" className="hover:text-gold">Harga</a></li>
              <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href={`${WA_BASE}?text=${WA_MESSAGES.default}`} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg> WhatsApp</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-gold"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-3-3l3 3 3-3"/></svg> Instagram @jualcepat</a></li>
              <li><a href="mailto:info@jualcepat.id" className="flex items-center gap-2 hover:text-gold"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg> info@jualcepat.id</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border-gold flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} JualCepat. Seluruh hak cipta dilindungi.</p>
          <p>🇮🇩 Made with ❤️ in Jogjakarta</p>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;