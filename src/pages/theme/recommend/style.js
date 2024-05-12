import styled from "styled-components";
import { flexCenterColumn, flexCenterRow, flexEvenlyCenter } from "../../../global/common";
import reset from "styled-reset";
import GlobalStyle from "../../../global/global";
import theme from "../../../global/theme";

const S = {};
      S.Wrapper = styled.div`
      ${flexCenterColumn}
      margin-top: 1vh;
      margin-bottom: 1vh;
      `
      S.TitleWrapper = styled.div`
      ${flexCenterColumn}
      width: 80vw;
      height: 80px;
      margin-top: 1vh;
      align-items: center;
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
      border-radius: 15px;
    `

    S.ImageWrapper = styled.div`
    width: 80vw;
        ${flexCenterRow}
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
    height  : 320px;
    margin-top: 10px;
    border-radius: 15px;
    `

    S.ImageDiv=styled.div`
    width: 20vw; 
    height: 310px;
    margin-right: 2px;
    margin-left: 2px;
    border-radius: 15px;
    `
    S.Images=styled.img`
     width: 19vw;
    height: 310px;
    border-radius: 15px;
    `
    S.ContentsWrapper=styled.div`
      width: 80vw;
        /* ${flexCenterColumn} */
      height: 100%;
      padding:20px;
      margin-top:20px;
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
      border-radius: 15px;
    `
    S.DetailTitleDiv=styled.div`
     /* ${flexCenterColumn} */
      width: 78vw;
      height: 50px;
      align-items: center;
      border-bottom: solid 1px gray;
      display: flex;
    `
    S.DetailTitle=styled.div`
    width: 80vw;
    height: 40px;
    `

S.Input = styled.input`
height: 50px;
margin-top: 15px;
text-align: start;
display: flex;
font-family: ${theme.FONT_FAMILY.secondary};
width: 500px;
font-size:${theme.FONT_SIZE.h6};
padding-left: 20px;
border-radius: 10px;
background-color: #f5f6f6;
border: none;
&:hover{
        border: solid 2px #006516;
} 
`;
S.Search = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
.iconSearch {
  background: none;
  font-size: 24px;
  padding: 4px;
  margin-left: -45px;
  cursor: pointer;
  padding-top: 20px;
}
`;
S.DetailContentsWrapper=styled.div`
width: 78vw;
display: flex;
margin-top: 10px;
`
S.DetailContentsLeft = styled.div`
/* background-color: beige; */
width: 50%;
max-height: 1500px;
${flexCenterColumn}
border-right: 1px solid rgba(0,0,0,0.2);
`
S.PlanWrapper = styled.div`
/* background-color: aqua; */
width: 90%;
height: 100%;
flex-direction: column;
align-items: center;
display: flex;
margin:20px 0px 20px 0px;
`
S.Plan = styled.div`
/* background-color: black; */
cursor: pointer;
width: 90%;
height: 150px;
margin:20px 0px 20px 0px;
border-radius: 5px;
box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
${flexEvenlyCenter}
  transition: transform 0.2s ease-in-out;
          &:hover {
        transform: scale( 1.1 ,1.1);
                
      }
`
S.PlanImageWrapper=styled.div`
width: 35%;
height: 90%;
background-color: aqua;
border-radius: 5px;
margin: auto;
`
S.PlanImage=styled.img`
width: 100%;
height: 100%;
`
S.PlanContentWrapper = styled.div`
width: 60%;
height: 90%;
margin: auto;
padding: 10px;
flex-direction: column;
display: flex;
          .heading2{
            font-weight: ${theme.FONT_WEIGHT.bold};
            font-size: ${theme.FONT_SIZE.h6};
            color: ${theme.PALLETE.primary["mainGreen100"]};
            font-family: ${theme.FONT_FAMILY.heading};
             padding:5px;
            }
      
           .small{
                  font-size: ${theme.FONT_SIZE.h7};
               font-weight: 500;
                font-family: ${theme.FONT_FAMILY.heading};
                line-height: initial;
                color: gray;
                padding: 5px;
                }
          
`
S.Region1 = styled.div`
width: 100%;
height: 20%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
      .heading{
            font-size: ${theme.FONT_SIZE.h8};
               font-weight: 600;
                font-family: ${theme.FONT_FAMILY.heading};
             padding:5px;
           width: 50%;
           }
           
           `
S.Xmark = styled.div`
width: 50%;
.faXmark{
      font-size: 23px;
     
    }

`
S.DetailContentsRight = styled.div`
width: 50%;
max-height: 100%;
/* ${flexCenterColumn} */
`
S.DetailContentsContainer = styled.div`
width: 100%;
max-height: 100%;
border-radius: 5px;
/* ${flexCenterColumn} */
`
S.PlaceTitle=styled.div`
${flexCenterColumn}
width: 100%;
height: 20%;
 .placeTitle{
  font-size: ${theme.FONT_SIZE.h4};
               font-weight: 600;
                font-family: ${theme.FONT_FAMILY.heading};
                color: ${theme.PALLETE.primary["mainGreen100"]};
 }
`
S.PlaceDetailImgDiv = styled.div`
width: 90%;
height: 30vh;
flex-direction: column;
align-items: center;
display: flex;
border-radius: 5px;
margin:40px;
`
S.PDImage=styled.img`
width: 100%;
height: 100%;
border-radius: 5px;
`
S.PDContentsDiv = styled.div`
width: 90%;
max-height: 600px;
overflow: auto;
flex-direction: column;
align-items: center;
display: flex;
padding:10px;
margin:5px 40px 10px 40px;
background-color: #F3F3F3;
border-radius: 5px;
line-height: 210%;
font-weight: ${theme.FONT_WEIGHT.regular};
font-size: ${theme.FONT_SIZE.h6};
            font-family: ${theme.FONT_FAMILY.heading};
`

S.ReviewWrapper = styled.div`
width: 90%;
height: auto;
flex-direction: column;
align-items: center;
display: flex;
padding-top:10px;
margin:5px 40px 10px 40px;
background-color: #f5f5f5;
border-radius: 5px;
line-height: 210%;
font-weight: ${theme.FONT_WEIGHT.regular};
font-size: ${theme.FONT_SIZE.h5};
            font-family: ${theme.FONT_FAMILY.heading};
`
S.ReviewDiv = styled.div`
width: 100%;
height: auto;
background-color: white;
border-radius: 5px;
margin: 10px 0px 10px 0px;
`
S.ReviewUserDiv = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
border-bottom: 1px solid gray;
p{
  color: #37A551;
  padding: 10px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h6};
  font-family: ${theme.FONT_FAMILY.heading};
  cursor: pointer;
}
`
S.UserImg=styled.div`
width: 30px;
height: 30px;
border-radius: 50px;
border: 1px solid gray;
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
background-color: #f5f5f5;
.faUser{
  background: none;
  font-size: 20px;
  cursor: pointer;
}

`
S.ReviewContent=styled.div`
width: 100%;
height: auto;
background-color: white;
border-radius: 5px;
max-height: 100px;
overflow: auto;
p{
  padding: 10px;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h7};
  font-family: ${theme.FONT_FAMILY.heading};
  cursor: pointer;
}
`


S.Reviewthumbs = styled.div`
padding: 10px;
  font-size: ${theme.FONT_SIZE.h5};
  font-family: ${theme.FONT_FAMILY.body};
  font-weight: ${theme.FONT_WEIGHT.bold};
& svg.faThumbsUp path{
      color : #37A551;
    }
`




S.Footer = styled.div`
width: 80vw;
height: 500px;
/* background-color:  ${({ theme }) => theme.PALLETE.primary["inputBack"]}; */
`

S.end = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  .last { 
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  margin-bottom: 10px;

  @media screen and (min-width: 200px) and (max-width: 450px) {
    font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  margin-bottom: 10px;
   }
  }

  @media screen and (min-width: 200px) and (max-width: 450px) {
  width: 90vw;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 50px;
  }
`
S.icons = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 200px) and (max-width: 450px) {

  }

  p {
    line-height: 1.5; /* 예시로 줄 간격을 1.5배로 설정 */
  }
`

export default S;