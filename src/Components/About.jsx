import Steve from "../media/steve.jpg";
import Mark from "../media/mark.jpg";
import Neo from "../media/neo.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useMediaQuery } from "react-responsive";

export default function About() {
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
    <div className="h-c-container">
      <div className="h-c-box">
        <Zoom duration={2000}>
          <h1 className="h-c-tit">I Can be Anything!</h1>
        </Zoom>
        <Zoom duration={3000}>
          <p>
            자신에게 당당할 만큼 최선을 다한다면,
            <br />
            그리고 그렇게 끝까지 갈 수 있다면,
            <br />
            제가 하지 못 할 것은 없습니다.
            <br />
            <br />
            <strong>저는, 제가 원하는 무엇이든 될 수 있다 믿습니다.</strong>
          </p>
        </Zoom>
        {isDesk && (
          <div className="a-imgbox">
            <Fade left duration={3000}>
              <div className="steve-box">
                <img src={Steve} alt="steve" />
              </div>
            </Fade>
            <Fade duration={7000}>
              <div className="neo-box">
                <img src={Neo} alt="neo" />
              </div>
            </Fade>
            <Fade right duration={3000}>
              <div className="mark-box">
                <img src={Mark} alt="mark" />
              </div>
            </Fade>
          </div>
        )}
        {isLap && (
          <div className="a-imgbox">
            <Fade left duration={3000}>
              <div className="steve-box">
                <img src={Steve} alt="steve" />
              </div>
            </Fade>
            <Fade duration={7000}>
              <div className="neo-box">
                <img src={Neo} alt="neo" />
              </div>
            </Fade>
            <Fade right duration={3000}>
              <div className="mark-box">
                <img src={Mark} alt="mark" />
              </div>
            </Fade>
          </div>
        )}
        {isMobile && (
          <div className="a-imgbox">
            <Fade top duration={2000}>
              <div className="steve-box">
                <img src={Steve} alt="steve" />
              </div>
            </Fade>
            <Fade left duration={2000}>
              <div className="neo-box">
                <img src={Neo} alt="neo" />
              </div>
            </Fade>
            <Fade right duration={2000}>
              <div className="mark-box">
                <img src={Mark} alt="mark" />
              </div>
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
}
