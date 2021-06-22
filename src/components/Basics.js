/** @format */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../styles/Basics.css";
import indian from "indian-numbers";
import { Link } from "react-router-dom";
import { JumpCircleLoading } from "react-loadingg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { DoubleArrowRounded } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

function Basics() {
  const [EngChapBasics, setEngChapBasics] = useState([]);
  const [HindiChapBasics, setHindiChapBasics] = useState([]);
  const [Lang, setLang] = useState(true);
  const history = useHistory();
  const hindiDataURL =
    "https://run.mocky.io/v3/43f69f4d-213b-42c1-87f7-8f991bdbea95";
  const engDataURL =
    "https://run.mocky.io/v3/a800d4de-965f-44c6-ab25-9003270af0bd";

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
                  <Fade bottom>
                    <center>
                      <div
                        id={data.chapter_number}
                        key={data.chapter_number}
                        className="Chapters">
                        <h2>
                          Chapter-{data.chapter_number}
                          <Tooltip
                            title={`Go to chapter ${data.chapter_number}`}>
                            <DoubleArrowRounded
                              className="gotodetail"
                              onClick={() => {
                                history.push(`/chapter/${data.chapter_number}`);
                              }}
                            />
                          </Tooltip>
                        </h2>
                        <h3>
                          {data.name} ({data.name_meaning})
                        </h3>
                        <h4>Number of Shlokas : {data.verses_count}</h4>
                        <p>{data.chapter_summary}</p>
                      </div>
                    </center>
                  </Fade>
                );
              })
            : HindiChapBasics.map((data) => {
                return (
                  <center>
                    <Fade bottom>
                      <div
                        id={data.chapter_number}
                        key={data.chapter_number}
                        className="Chapters">
                        <h2>
                          अध्याय-{data.chapter_number}
                          <Tooltip
                            title={`Go to chapter ${data.chapter_number}`}>
                            <DoubleArrowRounded
                              className="gotodetail"
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
                            />
                          </Tooltip>
                        </h2>
                        <h3>
                          {data.name} ({data.name_meaning})
                        </h3>
                        <h4>श्लोक संख्या : {data.verses_count}</h4>
                        <p>{data.chapter_summary}</p>
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
