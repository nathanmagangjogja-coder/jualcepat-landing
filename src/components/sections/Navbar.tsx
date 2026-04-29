import { useState, useEffect } from "react";
import WhatsAppButton from "../ui/WhatsAppButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-xl border-b border-border-gold" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-5 h-5 text-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight">
              Jual<span className="gradient-text">Cepat</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#layanan" className="text-sm text-muted hover:text-gold transition-colors">Layanan</a>
            <a href="#cara-kerja" className="text-sm text-muted hover:text-gold transition-colors">Cara Kerja</a>
            <a href="#harga" className="text-sm text-muted hover:text-gold transition-colors">Harga</a>
            <a href="#faq" className="text-sm text-muted hover:text-gold transition-colors">FAQ</a>
            <WhatsAppButton variant="inline" />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-text p-2"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-3 border-t border-border-gold">
            <a href="#layanan" className="block px-3 py-2 text-muted hover:text-gold rounded-lg">Layanan</a>
            <a href="#cara-kerja" className="block px-3 py-2 text-muted hover:text-gold rounded-lg">Cara Kerja</a>
            <a href="#harga" className="block px-3 py-2 text-muted hover:text-gold rounded-lg">Harga</a>
            <a href="#faq" className="block px-3 py-2 text-muted hover:text-gold rounded-lg">FAQ</a>
            <div className="px-3">
              <WhatsAppButton variant="inline" className="w-full justify-center" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;