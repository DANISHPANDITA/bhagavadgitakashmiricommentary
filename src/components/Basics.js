import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../styles/Basics.css";
import indian from "indian-numbers";
import { Link } from "react-router-dom";
import { JumpCircleLoading } from "react-loadingg";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
function Basics() {
  const [EngChapBasics, setEngChapBasics] = useState([]);
  const [HindiChapBasics, setHindiChapBasics] = useState([]);
  const [Lang, setLang] = useState(true);
  const history = useHistory();
  const hindiDataURL =
    "https://run.mocky.io/v3/d7e0c5f4-965a-48e6-b241-1bcf9cc021fc";
  const engDataURL =
    "https://run.mocky.io/v3/182c2a35-c403-461d-890e-23181714350e";

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
          <Zoom top>
            <div className="heading">
              <button className="ChangeLangButton" onClick={ChangeLanguage}>
                English/Hindi
              </button>
            </div>
          </Zoom>
        </center>
        <div className="chapters">
          <Jump>
            {Lang === true
              ? EngChapBasics.map((data) => {
                  return (
                    <center>
                      <div key={data.chapter_number} className="Chapters">
                        <h2
                          onClick={() => {
                            history.push(`/chapter/${data.chapter_number}`);
                          }}
                        >
                          Chapter-{data.chapter_number}
                        </h2>
                        <h3>
                          {data.name} ({data.name_meaning})
                        </h3>
                        <h4>Number of Shlokas : {data.verses_count}</h4>
                        <p>{data.chapter_summary}</p>
                      </div>
                    </center>
                  );
                })
              : HindiChapBasics.map((data) => {
                  return (
                    <center>
                      <div key={data.chapter_number} className="Chapters">
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
                        >
                          अध्याय-{data.chapter_number}
                        </h2>
                        <h3>
                          {data.name} ({data.name_meaning})
                        </h3>
                        <h4>श्लोक संख्या : {data.verses_count}</h4>
                        <p>{data.chapter_summary}</p>
                      </div>
                    </center>
                  );
                })}{" "}
          </Jump>
        </div>{" "}
        <Slide bottom>
          <center>
            <Link to="/table">
              <button className="GlossaryButton">Glossary</button>
            </Link>
          </center>{" "}
        </Slide>
      </div>
    );
  } else {
    return <JumpCircleLoading />;
  }
}

export default Basics;
