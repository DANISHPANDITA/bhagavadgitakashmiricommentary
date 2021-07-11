/** @format */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../styles/Basics.css";
import indian from "indian-numbers";
import { Link } from "react-router-dom";
import { JumpCircleLoading } from "react-loadingg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function Basics() {
  const [EngChapBasics, setEngChapBasics] = useState([]);
  const [HindiChapBasics, setHindiChapBasics] = useState([]);
  const [Lang, setLang] = useState(true);
  const history = useHistory();
 

  useEffect(() => {
    fetch(engDataURL)
      .then((res) => res.json())
      .then((data) => setEngChapBasics(Object.values(data.chapters)));

    fetch(hindiDataURL)
      .then((res) => res.json())
      .then((data) => setHindiChapBasics(Object.values(data.chapters)));
  }, []);

  const ChangeLanguage = () => {
    setLang(!Lang);
  };

  if (HindiChapBasics.length > 0 && EngChapBasics.length > 0) {
    return (
      <div className="basics">
        <center>
          <Fade bottom>
            <div className="heading">
              <button className="ChangeLangButton" onClick={ChangeLanguage}>
                English/Hindi
              </button>
            </div>
          </Fade>
        </center>
        <div className="chapters">
          {Lang === true
            ? EngChapBasics.map((data) => {
                return (
                  <Fade bottom delay={1000} duration={1500}>
                    <center>
                      <div
                        id={data.chapter_number}
                        key={data.chapter_number}
                        className="Chapters">
                        <Fade bottom delay={1000} duration={1500}>
                          <h2
                            onClick={() => {
                              history.push(`/chapter/${data.chapter_number}`);
                            }}>
                            Chapter-{data.chapter_number}
                          </h2>
                        </Fade>
                        <Fade bottom delay={1000} duration={1500}>
                          <h3>
                            {data.name} ({data.name_meaning})
                          </h3>
                        </Fade>
                        <Fade bottom delay={1000} duration={1500}>
                          <h4>Number of Shlokas : {data.verses_count}</h4>
                        </Fade>
                        <Fade bottom delay={1000} duration={1500}>
                          {" "}
                          <p>{data.chapter_summary}</p>
                        </Fade>
                      </div>
                    </center>
                  </Fade>
                );
              })
            : HindiChapBasics.map((data) => {
                return (
                  <center>
                    <Fade bottom delay={1000} duration={1500}>
                      <div
                        id={data.chapter_number}
                        key={data.chapter_number}
                        className="Chapters">
                        <h2
                          onClick={() => {
                            indian.convert(
                              data.chapter_number,
                              "hindi",
                              "english",
                              function (err, res) {
                                if (err) {
                                  alert(err);
                                } else {
                                  history.push(`/chapter/${res}`);
                                }
                              }
                            );
                          }}
                          className="hindiData">
                          अध्याय-{data.chapter_number}
                        </h2>
                        <h3 className="hindiData">
                          {data.name} ({data.name_meaning})
                        </h3>
                        <h4 className="hindiData">
                          श्लोक संख्या : {data.verses_count}
                        </h4>
                        <p className="hindiData">{data.chapter_summary}</p>
                      </div>{" "}
                    </Fade>
                  </center>
                );
              })}
        </div>
        <Slide bottom>
          <center>
            <Link to="/table">
              <button className="GlossaryButton">Glossary</button>
            </Link>
          </center>
        </Slide>
      </div>
    );
  } else {
    return <JumpCircleLoading />;
  }
}

export default Basics;
