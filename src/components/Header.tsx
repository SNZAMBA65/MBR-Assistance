import logo from './logo.png'; // ton logo dans le même dossier

export default function Header() {
  // ✅ Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // défilement fluide
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Ligne unique : logo + navigation */}
        <div className="py-4 flex items-center justify-between">
          {/* ✅ Logo cliquable */}
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="hover:text-emerald-100 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="hover:text-emerald-100 transition-colors font-medium"
            >
              Tarifs
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-100 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
