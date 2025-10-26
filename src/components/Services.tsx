import { Plane, FileText, Users, Globe } from 'lucide-react';

export default function Services() {
  const services = {
    airport: [
      "Enregistrement et accueil sur vols internationaux & nationaux",
      "Achat de billets à la demande",
      "Transport : ADL/Hôtel/ADL, location véhicule avec chauffeur",
      "Contrôle des horaires de vol",
      "Assistance transit & visite",
      "Assistance formalités de police",
      "Accompagnement jusqu'à l'embarquement"
    ],
    administrative: [
      "Autorisation individuelle d'emploi (Work Permit)",
      "Carte de séjour",
      "Visa permanent",
      "Visa sortie/retour",
      "Visa circulaire",
      "Prorogation de visa",
      "Passeport gabonais",
      "Autorisation d'entrée"
    ],
    procedures: [
      "Étape 1: Autorisation d'emploi",
      "Étape 2: Autorisation d'entrée",
      "Étape 3: Visa résident",
      "Étape 4: Soit-transmis",
      "Étape 5: Carte de séjour",
      "Étape 6: Visa sortie/retour (sauf Français)",
      "Étape 7: Visa permanent"
    ],
    documents: [
      "Imprimé D.A.E (demande d'autorisation d'emploi)",
      "Copie de passeport",
      "Certificat de travail",
      "Diplôme ou CV",
      "Job description",
      "Organigramme de l'entreprise",
      "Dossier juridique de l'entreprise"
    ]
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos Prestations de Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une gamme complète de services pour faciliter vos démarches administratives et vos voyages au Gabon
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-600 p-3 rounded-lg">
                <Plane className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Assistance Aéroportuaire</h3>
            </div>
            <ul className="space-y-3">
              {services.airport.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-emerald-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <FileText className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Facilités Administratives</h3>
            </div>
            <ul className="space-y-3">
              {services.administrative.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-600 p-3 rounded-lg">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Procédure d'Entrée Résident</h3>
            </div>
            <ul className="space-y-3">
              {services.procedures.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-amber-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-700 p-3 rounded-lg">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Documents Requis</h3>
            </div>
            <ul className="space-y-3">
              {services.documents.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-slate-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
