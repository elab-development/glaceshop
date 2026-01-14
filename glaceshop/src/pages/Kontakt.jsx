import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InputField from '../components/InputField';
import Button from '../components/Button';
import SuccessPopup from '../components/SuccessPopup';
import './Kontakt.css';

function Kontakt() {
  const [formData, setFormData] = useState({
    imePrezime: '',
    email: '',
    datum: '',
    alergije: '(nema)',
    specijalitet: '',
    kolicina: '',
    adresa: '',
    napomene: '',
  });

  const [popupMessage, setPopupMessage] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const required = ['imePrezime', 'email', 'datum', 'specijalitet', 'kolicina', 'adresa'];
    const missing = required.find(field => !formData[field]?.trim());

    if (missing) {
      setPopupMessage("Niste dobro uneli sve podatke.");
    } else {
      // ovde bi išao pravi submit (npr. fetch na backend)
      console.log('Poslato:', formData);
      setPopupMessage("Forma je uspešno poslata.");
      // reset forme (opciono)
      setFormData({
        imePrezime: '', email: '', datum: '', alergije: '(nema)',
        specijalitet: '', kolicina: '', adresa: '', napomene: ''
      });
    }
  };

  const { state } = useLocation();

  useEffect(() => {
    if (state?.specijalitet) {
      setFormData(prev => ({
        ...prev,
        specijalitet: state.specijalitet
      }));
    }
  }, [state]);

  return (
    <div className="kontakt-page">
      <NavBar />

      <section className="hero-kontakt">
        <div className="hero-overlay">
          <h1>Kontakt</h1>
        </div>
      </section>

      <section className="form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-rows">

            <div className="form-row">
              <label className="form-label">Ime i prezime</label>
              <InputField
                name="imePrezime"
                value={formData.imePrezime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label className="form-label">Email adresa</label>
              <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label className="form-label">Datum porudžbine</label>
              <InputField
                type="date"
                name="datum"
                value={formData.datum}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label className="form-label">Alergije na sastojke</label>
              <InputField
                name="alergije"
                value={formData.alergije}
                onChange={handleChange}
                placeholder="(nema)"
              />
            </div>

            <div className="form-row">
              <label className="form-label">Naziv specijaliteta</label>
              <InputField
                name="specijalitet"
                value={formData.specijalitet}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label className="form-label">Količina</label>
              <InputField
                type="number"
                name="kolicina"
                value={formData.kolicina}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="form-row">
              <label className="form-label">Adresa (kućna ili događaja)</label>
              <InputField
                name="adresa"
                value={formData.adresa}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label className="form-label">Dodatne napomene</label>
              <InputField
                type="textarea"
                name="napomene"
                value={formData.napomene}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </div>

          <div className="button-wrapper">
            <Button type="submit">Pošalji</Button>
          </div>
        </form>
      </section>

      <SuccessPopup message={popupMessage} onClose={() => setPopupMessage(null)} />

      <Footer />
    </div>
  );
}

export default Kontakt;