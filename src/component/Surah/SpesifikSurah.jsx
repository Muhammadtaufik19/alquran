import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SpesifikSurah(props) {
  console.log("props:", props);
  const [detailSurah, setDetailSurah] = useState([]);

  const baseUrl = "https://api.quran.sutanlab.id/surah/1";

  const getDataSurah = async () => {
    try {
      const res = await axios.get(baseUrl);
      const dataSurah = res.data.data.verses;
      // setDetailSurah(dataSurah);
      // console.log("surah:", dataSurah);
    } catch (error) {
      console.log("error: ", error.ressponse);
    }
  };

  //   efect
  useEffect(() => {
    getDataSurah();
  }, []);
  return (
    <div className="container mt-3">
      <h5 className="mb-3">
        Spesifik surah {props.datadetail.name.transliteration.id}
      </h5>
      <div className="list-ayat">
        {props.datadetail.verses.map((detail, index) => {
          return (
            <section key={index}>
              <div className="row">
                <div className="col-md-1">{detail.number.inSurah}</div>
                <div className="col-md-11">
                  <p className="spesifik-arab">{detail.text.arab}</p>
                  <p className="spesifik-indo">{detail.translation.id}</p>
                </div>
                <hr />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
