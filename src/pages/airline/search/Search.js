import React from "react";
import S from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../../../global/theme";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterConatainer from "./FilterConatainer";

const Search = () => {
    return (
        <ThemeProvider theme={theme}>
            <S.DivHederImage>
                <img src="/img/picture/airsearchpicture.png"></img>
                <S.DivHearderInImage>
                    <S.DivDeaArrFrame>
                        <S.DivDeaArrFont1>서울</S.DivDeaArrFont1>
                        <>
                            <S.ImageChangeArrow src="/img/picture/"></S.ImageChangeArrow>
                            <S.DivChageArrowInSide>왕복</S.DivChageArrowInSide>
                        </>

                        <S.DivDeaArrFont2>오사카</S.DivDeaArrFont2>
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
                        <S.DivFilterCounter>1</S.DivFilterCounter>
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
            </S.DivAirListFrame>
        </ThemeProvider>
    );
};

export default Search;
