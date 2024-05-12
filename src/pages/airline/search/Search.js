import React, { useEffect, useState } from "react";
import S from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../../../global/theme";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterConatainer from "./FilterConatainer";

const Search = () => {
    // 데이터 불러오기 state 관리
    const [defFlights, setDefFlights] = useState([]);
    const [arrFlights, setArrFlights] = useState([]);
    const [flightTimes, setFlightTimes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const defResponse = await fetch("http://localhost:3001/airDefData");
            const arrResponse = await fetch("http://localhost:3001/airArrData");
            const timeResponse = await fetch(
                "http://localhost:3001/airTimeData"
            );

            const defData = await defResponse.json();
            const arrData = await arrResponse.json();
            const timeData = await timeResponse.json();

            setDefFlights(defData);
            setArrFlights(arrData);
            setFlightTimes(timeData);
        };

        fetchData();
    }, []);

    const combinedFlights = defFlights
        .map((defFlight) => {
            const arrFlight = arrFlights.find((arr) => arr.id === defFlight.id); // 먼저 arrFlight를 찾습니다.
            const flightTime = flightTimes.find(
                (time) => time.id === defFlight.id
            ); // flightTime을 찾습니다.

            // arrFlight와 flightTime이 모두 찾아졌는지 확인 후 새 객체 생성
            return arrFlight && flightTime
                ? {
                      ...defFlight,
                      arrTime: arrFlight.arrivalTime,
                      arrLocation: arrFlight.arrival,
                      arrEngName: arrFlight.arrivalEngName,
                      flightTime: flightTime.flightTime,
                      directType: flightTime.directType,
                      price: flightTime.price,
                  }
                : null;
        })
        .filter((flight) => flight !== null);

    return (
        <ThemeProvider theme={theme}>
            <S.DivHederImage>
                <img src="/img/picture/airsearchpicture.png"></img>
                <S.DivHearderInImage>
                    <S.DivDeaArrFrame>
                        <S.DivDeaArrFont1>김포</S.DivDeaArrFont1>
                        <>
                            <S.ImageChangeArrow src="/img/picture/"></S.ImageChangeArrow>
                            <S.DivChageArrowInSide>왕복</S.DivChageArrowInSide>
                        </>

                        <S.DivDeaArrFont2>제주</S.DivDeaArrFont2>
                    </S.DivDeaArrFrame>
                    <S.DivSchduelFrame>
                        <img class="before" src="before0.png" />
                        <div class="_2024-03-19-2024-03-22">
                            2024.03.19(화) ~ 2024.03.22(금)
                        </div>
                        <div class="before2"></div>
                        <img class="before3" src="before2.png" />
                        <div class="_1">성인1</div>
                        <div class="before4"></div>
                        <div class="div2">일반석</div>
                    </S.DivSchduelFrame>
                    <S.DivChangeFrame>
                        <div class="div3">변경</div>
                    </S.DivChangeFrame>
                </S.DivHearderInImage>
            </S.DivHederImage>

            <S.DivAirListFrame>
                <S.DivFilterContainerFrame>
                    <FilterConatainer />
                </S.DivFilterContainerFrame>
                <S.DivFilterFrame>
                    <S.ImageFilter src="\img\icon\filter.png" />
                    <S.DivFilter>필터</S.DivFilter>
                    <S.DivFilterCounterFrame>
                        <S.DivFilterCounter>
                            {combinedFlights.length}
                        </S.DivFilterCounter>
                    </S.DivFilterCounterFrame>
                    <S.DivFilterActive>
                        <S.DivFilterActiveFont>
                            예약가능
                            <FontAwesomeIcon icon={faXmark} />
                        </S.DivFilterActiveFont>
                    </S.DivFilterActive>
                    <div class="link4">
                        <img class="span-spr" src="span-spr0.png" />
                        <div class="div2">필터초기화</div>
                    </div>
                </S.DivFilterFrame>

                <S.DivAirListConatainer>
                    <S.DivAirListHeaderFrame>
                        <S.DivAirListHeaderTitle>
                            가는 항공편 선택
                        </S.DivAirListHeaderTitle>
                        <S.DivAirListSchduel>
                            2024.03.19 (화)
                        </S.DivAirListSchduel>
                        <S.DivAirListHeaderDefArrFrame>
                            <S.DivAirListHeaderDot></S.DivAirListHeaderDot>
                            <S.DivAirListHeaderDefArr>
                                {"김포"} → {"제주"}
                            </S.DivAirListHeaderDefArr>
                        </S.DivAirListHeaderDefArrFrame>
                        <S.DivAirListPriceNotice>
                            성인 1인 왕복요금입니다.
                        </S.DivAirListPriceNotice>
                    </S.DivAirListHeaderFrame>

                    <S.DivAirListCountFilterContainer>
                        <S.DivAirListConutFrame>
                            <span>
                                <S.SpanAirListConut1>총</S.SpanAirListConut1>
                                <S.SpanAirListConut2>
                                    {combinedFlights.length}
                                </S.SpanAirListConut2>
                                <S.SpanAirListConut3>개</S.SpanAirListConut3>
                            </span>
                        </S.DivAirListConutFrame>
                        <S.DivAirListFilterFrame>
                            <S.DivAirListFilterList1>
                                추천순
                            </S.DivAirListFilterList1>
                            <S.DivAirListFilterList2>
                                가격낮은순
                            </S.DivAirListFilterList2>
                            <S.DivAirListFilterList3>
                                소요시간적은순
                            </S.DivAirListFilterList3>
                            <S.DivAirListFilterList4>
                                출발시간빠른순
                            </S.DivAirListFilterList4>
                        </S.DivAirListFilterFrame>
                    </S.DivAirListCountFilterContainer>

                    <S.DivAirListCardContainer>
                        <ul
                            style={{
                                padding: 0,
                                margin: 0,
                                listStyleType: "none",
                            }}
                        >
                            {combinedFlights.map((flight) => (
                                <li
                                    key={flight.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <S.DivAirListCardFrame>
                                        <S.DivBestContainer>
                                            <S.DivBest1>BEST</S.DivBest1>
                                            <S.DivBest2></S.DivBest2>
                                            <S.DivBest3>회원특가</S.DivBest3>
                                        </S.DivBestContainer>

                                        <S.DivListContainer>
                                            <S.DivDetailSchduelContainer>
                                                <S.DivDetailSchduel>
                                                    상세일정
                                                </S.DivDetailSchduel>
                                            </S.DivDetailSchduelContainer>
                                            <S.DivAirListCardImageFlight>
                                                <S.ImageFlight src="/img/icon/KE.png" />
                                                <S.DivAirListCardFlightName>
                                                    {flight.flightName}
                                                </S.DivAirListCardFlightName>
                                            </S.DivAirListCardImageFlight>
                                            <S.DivAirListCardDefContainer>
                                                <S.DivAirListCardDefFrame>
                                                    <S.DivAirListCardDefTime>
                                                        {flight.departureTime}
                                                    </S.DivAirListCardDefTime>
                                                    <S.DivAirListCardDefFlight>
                                                        {flight.departure}
                                                        {
                                                            flight.departureEngName
                                                        }
                                                    </S.DivAirListCardDefFlight>
                                                </S.DivAirListCardDefFrame>

                                                <S.DivAirListCardFlightTimeContainer>
                                                    <S.DivAirListCardFlightTime>
                                                        {flight.flightTime}
                                                    </S.DivAirListCardFlightTime>
                                                    <S.DivAirListCardFlightTimeFrame>
                                                        <S.ImgaeAirListCardFlightTime src="/img/icon/air_arrow.png" />
                                                    </S.DivAirListCardFlightTimeFrame>
                                                    <S.DivAirListCardFlightDirect>
                                                        {flight.Type}
                                                    </S.DivAirListCardFlightDirect>
                                                </S.DivAirListCardFlightTimeContainer>
                                                <S.DivAirListCardArrFrame>
                                                    <S.DivAirListCardArrTime>
                                                        {flight.arrivalTime}
                                                    </S.DivAirListCardArrTime>
                                                    <S.DivAirListCardArrFlight>
                                                        {flight.arrival}
                                                        {flight.arrivalEngName}
                                                    </S.DivAirListCardArrFlight>
                                                </S.DivAirListCardArrFrame>
                                            </S.DivAirListCardDefContainer>

                                            <S.DivAirListCardPriceFrame>
                                                <S.DivAirListCardPrice>
                                                    {flight.price}
                                                </S.DivAirListCardPrice>
                                                <S.DivAirListCardPriceWon>
                                                    원~
                                                </S.DivAirListCardPriceWon>
                                            </S.DivAirListCardPriceFrame>
                                            <S.DivAirListCardChoiceFrame>
                                                <S.DivAirListCardChoice>
                                                    선택
                                                </S.DivAirListCardChoice>
                                            </S.DivAirListCardChoiceFrame>
                                        </S.DivListContainer>
                                    </S.DivAirListCardFrame>
                                </li>
                            ))}
                        </ul>
                    </S.DivAirListCardContainer>
                </S.DivAirListConatainer>
            </S.DivAirListFrame>
        </ThemeProvider>
    );
};

export default Search;
