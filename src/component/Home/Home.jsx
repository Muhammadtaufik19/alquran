import React from "react";
import "./Home.css";
import quran from "../../assets/image/Alquran-2.jpg";

export default function Home() {
  return (
    <div className="container bg-home">
      <div className="row ">
        <div className="col-md-5 home-kiri">
          <h2>
            "Al-quranku adalah situ untuk membaca Al-quran secara online dan
            juga di lengkapi dengan translate bahasa Indonesianya, ada juga
            fitur doa tahlil, asmaul husna dll."
          </h2>
        </div>
        <div className="col-md-6 home-kanan">
          <img src={quran} alt="" />
        </div>
      </div>
    </div>
  );
}
