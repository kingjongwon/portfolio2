// import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Htmlimg from "../media/htmlimg.png";
import Cssimg from "../media/CSS3img.png";
import Jsimg from "../media/Javascriptimg.png";
import Rimg from "../media/reactimg.png";
import Jqimg from "../media/jqueryimg.png";
import Simg from "../media/sassimg.png";

function Contents() {
  return (
    <div className="container">
      <div className="main-copy">
        <div className="main-copy-txt">
          <Fade top duration={3000}>
            <h2>KIM JONG WON</h2>
          </Fade>
          <Fade bottom duration={3000}>
            <h3>FRONT-END DEVELOPER</h3>
          </Fade>
        </div>
      </div>

      <div className="ex-copy">
        <Zoom duration={2000}>
          <h2>Values</h2>
        </Zoom>
        <ul className="ex-gnb">
          <Fade duration={1000}>
            <li>
              <h3>Challenge</h3>
              <p>
                도전을 두려워 하지 않고, <br />
                항상 겸손한 자세로 <br />
                새로운 도전에 임합니다.
              </p>
            </li>
          </Fade>
          <Fade duration={2000}>
            <li>
              <h3>Creativity</h3>
              <p>
                세상이 못본 것, <br />
                세상에 없던 것 <br />
                제가 찾고, 만들고 싶은 것들 입니다.
              </p>
            </li>
          </Fade>
          <Fade duration={3000}>
            <li>
              <h3>Faithful</h3>
              <p>
                끝까지 가는 사람이
                <br />
                승리자 라고 생각합니다. <br />
                조금 늦어도 끝까지 갈 것 입니다.
              </p>
            </li>
          </Fade>
          <Fade duration={4000}>
            <li>
              <h3>Positive</h3>
              <p>
                항상 긍정적인 자세로 <br />
                스스로와 주변에 <br />
                밝은 기운을 주고 싶습니다.
              </p>
            </li>
          </Fade>
        </ul>
      </div>

      <div className="skill-box">
        <Zoom duration={2000}>
          <h2 className="skill-title">Skills</h2>
        </Zoom>
        <Fade duration={3000}>
          <ul className="skill-gnb">
            <Fade bottom duration={1000}>
              <li>
                <img src={Htmlimg} alt="html-img" />
              </li>
            </Fade>
            <Fade bottom duration={2000}>
              <li>
                <img src={Cssimg} alt="css-img" />
              </li>
            </Fade>
            <Fade bottom duration={3000}>
              <li>
                <img src={Jsimg} alt="js-img" />
              </li>
            </Fade>
            <Fade bottom duration={1000}>
              <li>
                <img src={Rimg} alt="react-img" />
              </li>
            </Fade>
            <Fade bottom duration={2000}>
              <li>
                <img src={Simg} alt="sass-img" />
              </li>
            </Fade>
            <Fade bottom duration={3000}>
              <li>
                <img src={Jqimg} alt="jquery-img" />
              </li>
            </Fade>
          </ul>
        </Fade>
      </div>
    </div>
  );
}

export default Contents;
