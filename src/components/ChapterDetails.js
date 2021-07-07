/** @format */

import indian from "indian-numbers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../styles/ChapterDetails.css";
import { db } from "../firebase/firebase";
import { db1 } from "../firebase/firebase2";
import { db2 } from "../firebase/firebase3";
import { db3 } from "../firebase/firebase4";
import { db4 } from "../firebase/firebase5";
import ShlokaInfo from "./ShlokaInfo";
import { useHistory } from "react-router-dom";
import { ArrowLeftRounded, ArrowRightRounded } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";

function ChapterDetails() {
  const chapterNo = useParams();
  const history = useHistory();
  var [EngChapDetails, setEngChapDetails] = useState([]);
  const [HindiChapDetails, setHindiChapDetails] = useState([]);
  const [shlokaAudio, setShlokaAudio] = useState([]);
  const [shlokaAudio1, setShlokaAudio1] = useState([]);
  const [shlokaAudio2, setShlokaAudio2] = useState([]);
  const [shlokaAudio3, setShlokaAudio3] = useState([]);
  const [shlokaAudio4, setShlokaAudio4] = useState([]);
  var engD = [];
  var HindiD = [];
  const engDataURL =
    "https://run.mocky.io/v3/92b462e0-4c57-4aa2-b616-2edab5f3d547";
  const HindiDataURL =
    "https://run.mocky.io/v3/a6f09537-1ecb-4142-96cd-499119e39953";

  useEffect(() => {
    fetch(engDataURL)
      .then((res) => res.json())
      .then((data) =>
        setEngChapDetails(Object.values(data.verses)[chapterNo.chapterNo - 1])
      );

    fetch(HindiDataURL)
      .then((res) => res.json())
      .then((data) =>
        setHindiChapDetails(Object.values(data.verses)[chapterNo.chapterNo - 1])
      );

    if (1 <= chapterNo.chapterNo <= 5) {
      db.collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [chapterNo]);
  useEffect(() => {
    if (6 <= chapterNo.chapterNo <= 9) {
      db1
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio1(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [chapterNo]);
  useEffect(() => {
    if (10 <= chapterNo.chapterNo <= 13) {
      db2
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio2(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [chapterNo]);
  useEffect(() => {
    if (14 <= chapterNo.chapterNo <= 16) {
      db3
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio3(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [chapterNo]);
  useEffect(() => {
    if (17 <= chapterNo.chapterNo <= 18) {
      db4
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio4(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [chapterNo]);

  function sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  }
  for (var i = 0; i < Object.entries(EngChapDetails).length; i++) {
    engD.push([
      parseInt(Object.entries(EngChapDetails)[i][0]),
      Object.entries(EngChapDetails)[i][1],
    ]);
  }
  for (var l = 0; l < Object.entries(HindiChapDetails).length; l++) {
    HindiD.push([
      parseInt(Object.entries(HindiChapDetails)[l][0]),
      Object.entries(HindiChapDetails)[l][1],
    ]);
  }

  const convertFromHindi = (e) => {
    var x;
    if (e.includes("-")) {
      var z = e.indexOf("-");
      e = e.split("-").join("");
      indian.convert(e, "hindi", "english", function (err, c) {
        if (err) {
          console.log(err);
        } else {
          x = c.slice(0, z) + "-" + c.slice(z, c.length);
        }
      });
    } else {
      indian.convert(e, "hindi", "english", function (err, c) {
        if (err) {
          alert(err);
        } else {
          x = c;
        }
      });
    }
    return x;
  };

  var x = [];
  for (var z = 0; z < engD.sort(sortFunction).length; z++) {
    var q = engD.sort(sortFunction)[z];
    if (q) {
      x.push(q[1].verse_number);
    }
  }
  const newX = [];
  while (x.length) newX.push(x.splice(0, 8));

  return (
    <div className="chapter">
      <div className="chapterHeading">
        <div className="chapterHeadingTitle">
          {chapterNo.chapterNo > 1 && (
            <Tooltip title="Previous Chapter">
              <ArrowLeftRounded
                onClick={() => {
                  history.push(
                    `/chapter/${parseInt(chapterNo.chapterNo) - 1}/#1`
                  );
                  window.location.reload();
                }}
                className="changeChap"
              />
            </Tooltip>
          )}
          <h2>Chapter(अध्याय)-{Object.values(chapterNo.chapterNo)}</h2>
          {chapterNo.chapterNo < 18 && (
            <Tooltip title="Next Chapter">
              <ArrowRightRounded
                onClick={() => {
                  history.push(
                    `/chapter/${parseInt(chapterNo.chapterNo) + 1}/#1`
                  );
                  window.location.reload();
                }}
                className="changeChap"
              />
            </Tooltip>
          )}
        </div>
        <center>
          <table className="TableOfShlokas">
            <tbody>
              {newX.map((t) => {
                return (
                  <tr key={t}>
                    {t.map((i) => {
                      return (
                        <td key={i}>
                          <a className="linktoShloka" href={`#${i}`}>
                            {i}
                          </a>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
      <div className="ChapterDets">
        <div className="shlokaByChapter">
          {HindiD.sort(sortFunction).length > 0 &&
            engD.sort(sortFunction).map((shlok) => {
              let hindi = HindiD.sort(sortFunction).find(
                (ele) =>
                  convertFromHindi(ele[1].verse_number) ===
                  shlok[1].verse_number
              );
              let URLshlok;
              if (shlokaAudio.length > 0) {
                URLshlok = shlokaAudio.find(
                  (ele) => ele.Number === shlok[1].verse_number
                );
              } else if (shlokaAudio1.length > 0) {
                URLshlok = shlokaAudio1.find(
                  (ele) => ele.Number === shlok[1].verse_number
                );
              } else if (shlokaAudio2.length > 0) {
                URLshlok = shlokaAudio2.find(
                  (ele) => ele.Number === shlok[1].verse_number
                );
              } else if (shlokaAudio3.length > 0) {
                URLshlok = shlokaAudio3.find(
                  (ele) => ele.Number === shlok[1].verse_number
                );
              } else {
                URLshlok = shlokaAudio4.find(
                  (ele) => ele.Number === shlok[1].verse_number
                );
              }
              if (hindi) {
                if (URLshlok) {
                  return (
                    <div className="shlokaDet" id={shlok[1].verse_number}>
                      <ShlokaInfo
                        key={shlok[1].verse_number}
                        number={shlok[1].verse_number}
                        hindiNumber={hindi[1].verse_number}
                        hindiWordsMeanings={hindi[1].word_meanings}
                        text={shlok[1].text}
                        hindiMeaning={hindi[1].meaning}
                        mp3={URLshlok.Shloka}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="shlokaDet" id={shlok[1].verse_number}>
                      <ShlokaInfo
                        key={shlok[1].verse_number}
                        number={shlok[1].verse_number}
                        hindiNumber={hindi[1].verse_number}
                        hindiWordsMeanings={hindi[1].word_meanings}
                        text={shlok[1].text}
                        hindiMeaning={hindi[1].meaning}
                        noComm="Commentary not available yet"
                      />
                    </div>
                  );
                }
              }
            })}
        </div>
      </div>
      <div className="footer">
        <center>
          <button
            className="homeButton"
            onClick={() => {
              history.push("/");
            }}>
            Go to HomePage
          </button>
        </center>
      </div>
    </div>
  );
}

export default ChapterDetails;
