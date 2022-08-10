import React, { Component } from "react";
import "./HeroSection.css";
import QuranFX from "../../assets/image/QuranFX.png";

class HeroSection extends Component {
  render() {
    return (
      <section className="hero-section">
        <div className="hero-container pt-48">
          <div className="hero-text">
            <h1>Bacalah Al-Qur’an Setiap Hari</h1>
            <p>
              “Orang yang membaca Al-Qur’an dan ia mahir membacanya, maka kelak
              ia akan bersama para malaikat yang mulia lagi taat kepada Allah.”
              <br />
              <span>(HR. Bukhari Muslim)</span>
            </p>
          </div>

          <div className="hero-image">
            <img src={QuranFX} alt="Al-Quran" />
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
