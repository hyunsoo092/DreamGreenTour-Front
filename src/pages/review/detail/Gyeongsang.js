import React, { useEffect, useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
const Gyeongsang = () => {
  const [heart1, setHeart1] = useState(false);
  const [heart2, setHeart2] = useState(false);
  const [heart3, setHeart3] = useState(false);
  const [heart4, setHeart4] = useState(false);
  const handleHeart1 = () => {
    setHeart1(!heart1);
  };
  const handleHeart2 = () => {
    setHeart2(!heart2);
  };
  const handleHeart3 = () => {
    setHeart3(!heart3);
  };
  const handleHeart4 = () => {
    setHeart4(!heart4);
  };

  const [GyeongSang, setGyeongSang] = useState([]);

  useEffect(() => {
    const GyeongSangData = async () => {
      const response = await fetch("http://localhost:8000/review/GyeongSang", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setGyeongSang(data.map((location) => location));
    };

    GyeongSangData();
  }, []);

  return (
    <S.Wrapper>
      <S.ReviewLine1>
        <S.Review>
          <S.ReviewTitle>
            {GyeongSang.length > 0 && GyeongSang[0].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart1} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart1 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview1.jpg`}
          />
          <S.ReviewText>
            {GyeongSang.length > 0 && GyeongSang[0].text}
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            {GyeongSang.length > 0 && GyeongSang[1].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart2} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart2 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview2.jpg`}
          />
          <S.ReviewText>
            {GyeongSang.length > 0 && GyeongSang[1].text}
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            {GyeongSang.length > 0 && GyeongSang[2].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart3} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart3 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview3.jpg`}
          />
          <S.ReviewText>
            {GyeongSang.length > 0 && GyeongSang[2].text}
          </S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            {GyeongSang.length > 0 && GyeongSang[3].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart4} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart4 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/GyeongsangReview4.jpg`}
          />
          <S.ReviewText>
            {GyeongSang.length > 0 && GyeongSang[3].text}
          </S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default Gyeongsang;
