import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* === Logo cliquable === */}
          <div
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer group"
            title="Retour en haut"
          >
            <div className="bg-white p-2 rounded-lg transition-transform group-hover:scale-105">
              <img
                src={logo}
                alt="Logo MBR Assistance"
                className="w-10 h-10 object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold group-hover:text-emerald-100 transition-colors">
                MBR ASSISTANCE GABON
              </h1>
              <p className="text-emerald-100 text-sm">
                Société Gabonaise d'Assistance Administrative & Aéroportuaire
              </p>
            </div>
          </div>

          {/* === Menu Desktop === */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              onClick={() => handleLinkClick('#services')}
              className="hover:text-emerald-100 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={() => handleLinkClick('#pricing')}
              className="hover:text-emerald-100 transition-colors font-medium"
            >
              Tarifs
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="hover:text-emerald-100 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* === Bouton Menu Mobile === */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-emerald-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* === Menu Mobile déroulant === */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-emerald-700 rounded-b-2xl shadow-lg">
            <a
              href="#services"
              onClick={() => handleLinkClick('#services')}
              className="px-6 py-3 border-t border-emerald-600 hover:bg-emerald-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={() => handleLinkClick('#pricing')}
              className="px-6 py-3 border-t border-emerald-600 hover:bg-emerald-600 transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="px-6 py-3 border-t border-emerald-600 hover:bg-emerald-600 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
