import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Home.css';

function Home () {
  return (
    <div className="home-page">
      <NavBar />


        <section className="hero">
            <div className="hero-content">
              <h1>Glace</h1>
              <h1>Najukusnije poslastice u gradu</h1>
              <p>Sveže, domaće, sa ljubavlju</p>
            </div>
        </section>

        <section className="welcome">
          <div className="container">
            <h2>Dobrodošli!</h2>
            <p>
            Ovde možete poručiti najdivnije poslastice za Vaše posebne prilike.
            Rođendani, krštenja, venčanja, porodična okupljanja ili samo zato što Vam se jede nešto slatko
            i osvežavajuće - mi smo tu za Vas!
            </p>
          </div>
        </section>

        <section className="about">
          <div className="container about-container">
    <div className="about-text">
      <h2>O nama</h2>
      <p>
        Osnovani smo u Beogradu 2015. godine. Od male tezge na pijaci 
        postali smo omiljena sladoledžija koja godinama ispunjava (i premašuje) 
        očekivanja svojih klijenata. Koristimo samo prirodne sastojke, 
        sezonsko voće i puno ljubavi u svakoj kašiki.
      </p>
      <p>
        Dođite da probate – ili nas pozovite da vam donesemo osmeh na kućnu adresu!
      </p>
    </div>

    <div className="about-image">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uxTXSpLcPfnlH5PGfPTWPtOK5PUU4gPmxw&s" 
        alt="Naš tim ili radnja sa sladoledom"
      />
    </div>
  </div>
        </section>

        <Footer />
      

    </div>
  );
}




export default Home;