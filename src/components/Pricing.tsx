export default function Pricing() {
  const assistanceServices = [
    { name: "Business Welcome Enfant -12 ans", price: "12 000 FCFA" },
    { name: "Business Departure Enfant -12 ans", price: "9 000 FCFA" },
    { name: "VIP Welcome Enfant -12 ans", price: "20 000 FCFA" },
    { name: "VIP Departure Enfant -12 ans", price: "18 000 FCFA" },
    { name: "Business Welcome", price: "18 000 FCFA" },
    { name: "Business Departure", price: "12 000 FCFA" },
    { name: "VIP Welcome", price: "30 000 FCFA" },
    { name: "VIP Departure", price: "25 000 FCFA" },
    { name: "Gestion Aéroport/Destination/Aéroport", price: "10 000 FCFA" },
    { name: "Réservation Billet Transport", price: "10 000 FCFA" },
    { name: "Réservation Hôtel", price: "Gratuit" }
  ];

  const visaServices = [
    { name: "Visa Aéroport avec invitation (1 mois)", price: "100 000 FCFA" },
    { name: "Visa Aéroport avec invitation (2 mois)", price: "150 000 FCFA" },
    { name: "Visa Aéroport avec invitation (3 mois)", price: "200 000 FCFA" }
  ];

  const administrativeServices = [
    { name: "Autorisation d'Entrée (Entry Permit)", price: "200 000 FCFA" },
    { name: "Permis de Travail (Work Permit)", price: "350 000 FCFA" },
    { name: "Carte de Travailleur Étranger", price: "150 000 FCFA" },
    { name: "Carte de Séjour", price: "250 000 FCFA" },
    { name: "Renouvellement Carte de Séjour", price: "250 000 FCFA" },
    { name: "Visa Permanent", price: "220 000 FCFA" },
    { name: "Autorisation Sortie/Retour", price: "125 000 FCFA" },
    { name: "Sortie Simple", price: "180 000 FCFA" },
    { name: "Prolongation de Visa", price: "80 000 FCFA" },
    { name: "Passeport Gabonais", price: "80 000 FCFA" },
    { name: "Certificat de Résidence", price: "25 000 FCFA" },
    { name: "Légalisation de Passeport", price: "15 000 FCFA" }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Tarifs de Prestations</h2>
          <p className="text-xl text-slate-600">Prix TTC - Transparent et Compétitif</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Assistance Aéroportuaire</h3>
              <p className="text-emerald-100">Services d'accueil et départ</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {assistanceServices.map((service, index) => (
                  <li key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                    <span className="text-slate-700 text-sm">{service.name}</span>
                    <span className="text-emerald-600 font-bold whitespace-nowrap text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Services Visa</h3>
              <p className="text-blue-100">Visa aéroport avec invitation</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {visaServices.map((service, index) => (
                  <li key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                    <span className="text-slate-700 text-sm">{service.name}</span>
                    <span className="text-blue-600 font-bold whitespace-nowrap text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Note:</span> Lettre d'invitation et ordre de mission requis
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:col-span-1">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Procédures Administratives</h3>
              <p className="text-slate-200">Permis et documents officiels</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {administrativeServices.map((service, index) => (
                  <li key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                    <span className="text-slate-700 text-sm">{service.name}</span>
                    <span className="text-slate-700 font-bold whitespace-nowrap text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Information Importante</h3>
          <div className="space-y-3 text-slate-700">
            <p className="flex items-start gap-3">
              <span className="bg-emerald-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">i</span>
              <span>Tous les tarifs sont exprimés en FCFA (Francs CFA) TTC</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="bg-emerald-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">i</span>
              <span>Les délais de traitement varient selon le type de prestation</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="bg-emerald-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">i</span>
              <span>Pour toute demande spécifique ou information complémentaire, veuillez nous contacter</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
