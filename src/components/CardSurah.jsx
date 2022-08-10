import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CardSurah() {
  const [listSurah, setListSurah] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getListSurah();
  }, []);

  const getListSurah = async () => {
    // Menyimpan ke local storage
    const check = localStorage.getItem("surah");
    if (check) {
      setListSurah(JSON.parse(check));
    } else {
      const api = await fetch("https://quran-api-w8ju.vercel.app/surah");
      let data = await api.json();

      localStorage.setItem("surah", JSON.stringify(data.data));
      setListSurah(data.data);
    }
  };

  return (
    <Container>
      <h1>Daftar Surat</h1>
      <Wrapper>
        {listSurah.map((data) => {
          return (
            <Card key={data.number}>
              <CardHeader>
                <BadgeRounded>{data.number}</BadgeRounded>
                <TitleArabic>{data.name.short}</TitleArabic>
              </CardHeader>
              <CardBody>
                <Transliteration>
                  {data.name.transliteration.id}
                </Transliteration>
                <Terjemahan>{data.name.translation.id}</Terjemahan>
              </CardBody>
              <ButtonPrimary
                onClick={() => {
                  navigate(`/surah/${data.number}`);
                }}
              >
                BACA
              </ButtonPrimary>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
}

// ==========================
// ==== STYLED COMPONENT ====
// ==========================
const Container = styled.div`
  margin: 0 auto;
  padding-top: 48px;
  padding-right: 16px;
  padding-bottom: 48px;
  padding-left: 16px;
  max-width: 1040px;

  h1 {
    font-family: "Roboto";
    text-align: center;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    padding-top: 72px;
    padding-bottom: 72px;

    h1 {
      padding-bottom: 48px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
  }
`;

const Card = styled.section`
  padding: 16px;
  min-width: 304px;
  max-height: 197px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(32, 70, 213, 0.15),
    0 1px 3px rgba(32, 70, 213, 0.3);
`;

const CardHeader = styled.div`
  position: relative;
`;

const CardBody = styled.div`
  padding: 16px 0;
`;

const BadgeRounded = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  font-family: "Roboto";
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  background-color: #4776e6;
  color: #fff;
  border-radius: 50%;
`;

const TitleArabic = styled.h4`
  font-family: "Indopak";
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  direction: rtl;
`;

const Transliteration = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  font-weight: regular;
  margin-bottom: 4px;
`;

const Terjemahan = styled.p`
  font-family: "Nunito";
  font-size: 14px;
  font-weight: 600;
  color: #6c757d;
`;

const ButtonPrimary = styled.button`
  cursor: pointer;
  padding: 8px 24px;
  width: 100%;
  border: 3px solid transparent;
  background: linear-gradient(to right, #bc5dff, #4776e6) border-box;

  color: #fff;
  border-radius: 5px;
  font-family: $ff-nunito;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    color: #152536;
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(to right, #bc5dff, #4776e6) border-box;
    border: 3px solid transparent;
  }
`;

export default CardSurah;
