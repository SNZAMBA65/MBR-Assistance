import { Phone, Mail, MapPin, Plane, FileText, Users, Clock, Shield } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Header fixe */}
      <Header />

      {/* ✅ On ajoute une marge en haut pour compenser la hauteur du header */}
      <main className="pt-40">
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
