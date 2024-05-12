import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../../global/common";

const S = {};

S.DivHederImage = styled.div`
    width: 100%;
    height: 150px;
    position: absolute;
    right: 0px;
    left: 0px;
    background-size: cover;
    background-repeat: no-repeat;
    ${flexCenter}
`;

S.DivHearderInImage = styled.div`
    color: #ffffff;
    font-size: 33.8671875px;
    line-height: 34px;
    font-weight: 700;
    position: absolute;
    left: calc(50% - 98.75px);
    top: calc(50% - 39px);
    width: 61.97px;
    height: 41px;
    text-align: center;
    ${flexCenter}
`;

S.DivDeaArrFrame = styled.div`
    width: 197.7px;
    height: 41px;
    position: absolute;
    ${flexCenter}
`;

S.ImageChangeArrow = styled.img`
    width: 26px;
    height: 26px;
    position: relative;
`;
S.DivChageArrowInSide = styled.div`
    color: #333333;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    position: absolute;
    left: calc(50% - 50011.98px);
    top: calc(50% - 15px);
    width: 25.47px;
    height: 17px;
    ${flexCenter}
`;

S.DivDeaArrFont1 = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 33.8671875px;
    line-height: 34px;
    font-weight: 700;
    position: absolute;
    left: calc(50% - 98.85px);
    top: calc(50% - 20.5px);
    width: 70px;
    height: 41px;
    ${flexCenter}
`;

S.DivDeaArrFont2 = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 33.8671875px;
    line-height: 34px;
    font-weight: 700;
    position: absolute;
    left: calc(40% - -6.01px);
    top: calc(50% - 20.5px);
    width: 200px;
    height: 41px;
    ${flexCenter}
`;

S.DivSchduelFrame = styled.div`
    width: 1200px;
    height: 21px;
    position: absolute;
    ${flexCenter}
    top: 58px;
`;

S.DivChangeFrame = styled.div`
    border-radius: 10px;
    border-style: solid;
    border-color: #ffffff;
    border-width: 1px;
    width: 100px;
    height: 40px;
    position: absolute;
    left: calc(50% - -537px);
    top: 34px;
`;

S.DivAirListFrame = styled.div`
    width: 1220px;
    height: 1371px;
    position: absolute;
    left: 206px;
    top: 200px;
    overflow: hidden;
`;

S.DivFilterFrame = styled.div`
    width: 924px;
    height: 58px;
    left: 302px;
    top: 15px;
    position: absolute;
    overflow: hidden;
    ${flexCenter}
`;

S.ImageFilter = styled.div`
    width: 17px;
    height: 17px;
    position: absolute;
    left: 8px;
    top: calc(50% - 8px);
    object-fit: cover;
`;

S.DivFilter = styled.div`
    color: #111111;
    text-align: left;
    font-size: 17px;
    line-height: 17px;
    font-weight: 400;
    position: absolute;
    left: 31px;
    top: 18px;
    width: 35.19px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivFilterCounterFrame = styled.div`
    background: #37a561;
    border-radius: 12px;
    width: 24px;
    height: 24.5px;
    position: absolute;
    left: 64px;
    top: calc(50% - 12px);
`;

S.DivFilterCounter = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;
    position: absolute;
    left: 9.35px;
    top: calc(50% - 12.25px);
    width: 5.51px;
    height: 24px;
    ${flexCenter}
`;

S.DivFilterActive = styled.div`
    background: #eef0f3;
    border-radius: 10px;
    width: 90px;
    height: 30px;
    position: absolute;
    left: 91px;
    top: 13px;
`;

S.DivFilterActiveFont = styled.div`
    color: #333333;
    text-align: left;
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;
    position: absolute;
    left: 10px;
    top: 7px;
    width: 76.73px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

// FliterConatainer==============================================================
S.DivFilterContainerFrame = styled.div`
    width: 244px;
    height: 1230px;
    position: absolute;
    left: 0;
    top: 0;
`;

S.DivFilterHeader = styled.div`
    width: 244px;
    height: 18px;
    position: absolute;
    left: 0px;
    top: 0px;
`;

S.DivResultInSearch = styled.div`
    text-align: left;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 120px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivInitializationFrame = styled.div`
    width: 52.51px;
    height: 15px;
    position: absolute;
    left: 112px;
    top: 2px;
`;

S.DivInitializationImage = styled.div`
    width: 18px;
    height: 18px;
    position: absolute;
    left: 0px;
    overflow: hidden;
`;

S.ImageInitialization = styled.img`
    height: auto;
    position: absolute;
    left: 1.38px;
    overflow: visible;
`;

S.DivInitiakuzationFont = styled.div`
    color: #333333;
    text-align: left;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    position: absolute;
    left: 20px;
    top: 0px;
    width: 36px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.ButtonAllClose = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    color: #111111;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    text-decoration: underline;
    position: absolute;
    left: 75px;
    width: 60px;
    height: 15px;
    ${flexCenter}
`;

S.DivWholeFrame = styled.div`
    border-style: solid;
    border-color: #eaeaea;
    border-width: 0px 0px 1px 0px;
    width: 240px;
    height: 190px;
    top: 50px;
    position: relative;
`;

S.DivWholeTitleTogleFrame = styled.div`
    width: 240px;
    height: 24px;
    position: absolute;
    left: 0px;
    top: 20px;
`;

S.DivWholeTitle = styled.div`
    color: #111111;
    text-align: left;
    font-size: 14.8828125px;
    line-height: 15px;
    font-weight: 700;
    position: absolute;
    left: 0px;
    width: 59.09px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.DivActiveTogle = styled.div`
    background: var(--green-200-accent, #37a551);
    border-radius: 12px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: flex-end;
    width: 48px;
    position: absolute;
    left: 192px;
    top: 0px;
`;

S.DivActiveTogleCircle = styled.div`
    background: var(--system-white, #ffffff);
    border-radius: 50%;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    position: relative;
`;

S.DivDeactiveTogle = styled.div`
    background: var(--gray-50, #d6d7d9);
    border-radius: 12px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: flex-start;
    width: 48px;
    position: relative;
`;

S.DivDeactiveTogleCircle = styled.div`
    background: var(--system-white, #ffffff);
    border-radius: 50%;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    position: relative;
`;

S.DivDirectCountFrame = styled.div`
    border-radius: 6px;
    height: 24px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 70px;
`;


export default S;
