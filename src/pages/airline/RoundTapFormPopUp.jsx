import React, { useState } from "react";
import S from "./style";

const airportData = [
    {
        id: 1,
        airportKor: "김포",
        airportEng: "GMP",
    },
    {
        id: 2,
        airportKor: "인천",
        airportEng: "ICN",
    },
    {
        id: 3,
        airportKor: "제주",
        airportEng: "CJU",
    },
    {
        id: 4,
        airportKor: "김해 부산",
        airportEng: "PUS",
    },
    {
        id: 5,
        airportKor: "울산",
        airportEng: "USN",
    },
    {
        id: 6,
        airportKor: "포항 경주",
        airportEng: "KPO",
    },
    {
        id: 7,
        airportKor: "대구",
        airportEng: "TAE",
    },
    {
        id: 8,
        airportKor: "사천",
        airportEng: "HIN",
    },
    {
        id: 9,
        airportKor: "군산",
        airportEng: "KUV",
    },
    {
        id: 10,
        airportKor: "무안",
        airportEng: "MWX",
    },
    {
        id: 11,
        airportKor: "광주",
        airportEng: "KWJ",
    },
    {
        id: 12,
        airportKor: "여수",
        airportEng: "RSU",
    },
    {
        id: 13,
        airportKor: "양양",
        airportEng: "YNY",
    },
    {
        id: 14,
        airportKor: "원주",
        airportEng: "WJU",
    },
    {
        id: 15,
        airportKor: "청주",
        airportEng: "CJJ",
    },
];

const RoundTapFormPopUp = ({
    onDepartureAirportSelect,
    onArrivalAirportSelect,
    setShowAirport,
}) => {
    const [activeAirport, setActiveAirport] = useState(1);

    const handleClick = (id, type) => {
        setActiveAirport(id);
        const selectedAirport = airportData.find(
            (airport) => airport.id === id
        );

        if (type === "departure" && onDepartureAirportSelect) {
            onDepartureAirportSelect(selectedAirport);
        } else if (type === "arrival" && onArrivalAirportSelect) {
            onArrivalAirportSelect(selectedAirport);
        }

        setShowAirport(false); // 클릭 이벤트 후 컴포넌트 숨기기
    };

    return (
        <S.DivAirportWrapper style={{ display: "flex", flexWrap: "wrap" }}>
            <S.DivAirport>
                {airportData.map((airport) => (
                    <div key={airport.id}>
                        {airport.id === activeAirport ? (
                            <S.DivAirportButtonActive
                                onClick={() =>
                                    handleClick(airport.id, "departure")
                                }
                            >
                                {airport.airportKor}
                                <br />
                                {airport.airportEng}
                            </S.DivAirportButtonActive>
                        ) : (
                            <S.DivAirportButtonActive
                                onClick={() =>
                                    handleClick(airport.id, "arrival")
                                }
                            >
                                {airport.airportKor}
                                <br />
                                {airport.airportEng}
                            </S.DivAirportButtonActive>
                        )}
                    </div>
                ))}
            </S.DivAirport>
        </S.DivAirportWrapper>
    );
};

export default RoundTapFormPopUp;
