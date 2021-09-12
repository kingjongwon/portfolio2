import HoverVideoPlayer from "react-hover-video-player";
import Fade from "react-reveal/Fade";
import Football1 from "../media/fb1.mp4";
import Football2 from "../media/fb2.mp4";
import Football3 from "../media/fb3.mp4";
import Football4 from "../media/fb4.mp4";
import Football5 from "../media/fb5.jpg";
import Football6 from "../media/fb7.jpg";
import Football7 from "../media/fb9.jpg";
import Football8 from "../media/fb8.jpg";
import Pic1 from "../media/pic1.JPG";
import Pic11 from "../media/pic11.JPG";
import Pic2 from "../media/pic2.jpg";
import Pic15 from "../media/pic15.jpg";
import Pic5 from "../media/pic5.jpg";
import Pic6 from "../media/pic6.jpg";
import Pic8 from "../media/pic8.JPG";
import Pic17 from "../media/pic17.jpg";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";

export default function Favorite() {
  const isMobile = useMediaQuery({
    query: "(max-width: 620px)",
  });
  const isDesk = useMediaQuery({
    query: "(min-width: 1540px)",
  });
  const isLap = useMediaQuery({
    query: " (min-width:620px) and (max-width: 1540px)",
  });
  return (
    <div className="h-f-container">
      {isDesk && (
        <div className="h-f-box">
          <div className="pic-box">
            
            <h1 className="pic-tit">Picture</h1>
            <ul className="pic-gnb">
              <Fade left duration={1000}>
                <li>
                  <img src={Pic1} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={3000}>
                <li>
                  <img src={Pic11} alt="pic1" />
                </li>
              </Fade>
              <Fade right duration={1000}>
                <li>
                  <img src={Pic8} alt="pic1" />
                </li>
              </Fade>

              <Fade left duration={2000}>
                <li>
                  <img src={Pic15} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={4000}>
                <li>
                  <p>
                    기억을 기록 할 수 있다는 점에서 <br />
                    사진의 매력을 느끼게 됐습니다. <br />
                    19살 때 첫 알바비로 중고 카메라를 산 이후 <br />
                    꾸준히 취미생활로 사진을 찍고 있습니다.
                  </p>
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <img src={Pic2} alt="pic1" />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Pic5} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={2000}>
                <li>
                  <img src={Pic6} alt="pic1" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <img src={Pic17} alt="pic1" />
                </li>
              </Fade>
            </ul>
          </div>
          <div className="fb-box">
            <h1 className="fb-tit">FootBall</h1>
            <ul className="fb-gnb">
              <Fade top duration={2000}>
                <li>
                  <div className="fb-txt-box">
                    <p>
                      초등학교 입학 전 부터 축구를 좋아했고, <br />
                      입학 후 부터 고등학교 2학년, 부상당하기 전까지 <br />
                      축구선수를 꿈꾸며 운동을 했습니다. <br />
                      이루지 못한 꿈이 되었지만, <br />
                      오히려 홀가분하게 축구를 더욱 즐기고 있습니다.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football6} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football4}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football5} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football2}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football7} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football3}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football8} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football1}
                    className="h-video"
                  />
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      )}

      {isLap && (
        <div className="h-f-box">
          <div className="pic-box">
            <h1 className="pic-tit">Picture</h1>
            <ul className="pic-gnb">
              <Fade left duration={1000}>
                <li>
                  <img src={Pic1} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={3000}>
                <li>
                  <img src={Pic11} alt="pic1" />
                </li>
              </Fade>
              <Fade right duration={1000}>
                <li>
                  <img src={Pic8} alt="pic1" />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Pic15} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={4000}>
                <li>
                  <p>
                    기억을 기록 할 수 있다는 점에서 <br />
                    사진의 매력을 느끼게 됐습니다. <br />
                    19살 때 첫 알바비로 중고 카메라를 산 이후 <br />
                    꾸준히 취미생활로 사진을 찍고 있습니다.
                  </p>
                </li>
              </Fade>

              <Fade right duration={2000}>
                <li>
                  <img src={Pic2} alt="pic1" />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Pic5} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={2000}>
                <li>
                  <img src={Pic6} alt="pic1" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <img src={Pic17} alt="pic1" />
                </li>
              </Fade>
            </ul>
          </div>
          <div className="fb-box">
            <h1 className="fb-tit">FootBall</h1>
            <ul className="fb-gnb">
              <Fade top duration={2000}>
                <li>
                  <div className="fb-txt-box">
                    <p>
                      초등학교 입학 전 부터 축구를 좋아했고, <br />
                      입학 후 부터 고등학교 2학년, 부상당하기 전까지 <br />
                      축구선수를 꿈꾸며 운동을 했습니다. <br />
                      이루지 못한 꿈이 되었지만, <br />
                      오히려 홀가분하게 축구를 더욱 즐기고 있습니다.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football6} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football4}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football5} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football2}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football7} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football3}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football8} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <HoverVideoPlayer
                    controls
                    muted
                    videoSrc={Football1}
                    className="h-video"
                  />
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="h-f-box">
          <div className="pic-box">
            <h1 className="pic-tit">Picture</h1>
            <ul className="pic-gnb">
              <Fade duration={4000}>
                <li>
                  <p>
                    기억을 기록 할 수 있다는 점에서 <br />
                    사진의 매력을 느끼게 됐습니다. <br />
                    19살 때 첫 알바비로 중고 카메라를 산 이후 <br />
                    꾸준히 취미생활로 사진을 찍고 있습니다.
                  </p>
                </li>
              </Fade>
              <Fade left duration={1000}>
                <li>
                  <img src={Pic1} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={3000}>
                <li>
                  <img src={Pic11} alt="pic1" />
                </li>
              </Fade>
              <Fade right duration={1000}>
                <li>
                  <img src={Pic8} alt="pic1" />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Pic15} alt="pic1" />
                </li>
              </Fade>

              <Fade right duration={2000}>
                <li>
                  <img src={Pic2} alt="pic1" />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Pic5} alt="pic1" />
                </li>
              </Fade>
              <Fade duration={2000}>
                <li>
                  <img src={Pic6} alt="pic1" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <img src={Pic17} alt="pic1" />
                </li>
              </Fade>
            </ul>
          </div>
          <div className="fb-box">
            <h1 className="fb-tit">FootBall</h1>
            <ul className="fb-gnb">
              <Fade top duration={2000}>
                <li>
                  <div className="fb-txt-box">
                    <p>
                      초등학교 입학 전 부터 축구를 좋아했고, <br />
                      입학 후 부터 고등학교 2학년, 부상당하기 전까지 <br />
                      축구선수를 꿈꾸며 운동을 했습니다. <br />
                      이루지 못한 꿈이 되었지만, <br />
                      오히려 홀가분하게 축구를 더욱 즐기고 있습니다.
                    </p>
                  </div>
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football6} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <video
                    controls
                    muted
                    loop
                    src={Football4}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football5} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <video
                    controls
                    muted
                    loop
                    src={Football2}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football7} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <video
                    controls
                    muted
                    loop
                    src={Football3}
                    className="h-video"
                  />
                </li>
              </Fade>
              <Fade left duration={2000}>
                <li>
                  <img src={Football8} alt="footballpic" />
                </li>
              </Fade>
              <Fade right duration={2000}>
                <li>
                  <video
                    controls
                    muted
                    loop
                    src={Football1}
                    className="h-video"
                  />
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
