import { Plane, Users, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Votre Partenaire de Confiance au Gabon
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Assistance administrative complète, services aéroportuaires professionnels et solutions visa pour particuliers et entreprises au Gabon.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Plane className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">Assistance Aéroportuaire</h3>
            <p className="text-slate-600 text-sm text-center">Accueil et accompagnement VIP/Business</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">Formalités Visa</h3>
            <p className="text-slate-600 text-sm text-center">Visa, permis de séjour et autorisations</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Users className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">Permis de Travail</h3>
            <p className="text-slate-600 text-sm text-center">Autorisation d'emploi et cartes de séjour</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Clock className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">Service Rapide</h3>
            <p className="text-slate-600 text-sm text-center">Traitement efficace de vos demandes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
