
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Ponuda.css';

function Ponuda() {
  const specijaliteti = [
    {
      naziv: "Jagoda sa belom čokoladom",
      opis: "(kremasta baza sa svežim jagodama i belom čokoladom)",
      slika: "https://whatagirleats.com/wp-content/uploads/2025/07/vertical-cone-with-scoop-600x414.jpg" 
    },
    {
      naziv: "Pistacija premium",
      opis: "(intenzivna pistaća sa komadićima pravih pistaća)",
      slika: "https://www.queensleeappetit.com/wp-content/uploads/2019/06/No-Churn-Ferrero-Rocher-Nutella-Ice-Cream-Chocolate-Hazelnut-Cones-6-1-480x360.jpg"  
    },
    {
      naziv: "Čokolada sa slanim karamelom",
      opis: "(tamna čokolada, slani karamel i hrskava so)",
      slika: "https://www.errenskitchen.com/wp-content/uploads/2016/03/Salted-Chocolate-Caramel-Bars-feature.jpg" 
    },
    {
      naziv: "Mango sorbet",
      opis: "(100% voćni, osvežavajući mango bez mleka)",
      slika: "https://whatagirleats.com/wp-content/uploads/2025/07/vertical-cone-with-scoop-600x414.jpg"  
    },
    {
      naziv: "Vanila sa borovnicama",
      opis: "(klasična vanila sa umotanim borovnicama)",
      slika: "http://adventureswithsugar.com/wp-content/uploads/2022/01/Blueberry-Ice-Cream-15-of-15-scaled-1.jpg"
    },
    {
      naziv: "Nutella / Ferrero Rocher",
      opis: "(Nutella sos, lešnici i Ferrero kuglice)",
      slika: "https://www.queensleeappetit.com/wp-content/uploads/2019/06/No-Churn-Ferrero-Rocher-Nutella-Ice-Cream-Chocolate-Hazelnut-Cones-6-1-480x360.jpg"
    },
    {
      naziv: "Tiramisu sladoled",
      opis: "(kafa, mascarpone i piškote - italijanski klasik)",
      slika: "https://tarasmulticulturaltable.com/wp-content/uploads/2018/10/Tiramisu-Gelato-2-of-3.jpg"
    },
    {
      naziv: "Sladoledna torta - Oreo",
      opis: "(slojevi Oreo mrvica i krem sladoleda)",
      slika: "https://www.justsotasty.com/wp-content/uploads/2018/05/Oreo-Ice-Cream-Cake-2-1.jpg"
    }
  ];

  return (
    <div className="ponuda-page">
      <NavBar />

      <section className="hero-ponuda">
        <div className="hero-overlay">
          <h1>Ponuda</h1>
        </div>
      </section>

      <section className="specijaliteti-section">
        <div className="container">
          <p className="uvod-text">
            U nastavku možete videti pregled naših specijaliteta - sveže pripremljeno, sa prirodnim sastojcima i puno ljubavi.
          </p>

          <div className="specijaliteti-grid">
            {specijaliteti.map((item, index) => (
              <div key={index} className="specijalitet-card">
                <img 
                  src={item.slika} 
                  alt={item.naziv} 
                  className="specijalitet-img"
                />
                <h3 className="specijalitet-naziv">{item.naziv}</h3>
                <p className="specijalitet-opis">({item.opis})</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Ponuda;