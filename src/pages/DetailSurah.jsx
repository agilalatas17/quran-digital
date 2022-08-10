import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function DetailSurah() {
  const params = useParams();
  const [detailSurah, setDetailSurah] = useState({});
  const [listAyat, setListAyat] = useState([]);
  const [bismillah, setBismillah] = useState(null);

  const getDetailSurah = async () => {
    const data = await fetch(
      `https://quran-api-w8ju.vercel.app/surah/${params.surah}`
    );

    const detailData = await data.json();
    setDetailSurah(detailData.data);
  };

  const getAyat = async () => {
    const urlApi = await fetch(
      `https://quran-api-w8ju.vercel.app/surah/${params.surah}`
    );
    const data = await urlApi.json();
    const ayat = data.data;

    const tampilAyat = ayat.verses;
    const tambilBismillah = ayat.preBismillah;

    setListAyat(tampilAyat);

    if (tambilBismillah !== null) {
      setBismillah(tambilBismillah.text.arab);
    }
  };

  useEffect(() => {
    getDetailSurah();
  }, [params.surah]);

  useEffect(() => {
    getAyat();
  }, []);

  return (
    <section className="detail-section">
      <Container>
        <div className="detail-title">
          <h1>{detailSurah?.name?.transliteration?.id}</h1>
          <p>{detailSurah?.name?.translation?.id}</p>
        </div>

        <div>
          <h4 className="text-arabic fs-32 text-center py-24">{bismillah}</h4>
          {listAyat.map((ayat, index) => {
            return (
              <Card key={index}>
                <Badge>
                  {params.surah} : {ayat.number.inSurah}
                </Badge>

                <h4 className="text-arabic">{ayat.text.arab}</h4>
                <p className="card-transliterasi">
                  {ayat.text.transliteration.en}
                </p>
                <p className="card-terjemahan">{ayat.translation.id}</p>
              </Card>
            );
          })}
          ;
        </div>
      </Container>
    </section>
  );
}

/* =====================================
========== STYLED COMPONENT ============
======================================== */

const Container = styled.div`
  padding-top: 48px;
  padding-right: 16px;
  padding-bottom: 48px;
  padding-left: 16px;
  max-width: 1040px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding-top: 72px;
    padding-bottom: 72px;
  }

  .detail-title {
    margin-bottom: 32px;
    text-align: center;

    @media (min-width: 1024px) {
      margin-bottom: 48px;
    }

    h1 {
      font-family: "Roboto";
      margin-bottom: 4px;
    }

    p {
      color: #6c757d;
    }
  }
`;

const Card = styled.div`
  padding: 16px;
  background-color: #e9ecef;

  &:nth-child(even) {
    background-color: #ced4da;
  }

  .text-arabic {
    margin-top: 16px;
    font-family: "Indopak";
    font-size: 24px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0vmax;
    text-align: justify;
    direction: rtl;
  }

  .card-transliterasi {
    margin-top: 24px;
    margin-bottom: 8px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #638bea;
  }

  .card-terjemahan {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media (min-width: 1024px) {
    .text-arabic {
      font-size: 28px;
      line-height: 64px;
    }

    .card-transliterasi {
      margin-top: 24px;
      font-size: 16px;
      line-height: 24px;
    }

    .card-terjemahan {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const Badge = styled.span`
  padding: 4px 8px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 600;
  background-color: #4776e6;
  color: #fff;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export default DetailSurah;
