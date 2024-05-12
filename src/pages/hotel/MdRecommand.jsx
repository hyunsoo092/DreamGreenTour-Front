import React from "react";
import S from "./style";

const MdRecommand = () => {
    return (
        <S.DivMdRecommand>
            <S.DivMdRecommandContainer>
                <S.DivMdRecommandTitle>MD 추천</S.DivMdRecommandTitle>
                <S.DivHotelCardContainer>
                    <S.DivHotelCardFirst>
                        <S.ImageHotelCardFirst
                            src="/img/picture/lottebusanhotel.jpg"
                            hover
                        />
                    </S.DivHotelCardFirst>

                    <S.DivHotelCardFirstContainer>
                        <S.ButtonHotelCardFirst>
                            <S.DivHotelCardFirstContent>
                                투몬비치 아이와함께 하기 좋은
                            </S.DivHotelCardFirstContent>
                        </S.ButtonHotelCardFirst>
                        <S.DivHotelCardFirstNameContainer>
                            <S.DivHotelCardFirstName>
                                두짓비치 리조트
                            </S.DivHotelCardFirstName>
                        </S.DivHotelCardFirstNameContainer>
                        <S.DivHotelCardFirstPrice>
                            308,090 원 ~
                        </S.DivHotelCardFirstPrice>
                    </S.DivHotelCardFirstContainer>

                    <S.DivHotelCardSecond>
                        <S.ImageHotelCardSecond src="_635712533229453019-jpg0.png" />
                    </S.DivHotelCardSecond>
                    <S.DivHotelCardSecondContainer>
                        <S.ButtonHotelCardSecond>
                            <S.DivHotelCardSecondContent>
                                아이들의 원픽
                            </S.DivHotelCardSecondContent>
                        </S.ButtonHotelCardSecond>
                        <S.DivHotelCardSecondNameContainer>
                            <S.DivHotelCardSecondName>
                                세부 제이파크아일랜드 리조트 
                            </S.DivHotelCardSecondName>
                        </S.DivHotelCardSecondNameContainer>
                        <S.DivHotelCardSecondPrice>
                            319,810 원 ~
                        </S.DivHotelCardSecondPrice>
                        <S.DivHotelCardSecondWon></S.DivHotelCardSecondWon>
                    </S.DivHotelCardSecondContainer>
                    <S.DivHotelCardThird>
                        <S.ImageHotelCardThird src="_636652852768806155-jpg0.png" />
                    </S.DivHotelCardThird>
                    <S.DivHotelCardThirdContainer>
                        <S.ButtonHotelCardThird>
                            <S.DivHotelCardThirdContent>
                                요즘핫한 베트남 리조트
                            </S.DivHotelCardThirdContent>
                        </S.ButtonHotelCardThird>
                        <S.DivHotelCardThirdNameContainer>
                            <S.DivHotelCardThirdName>
                                인터컨티넨탈 푸꾸옥 롱비치리조트, IH…
                            </S.DivHotelCardThirdName>
                        </S.DivHotelCardThirdNameContainer>
                        <S.DivHotelCardThirdPrice>
                            279,860 원 ~
                        </S.DivHotelCardThirdPrice>
                    </S.DivHotelCardThirdContainer>
                </S.DivHotelCardContainer>
            </S.DivMdRecommandContainer>
        </S.DivMdRecommand>
    );
};

export default MdRecommand;
