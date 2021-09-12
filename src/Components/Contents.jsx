// import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Htmlimg from "../media/htmlimg.png";
import Cssimg from "../media/CSS3img.png";
import Jsimg from "../media/Javascriptimg.png";
import Rimg from "../media/reactimg.png";
import Jqimg from "../media/jqueryimg.png";
import Simg from "../media/sassimg.png";
import Eximg3 from "../media/eximg3.jpg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function Contents() {
  const isMobile = useMediaQuery({
    query: "(max-width: 620px)",
  });
  const isDesk = useMediaQuery({
    query: "(min-width: 1540px)",
  });
  const isLap = useMediaQuery({
    query: " (min-width:620px) and (max-width: 1540px)",
  });

  const [value, setValue] = useState(
    <>
      <img src={Eximg3} alt="img" />
    </>
  );

  const name = "KIM JONG WON";

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + name[count]);
      setCount(count + 1);
    }, 50);

    if (count === name.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [text, count]);

  return (
    <div className="container">
      <div className="main-copy">
        <div className="main-copy-txt">
          <h2>{text}</h2>
          <Fade bottom duration={1300} delay={900}>
            <h3>FRONT-END DEVELOPER</h3>
          </Fade>
        </div>
      </div>
      <hr />
      <div className="ex-copy">
        <Zoom duration={2000}>
          <h2>VALUES</h2>
        </Zoom>

        {isMobile && (
          <div className="ex-flexbox">
            <ul className="ex-gnb">
              <Fade duration={1000}>
                <li>
                  <div className="v-tit-box">
                    <h3>Challenge</h3>
                    <h4 className="sub-tit">
                      도전을 두려워 하지 않고, <br />
                      항상 겸손한 자세로 <br />
                      새로운 도전에 임합니다.
                    </h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={2000}>
                <li>
                  <div className="v-tit-box">
                    <h3>Creative</h3>
                    <h4 className="sub-tit">
                      세상이 못본 것 <br />
                      세상에 없던 것 <br />
                      제가 찾고, 만들고 싶은 것들 입니다.
                    </h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={3000}>
                <li>
                  <div className="v-tit-box">
                    <h3>Faithful</h3>
                    <h4 className="sub-tit">
                      끝까지 가는 사람이 <br />
                      승리자 라고 생각합니다. <br />
                      조금 늦어도 끝까지 갈 것 입니다.
                    </h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={4000}>
                <li>
                  <div className="v-tit-box">
                    <h3>Positive</h3>
                    <h4 className="sub-tit">
                      항상 긍정적인 자세로 <br />
                      스스로와 주변에 <br />
                      밝은 기운을 주고 싶습니다.
                    </h4>
                  </div>
                </li>
              </Fade>
            </ul>
            <div className="ex-img"></div>
          </div>
        )}
        {isLap && (
          <div className="ex-flexbox">
            <ul className="ex-gnb">
              <Fade duration={1000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <strong>Challenge</strong> <br />
                        <br />
                        <hr />
                        <br />
                        도전을 두려워 하지 않고, <br />
                        항상 겸손한 자세로 <br />
                        새로운 도전에 임합니다.
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>C</h3>
                    <h4 className="sub-tit">Challenge</h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={2000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <strong>Creative</strong> <br />
                        <br />
                        <hr />
                        <br />
                        세상이 못본 것 <br />
                        세상에 없던 것 <br />
                        제가 찾고, 만들고 싶은 것들 입니다.
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>C</h3>
                    <h4 className="sub-tit">Creative</h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={3000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <strong>Faithful</strong> <br />
                        <br />
                        <hr />
                        <br />
                        끝까지 가는 사람이
                        <br />
                        승리자 라고 생각합니다. <br />
                        조금 늦어도 끝까지 갈 것 입니다.
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>F</h3>
                    <h4 className="sub-tit">Faithful</h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={4000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <strong>Positive</strong> <br />
                        <br />
                        <hr />
                        <br />
                        항상 긍정적인 자세로 <br />
                        스스로와 주변에 <br />
                        밝은 기운을 주고 싶습니다.
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>P</h3>
                    <h4 className="sub-tit">Positive</h4>
                  </div>
                </li>
              </Fade>
            </ul>
            <div className="ex-img">
              {/* <img src={Eximg3} alt="sss" /> */}
              <div className="ex-subtxt">
                <Fade duration={2000}>
                  <p className="sub-info">{value}</p>
                </Fade>
              </div>
            </div>
          </div>
        )}
        {isDesk && (
          <div className="ex-flexbox">
            <ul className="ex-gnb">
              <Fade duration={1000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <Fade duration={1000}>
                          <strong>Challenge</strong>
                        </Fade>
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <br />
                        <Fade duration={1000}>도전을 두려워 하지 않고,</Fade>
                        <br />
                        <Fade duration={1000}>항상 겸손한 자세로</Fade>
                        <br />
                        <Fade duration={1000}>새로운 도전에 임합니다.</Fade>
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>C</h3>
                    <h4 className="sub-tit">Challenge</h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={2000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <Fade duration={1000}>
                          <strong>Creative</strong>
                        </Fade>
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <br />
                        <Fade duration={1000}>세상이 못본 것</Fade>
                        <br />
                        <Fade duration={1000}>세상에 없던 것</Fade>
                        <br />
                        <Fade duration={1000}>
                          제가 찾고, 만들고 싶은 것들 입니다.
                        </Fade>
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>C</h3>
                    <h4 className="sub-tit">Creative</h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={3000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <Fade duration={1000}>
                          <strong>Faithful</strong>
                        </Fade>
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <br />
                        <Fade duration={1000}>끝까지 가는 사람이</Fade>
                        <br />
                        <Fade duration={1000}>승리자 라고 생각합니다.</Fade>
                        <br />
                        <Fade duration={1000}>
                          조금 늦어도 끝까지 갈 것 입니다.
                        </Fade>
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>F</h3>
                    <h4 className="sub-tit">Faithful</h4>
                  </div>
                </li>
              </Fade>
              <Fade duration={4000}>
                <li
                  onMouseOver={() =>
                    setValue(
                      <>
                        <Fade duration={1000}>
                          <strong>Positive</strong>
                        </Fade>
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <br />
                        <Fade duration={1000}>항상 긍정적인 자세로</Fade>
                        <br />
                        <Fade duration={1000}>스스로와 주변에</Fade>
                        <br />
                        <Fade duration={1000}>밝은 기운을 주고 싶습니다.</Fade>
                      </>
                    )
                  }
                  onMouseOut={() =>
                    setValue(
                      <>
                        <img src={Eximg3} alt="img" />
                      </>
                    )
                  }
                >
                  <div className="v-tit-box">
                    <h3>P</h3>
                    <h4 className="sub-tit">Positive</h4>
                  </div>
                </li>
              </Fade>
            </ul>
            <div className="ex-img">
              {/* <img src={Eximg3} alt="sss" /> */}
              <div className="ex-subtxt">
                <Fade duration={2000}>
                  <p className="sub-info">{value}</p>
                </Fade>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="skill-box">
        <Zoom duration={2000}>
          <h2 className="skill-title">SKILLS</h2>
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
