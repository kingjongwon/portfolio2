import Vvideo from "../media/volvo.mp4";
import Jvideo from "../media/jbl.mp4";
import Pvideo from "../media/portfolio.mp4";
import Mvideo from "../media/movie.mp4";
import Cvideo from "../media/corona.mp4";
import Tvideo from "../media/tweeter.mp4";

import Fade from "react-reveal/Fade";

export default function Dev() {
  return (
    <div className="h-c-container">
      <div className="h-d-box">
        <Fade left duration={1000}>
          <div className="dev-box">
            <h1 className="dev-tit">VolVo</h1>
            <p className="dev-name">제작 : 김종원</p>
            <p className="dev-tool">
              사용언어 : HTML5, CSS3, JAVASCRIPT, JQUERY
            </p>
            <video src={Vvideo} controls loop muted />
            <p className="dev-info">
              퍼블리셔 준비를 할 때 만든 작업물로 전체 페이지가 아닌 <br />
              메인 페이지의 리디자인 입니다.
              <strong>가장 신경 쓴 UI부분은</strong> <br />
              각 컨텐츠 마다 본인 좌표값에 도달하면 슬라이드 되거나 <br />
              페이드 인, 아웃 되는 스크롤 애니메이션과, <br /> 모든 이미지의
              채도를 빼놓은 상태로 페이지가 로드되고, <br /> 각각의 이미지에
              마우스 오버 시 채도를 올려주며 생동감이 느껴지도록 하는 <br />
              마우스 호버 이벤트 부분 입니다.
            </p>
            <button className="dev-btn">
              <a
                href="http://kjwon8.dothome.co.kr/volvo/main.html"
                target="_blank"
              >
                Go Web
              </a>
            </button>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="dev-box">
            <h1 className="dev-tit">JBL</h1>
            <p className="dev-name">제작 : 김종원</p>
            <p className="dev-tool">
              사용언어 : HTML5, CSS3, JAVASCRIPT, JQUERY
            </p>
            <video src={Jvideo} controls loop muted />
            <p className="dev-info">
              이 페이지 역시 퍼블리셔 준비를 할 때 만든 작업물로 전체 페이지가
              아닌 <br />
              메인 페이지의 리디자인 입니다.
              <strong>가장 신경 쓴 UI부분은</strong> <br />
              마우스 오버 시 나타나는 애니메이션 입니다. 각 컨텐츠의 마우스
              오버를 했을때 <br />
              화면 밖으로 빼놓았던 텍스트 들을 화면 안으로 넣어주고, <br />
              화면 밝기 또한 조절해 가독성을 높이는데 주력했습니다. <br />
              또한 가장 상단의 제품사진들은 제품의 디테일을 살리기 위해 <br />
              마우스 오버 시 스케일값을 높여서 확대되어 보이도록 설계했습니다.
            </p>
            <button className="dev-btn">
              <a
                href="http://kjwon8.dothome.co.kr/jbl/main.html"
                target="_blank"
              >
                Go Web
              </a>
            </button>
          </div>
        </Fade>
        <Fade left duration={1000}>
          <div className="dev-box ">
            <h1 className="dev-tit">Portfolio</h1>
            <p className="dev-name">제작 : 김종원</p>
            <p className="dev-tool">사용언어 : React</p>
            <video src={Pvideo} controls loop muted />
            <p className="dev-info">
              이 페이지는 React를 처음 배우며 만들었던 포트폴리오 페이지 입니다.
              <br />
              최대한 한 페이지에 담고 싶어 여러가지 방법을 알아보던 중 <br />
              <strong>React.Scroll</strong>을 알게 되었고,{" "}
              <strong>React.Scroll</strong>로 전체 페이지를 구성했습니다. <br />
              메뉴링크와 컴포넌트를 연동시키고 좌표값을 수정해가며 <br />
              각각의 컴포넌트들을 한 뷰 포트에 넣었으며, <br />
              About 컴포넌트의 텍스트 부분은 <strong>React Hooks</strong>를
              이용해
              <br />
              타이핑효과를 주었습니다.
            </p>
            <button className="dev-btn">
              <a
                href="https://kingjongwon.github.io/portport-kjw/"
                target="_blank"
              >
                Go Web
              </a>
            </button>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="dev-box">
            <h1 className="dev-tit">
              Movie Web <br /> (Clone)
            </h1>
            <p className="dev-name">제작 : 김종원</p>
            <p className="dev-tool">사용언어 : React</p>
            <video src={Mvideo} controls loop muted />
            <p className="dev-info">
              리액트 공부를 하며 클론코딩한 영화정보 페이지 입니다. <br />
              <strong>axios를 통해 API를 활용</strong>하는 공부를 했습니다.
            </p>
            <button className="dev-btn">
              <a
                href="https://kingjongwon.github.io/react-movie/"
                target="_blank"
              >
                Go Web
              </a>
            </button>
          </div>
        </Fade>
        <Fade left duration={500}>
          <div className="dev-box">
            <h1 className="dev-tit">
              Corona Live <br /> (Clone)
            </h1>
            <p className="dev-name">제작 : 김종원</p>
            <p className="dev-tool">사용언어 : React</p>
            <video src={Cvideo} controls loop muted />
            <p className="dev-info">
              이 역시 리액트 공부를 하며 클론코딩한 영화정보 페이지 입니다.{" "}
              <br />
              마찬가지로 <strong>axios를 통해 API를 활용</strong>하는 공부를
              했습니다.
            </p>
            <button className="dev-btn">
              <a
                href="https://kingjongwon.github.io/react-corona/"
                target="_blank"
              >
                Go Web
              </a>
            </button>
          </div>
        </Fade>
        <Fade right duration={500}>
          <div className="dev-box">
            <h1 className="dev-tit">
              Tweeter <br /> (Clone)
            </h1>
            <p className="dev-name">제작 : 김종원</p>
            <p className="dev-tool">사용언어 : React, Firebase</p>
            <video src={Tvideo} controls loop muted />
            <p className="dev-info">
              이 역시 리액트 공부를 하며 클론코딩한 트위터 기능 웹 입니다.
              <br />
              Firebase로 서버를 구축한 후{" "}
              <strong>회원가입, 로그인, 로그아웃</strong> 등의
              <br /> 실질적으로 필요한 기능구현을 공부하기 위한 공부를 했습니다.
              <br />
            </p>
            <button className="dev-btn">
              <a href="https://kingjongwon.github.io/jwitter/" target="_blank">
                Go Web
              </a>
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}
