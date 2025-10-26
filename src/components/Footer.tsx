import { Phone, Mail, MapPin } from 'lucide-react';
import logo from './logo.png'; // ✅ importe ton logo (même dossier que Footer.jsx)

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Colonne 1 : Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                {/* ✅ Logo affiché correctement */}
                <img 
                  src={logo} 
                  alt="MBR Assistance Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">MBR ASSISTANCE</h3>
                <p className="text-slate-400 text-sm">GABON</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Société Gabonaise d'Assistance Administrative & Aéroportuaire. 
              Votre partenaire de confiance pour tous vos besoins administratifs et aéroportuaires.
            </p>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services Principaux</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Assistance Aéroportuaire</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Permis de Travail</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Carte de Séjour</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Visa Permanent</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Passeport Gabonais</li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Rapide</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-emerald-400 flex-shrink-0" />
                <span>BP: 14167 Libreville, Gabon</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <div>
                  <div>062 28 01 03</div>
                  <div>077 36 33 50</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <a 
                  href="mailto:assistancegabon@gmail.com" 
                  className="hover:text-emerald-400 transition-colors"
                >
                  assistancegabon@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} MBR Assistance Gabon. Tous droits réservés.</p>
            <p className="mt-2">
              Société Gabonaise d'Assistance Administrative & Aéroportuaire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
