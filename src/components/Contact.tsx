import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Envoi vers ton endpoint Formspree
      await fetch('https://formspree.io/f/mjkpkbry', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      // Si tu veux une **deuxième adresse**, décommente et ajoute ton second endpoint :
      // await fetch('https://formspree.io/f/TON_DEUXIEME_ID', {
      //   method: 'POST',
      //   body: data,
      //   headers: { 'Accept': 'application/json' },
      // });

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Erreur lors de l’envoi du message :', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contactez-Nous</h2>
          <p className="text-xl text-slate-600">
            Notre équipe est à votre disposition pour répondre à vos besoins
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Informations de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg"><MapPin size={24} /></div>
                  <div><h4 className="font-semibold mb-1">Adresse</h4><p className="text-emerald-50">BP : 14167 Libreville, Gabon</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg"><Phone size={24} /></div>
                  <div><h4 className="font-semibold mb-1">Téléphone</h4><p className="text-emerald-50">062 28 01 03</p><p className="text-emerald-50">077 36 33 50</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg"><Mail size={24} /></div>
                  <div><h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:assistancegabon@gmail.com" className="text-emerald-50 hover:text-white transition-colors">
                      assistancegabon@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg"><Clock size={24} /></div>
                  <div><h4 className="font-semibold mb-1">Horaires</h4><p className="text-emerald-50">Disponible 24h/24 pour les urgences</p><p className="text-emerald-50">Bureau : Lun-Ven, 8h-18h</p></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nom Complet</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Téléphone</label>
                  <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow" placeholder="+241 XX XX XX XX" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Demandé</label>
                  <select name="service" id="service" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow">
                    <option value="">Sélectionnez un service</option>
                    <option value="airport">Assistance Aéroportuaire</option>
                    <option value="visa">Services Visa</option>
                    <option value="work-permit">Permis de Travail</option>
                    <option value="residence">Carte de Séjour</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea name="message" id="message" rows={4} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow" placeholder="Décrivez votre demande..."></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le Message'}
                </button>
                {status === 'success' && <p className="text-green-600 font-medium text-center mt-4">✅ Message envoyé avec succès !</p>}
                {status === 'error' && <p className="text-red-600 font-medium text-center mt-4">❌ Une erreur est survenue. Veuillez réessayer.</p>}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
