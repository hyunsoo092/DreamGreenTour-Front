import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import GlobalStyle from "../../../global/global";
import BasicSpan from "../basicSpan/BasicSpan";
import S from "./style";
import Layout from "../../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSearch,faThumbsUp,faUser,faXmark } from "@fortawesome/free-solid-svg-icons";


const Recommend = () => {
  const { id } = useParams()
  const [theme, setTheme] = useState([]);
  const [error, setError] = useState(false)

  const getTheme = async () => {
    try {
        const response = await fetch('http://localhost:4000/themeTrip')
        const datas = await response.json();
        setTheme(datas)
    } catch (error) {
        setError(error)
    }
}
useEffect(()=>{
    getTheme()
}, [])


  return (
  <>
  <GlobalStyle/>
  <Layout/>
  <Outlet/>

  <S.Wrapper className="Wrapper">
    <S.TitleWrapper>
    <BasicSpan color={"black"} style1={"medium"} size={"middle"}>태백산맥 동해안 2박3일 여행 코스</BasicSpan>
    </S.TitleWrapper>
    <S.ImageWrapper className="ImageWrapper">
      
      <S.ImageDiv>
      <S.Images src="/img/picture/sheep.jpeg"></S.Images>
      </S.ImageDiv>
      <S.ImageDiv>
      <S.Images src="/img/picture/nongol.jpeg"></S.Images>
      </S.ImageDiv>
      <S.ImageDiv>
      <S.Images src="/img/picture/songjunghouse.webp"></S.Images>
      </S.ImageDiv>
      <S.ImageDiv>
      <S.Images src="/img/picture/songjung.jpeg"></S.Images>
      </S.ImageDiv>
    </S.ImageWrapper>
    <S.ContentsWrapper>
      <S.DetailTitleDiv className="detailTitleDiv">
          <S.DetailTitle className="DetailTitle">
            <BasicSpan color={"gray"} style1={"small"} size={"small"}>상세 일정</BasicSpan>
          </S.DetailTitle>
      </S.DetailTitleDiv>
        <S.Search className="Search">
              <S.Input type="text" placeholder="추가할 검색지를 입력해 주세요." className="input"/>
              <FontAwesomeIcon icon={faSearch} className="iconSearch" />
        </S.Search>
        <S.DetailContentsWrapper>
            <S.DetailContentsLeft>
              <S.PlanWrapper className="planWrapper">
             
                <S.Plan>
                          <S.PlanImageWrapper>
                          <S.PlanImage src="/img/picture/sheep.jpeg" className="PPImage"></S.PlanImage>
                          </S.PlanImageWrapper>
                        <S.PlanContentWrapper className="planContentWrapper">
                        <S.Region1 className="region">
                          <p className="heading">
                          [강원]
                          </p>
                        <FontAwesomeIcon icon={faXmark} className="faXmark" />
                        </S.Region1>

                        <p className="heading2">
                          대관령 양떼목장
                        </p>
                        
                        <p className="small">
                        눈꽃을 만끽할 수 있는 양떼목장
                        </p>
                        <p className="small">
                        강원 평창군 대관령면 대관령마루길 483-32 대관령양떼목장
                        </p>
                        </S.PlanContentWrapper>
               </S.Plan>
               
                <S.Plan>
                        <S.PlanImageWrapper>
                          <S.PlanImage src="/img/picture/songjung.jpeg" className="PPImage"></S.PlanImage>
                          </S.PlanImageWrapper>
                        <S.PlanContentWrapper className="planContentWrapper">
                        <S.Region1 className="region">
                          <p className="heading">
                          [강원]
                          </p>
                        <FontAwesomeIcon icon={faXmark} className="faXmark" />
                        </S.Region1>

                        <p className="heading2">
                          송정 해수욕장
                        </p>
                        
                        <p className="small">
                        울창한 송림과 넓은 백사장을 즐길 수 있는 곳
                        </p>
                        <p className="small">
                        강원도 강릉시 송정동 산 1-4
                        </p>
                        </S.PlanContentWrapper>
                </S.Plan>
                <S.Plan>
                         <S.PlanImageWrapper>
                          <S.PlanImage src="/img/picture/nongol.jpeg" className="PPImage"></S.PlanImage>
                          </S.PlanImageWrapper>
                        <S.PlanContentWrapper className="planContentWrapper">
                        <S.Region1 className="region">
                          <p className="heading">
                          [강원]
                          </p>
                        <FontAwesomeIcon icon={faXmark} className="faXmark" />
                        </S.Region1>

                        <p className="heading2">
                            동해안 논골담길
                        </p>
                        
                        <p className="small">
                        나를 찾아 떠나는 여행, 동해 논골담길
                        </p>
                        <p className="small">
                        강원도 동해시 해맞이길(묵호등대)
                        </p>
                        </S.PlanContentWrapper>

                </S.Plan>
                <S.Plan>
                <S.PlanImageWrapper>
                          <S.PlanImage src="/img/picture/songjunghouse.webp" className="PPImage"></S.PlanImage>
                          </S.PlanImageWrapper>
                        <S.PlanContentWrapper className="planContentWrapper">
                        <S.Region1 className="region">
                          <p className="heading">
                          [강원]
                          </p>
                        <FontAwesomeIcon icon={faXmark} className="faXmark" />
                        </S.Region1>

                        <p className="heading2">
                          비치웨이 게스트하우스
                        </p>
                        
                        <p className="small">
                        송정해수욕장 도보 3분거리에 위치한 가성비 최강의 게스트하우스 입니다. 지하철 송정역에서 도보 5 ~ 8분 거리에 있습니다. 
                        </p>
                        </S.PlanContentWrapper>
                </S.Plan>
                <S.Plan>
                       <S.PlanImageWrapper>
                          <S.PlanImage src="/img/picture/food.png" className="PPImage"></S.PlanImage>
                          </S.PlanImageWrapper>
                        <S.PlanContentWrapper className="planContentWrapper">
                        <S.Region1 className="region">
                          <p className="heading">
                          [강원]
                          </p>
                        <FontAwesomeIcon icon={faXmark} className="faXmark" />
                        </S.Region1>

                        <p className="heading2">
                            연곡꾹 저구탕
                        </p>
                        
                        <p className="small">
                        강원도 향토음식인 꾹저구탕전문 한식당
                        </p>
                        <p className="small">
                        	강원도 강릉시 연곡면 진고개로 2679
                        </p>
                        </S.PlanContentWrapper>
                </S.Plan>
                <S.Plan>
                      <S.PlanImageWrapper>
                          <S.PlanImage src="/img/picture/hasla.jpeg" className="PPImage"></S.PlanImage>
                          </S.PlanImageWrapper>
                        <S.PlanContentWrapper className="planContentWrapper">
                        <S.Region1 className="region">
                          <p className="heading">
                          [강원]
                          </p>
                        <FontAwesomeIcon icon={faXmark} className="faXmark" />
                        </S.Region1>

                        <p className="heading2">
                            하슬라 아트월드
                        </p>
                        
                        <p className="small">
                        강미술관, 카페, 호텔을 갖춘 현대적인 해변 복합 건물로 인근에 조각품이 있는 경치 좋은 공원이 있습니다.
                        </p>
                        <p className="small">
                        강원도 강릉시 강동면 율곡로 1441
                        </p>
                        </S.PlanContentWrapper>
                </S.Plan>
                <S.Plan>
                      <S.PlanImageWrapper>
                          <S.PlanImage src="/img/picture/keongpo.jpeg" className="PPImage"></S.PlanImage>
                          </S.PlanImageWrapper>
                        <S.PlanContentWrapper className="planContentWrapper">
                        <S.Region1 className="region">
                          <p className="heading">
                          [강원]
                          </p>
                        <FontAwesomeIcon icon={faXmark} className="faXmark" />
                        </S.Region1>

                        <p className="heading2">
                            경포 해변
                        </p>
                        
                        <p className="small">
                        경포해수욕장, 또는 경포해변은 강원특별자치도 강릉시 안현동에 위치한 해수욕장이다
                        </p>
                        <p className="small">
                        강릉시
                        </p>
                        </S.PlanContentWrapper>
                </S.Plan>
    
              </S.PlanWrapper>
            </S.DetailContentsLeft>
            <S.DetailContentsRight>
              <S.DetailContentsContainer>
                <S.PlaceTitle>
                  <p className="placeTitle">대관령 양떼목장</p>
                </S.PlaceTitle>
                <S.PlaceDetailImgDiv>
                  <S.PDImage src="/img/picture/sheep2.jpeg" className="pdImage"></S.PDImage>
                </S.PlaceDetailImgDiv>
            
                  <S.PDContentsDiv>
                  한국 농림부에서 지정한 동물복지와 산림보존에 특화된 목장이다. 20만 5,000㎡의 넓은 초지에 양들을 자유로이 방목한다. 1989년에 첫 축사를 완공하고 1991년에 면양을 들인 목장은 오늘날 면양 사육에 관해 한국 최고 수준의 시스템을 갖춘 목장으로 성장했다. 대관령 양떼목장에서 즐길 거리는 크게 두 가지, 산책로 걷기와 먹이 주기 체험이다. 목장을 에두르는 1.2km 길이의 산책로는 40분가량이 소요된다. 야생식물이 자라는 산책로를 걸으며 초지에서 풀을 뜯는 양 떼를 만날 수 있다. 참고로 양은 초지 풀이 자라는 5월 중순~10월 말에 방목되고, 겨울에는 축사 안에서 생활한다. 산책로 초입에는 SNS 포토존으로 유명한 나무 움막이 있고, 산책로 중간 지점이자 목장 정상인 해발 920m에서 바라보는 백두대간은 막힌 가슴을 시원스럽게 한다. 산책로 마지막 코스인 먹이 주기 체험장에서는 축사 안의 양에게 건초를 줄 수 있다.
                  </S.PDContentsDiv>
              <S.ReviewWrapper>
                <S.ReviewDiv>
                  <S.ReviewUserDiv>
                      <S.UserImg>
                        <FontAwesomeIcon icon={faUser} className="faUser"></FontAwesomeIcon>
                      </S.UserImg>
                      <p className="UserId">nsoe12</p>
                  </S.ReviewUserDiv>
                  <S.ReviewContent>
                  <p>
                  햇빛은 좀 강했지만 그래도 너무 재미있고 귀여운 양들을 보고 마음도 편안해 지는 곳이었어요~ 아이들, 연인과 같이 가보면 정말 뜻 깊을거같아요~ 목장 풍경이 멋있어요 양도 생각보다 크고 귀여워요. 먹이주기 체험도 재밌었네요. 한 시간 반이면 다 보는데 충분해요. 경험상 가보기에 나쁘지 않은 거 같네요. 오르막길도 적당해서 안힘들어요
                  </p>
                  </S.ReviewContent>
                  <S.Reviewthumbs>
                    <FontAwesomeIcon icon={faThumbsUp} className="faThumbsUp"></FontAwesomeIcon> 31
                  </S.Reviewthumbs>
                </S.ReviewDiv>

                <S.ReviewDiv>
                  <S.ReviewUserDiv>
                      <S.UserImg>
                        <FontAwesomeIcon icon={faUser} className="faUser"></FontAwesomeIcon>
                      </S.UserImg>
                      <p className="userId">asdfogiwm12</p>
                  </S.ReviewUserDiv>
                  <S.ReviewContent>
                  <p>
                  굿굿 날씨가 좋아서 모두 좋음 생각보다 더러운 양들이지만 그래도 좋다.
                  </p>
                  </S.ReviewContent>
                  <S.Reviewthumbs>
                    <FontAwesomeIcon icon={faThumbsUp} className="faThumbsUp"></FontAwesomeIcon> 25
                  </S.Reviewthumbs>
                  
                  
                </S.ReviewDiv>
                 
               </S.ReviewWrapper>
              </S.DetailContentsContainer>
              
            </S.DetailContentsRight>

        </S.DetailContentsWrapper>
    </S.ContentsWrapper>
    <S.Footer>
        <S.end>
              <p className='last'>투어/입장권 예약상담</p>
                  <S.icons>
                    <FontAwesomeIcon icon={faPen}/>
                    <p>투어/입장권 상품 문의는 투어/입장권 상품페이지 내 "상품문의" 게시판을 이용 부탁합니다. <br />
                    투어/입장권 일반 문의는 "고객문의" 게시판을 이용 부탁합니다.<br />
                    투어/입장권 예약, 취소, 결제, 환불은 "자주 찾는 질문" 게시판에서 확인 부탁합니다.</p>
                  </S.icons>
              <p className='last'>투어/입장권 판매회원 가입</p>
                  <S.icons>
                    <FontAwesomeIcon icon={faPen}/>
                    <p>투어/입장권 상품 판매는 "판매회원 가입 안내" 페이지에서 별도의 회원가입 후 가능합니다. <br />
                      판매회원 가입 문의 (국내)hhj1217@hanatour.com <br />
                      (해외)jinie27@hanatour.com</p>
                  </S.icons>
              </S.end>
          </S.Footer>

  </S.Wrapper>
  </>
  );
};

export default Recommend;
