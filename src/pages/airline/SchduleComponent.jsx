import React, { useState } from "react";
import S from "./style";
import AirCalendar from "./AirCalendar";

const SchduleComponent = () => {
    const [isCalendarVisible, setCalendarVisible] = useState(false);

    const handleDivClick = () => {
        setCalendarVisible(true);
    };
    return (
        <S.DivSchdule onClick={handleDivClick}>
            <S.DivSchduleStartButton>
                <S.DivSchduleStartDay>02.16(금)</S.DivSchduleStartDay>
            </S.DivSchduleStartButton>
            <S.CalendarIconButton>
                <S.CalendarIconSpan>
                    <S.CalendarIconDiv>
                        <S.CalendarIconImage src="/img/icon/calender.png" />
                    </S.CalendarIconDiv>
                </S.CalendarIconSpan>
            </S.CalendarIconButton>
            <S.DivSchduleLastButton>
                <S.DivSchduleLastDay>02.19(월)</S.DivSchduleLastDay>
            </S.DivSchduleLastButton>
            {isCalendarVisible && <AirCalendar/>}
        </S.DivSchdule>
    );
};

export default SchduleComponent;
