import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Surah.css";
import SpesifikSurah from "./SpesifikSurah";

export default function Surah() {
  const [surah, setSurah] = useState([]);
  const [detailSurah, setDetailSurah] = useState([]);
  const [serch, setSerch] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("se", serch);
  const baseUrl = "https://api.quran.sutanlab.id/surah";

  const handleSerch = async (e) => {
    try {
      const res = await axios.get("https://api.quran.sutanlab.id/surah");
      const data = res.data.data;
      const getSurahByName = data.filter((item) =>
        item.name.transliteration.id.includes(e.target.value)
      );
      setSerch(getSurahByName);
    } catch (error) {
      console.log("error detail :", error.ressponse);
    }
  };

  const getDataSurah = async () => {
    try {
      setLoading(true);
      const res = await axios.get(baseUrl);
      const dataSurah = res.data.data;
      setSurah(dataSurah);
      setLoading(false);
      // console.log("surah:", dataSurah);
    } catch (error) {
      console.log("error: ", error.ressponse);
    }
  };

  const handleClick = async (id) => {
    try {
      const res = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`);
      const data = res.data.data;
      setDetailSurah(data);
      console.log("detail :", detailSurah);
    } catch (error) {
      console.log("error detail :", error.ressponse);
    }
  };

  //   efect
  useEffect(() => {
    getDataSurah();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="pencarian">
          {detailSurah.length === 0 ? (
            <>
              <input
                class="form-control mt-3 mb-3 px-lg-3 mx-5"
                type="text"
                placeholder="Cari surat"
                aria-label="default input example"
                style={{ width: "50%" }}
                onChange={handleSerch}
              />
            </>
          ) : (
            ""
          )}
        </div>
        {loading === true ? (
          <div className="load">
            <h5>Loading . . . . </h5>
          </div>
        ) : (
          ""
        )}
        {/* {serch.map((item, index) => {
          return (
            <li key={index} className="surah col-md-3 kebawah">
              <div className="nom">{index + 1}</div>
              <div className="media-body">
                <a
                  href="#"
                  className="transliteration"
                  onClick={() => handleClick(surah.number)}
                >
                  {item.name.transliteration.id} ({item.numberOfVerses})
                </a>
                <span className="translation">{item.name.translation.id}</span>
              </div>
              <div className="arab">
                <a
                  className="short"
                  href="#"
                  onClick={() => handleClick(item.number)}
                >
                  {item.name.short}
                </a>
              </div>
            </li>
          );
        })} */}

        {serch.length === 0 ? (
          <div className="bagian-surah">
            <ul className="row  ">
              {detailSurah.length !== 0 ? (
                <SpesifikSurah datadetail={detailSurah} />
              ) : (
                <>
                  {surah.map((surah, index) => {
                    return (
                      <li key={index} className="surah col-md-3 kebawah">
                        <div className="nom">{index + 1}</div>
                        <div className="media-body">
                          <a
                            href="#"
                            className="transliteration"
                            onClick={() => handleClick(surah.number)}
                          >
                            {surah.name.transliteration.id} (
                            {surah.numberOfVerses})
                          </a>
                          <span className="translation">
                            {surah.name.translation.id}
                          </span>
                        </div>
                        <div className="arab">
                          <a
                            className="short"
                            href="#"
                            onClick={() => handleClick(surah.number)}
                          >
                            {surah.name.short}
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        ) : (
          <div className="bagian-surah">
            <ul className="row  ">
              {detailSurah.length !== 0 ? (
                <SpesifikSurah datadetail={detailSurah} />
              ) : (
                <>
                  {serch.map((item, index) => {
                    return (
                      <li key={index} className="surah col-md-3 kebawah">
                        <div className="nom">{index + 1}</div>
                        <div className="media-body">
                          <a
                            href="#"
                            className="transliteration"
                            onClick={() => handleClick(item.number)}
                          >
                            {item.name.transliteration.id} (
                            {item.numberOfVerses})
                          </a>
                          <span className="translation">
                            {item.name.translation.id}
                          </span>
                        </div>
                        <div className="arab">
                          <a
                            className="short"
                            href="#"
                            onClick={() => handleClick(item.number)}
                          >
                            {item.name.short}
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
