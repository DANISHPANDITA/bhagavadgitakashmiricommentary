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
import { Link } from "react-router-dom";

function ChapterDetails() {
  const chapterNo = useParams();
  var [EngChapDetails, setEngChapDetails] = useState([]);
  const [HindiChapDetails, setHindiChapDetails] = useState([]);
  const [shlokaAudio, setShlokaAudio] = useState([]);
  var engD = [];
  const engDataURL =
    "https://run.mocky.io/v3/182c2a35-c403-461d-890e-23181714350e";
  const HindiDataURL =
    "https://run.mocky.io/v3/d7e0c5f4-965a-48e6-b241-1bcf9cc021fc";

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
    if (6 <= chapterNo.chapterNo <= 9) {
      db1
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio(snapshot.docs.map((doc) => doc.data()))
        );
    }
    if (10 <= chapterNo.chapterNo <= 13) {
      db2
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio(snapshot.docs.map((doc) => doc.data()))
        );
    }
    if (14 <= chapterNo.chapterNo <= 16) {
      db3
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio(snapshot.docs.map((doc) => doc.data()))
        );
    }
    if (17 <= chapterNo.chapterNo <= 18) {
      db4
        .collection("Gita")
        .doc(chapterNo.chapterNo)
        .collection("Shlokas")
        .onSnapshot((snapshot) =>
          setShlokaAudio(snapshot.docs.map((doc) => doc.data()))
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

  const convertFromHindi = (e) => {
    var x;
    if (e.includes("-")) {
      e = e.split("-").join("");
      indian.convert(e, "hindi", "english", function (err, c) {
        if (err) {
          console.log(err);
        } else {
          x = c.slice(0, 2).concat("-").concat(c.slice(2, 4));
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
  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  const findShlokaAudio = (e) => {
    if (e.includes("-")) {
      var x = getPosition(e, "-", 1);
      return e.slice(x + 1, e.length);
    } else {
      return e;
    }
  };

  return (
    <div className="chapter">
      <div className="chapterHeading">
        <center>
          <h2>Chapter(अध्याय)-{Object.values(chapterNo.chapterNo)}</h2>
        </center>
      </div>
      <div className="shlokaByChapter">
        {engD.sort(sortFunction).map((shlok) => {
          let hindi = Object.values(HindiChapDetails).find(
            (ele) =>
              convertFromHindi(ele.verse_number) === shlok[1].verse_number
          );
          let URLshlok = shlokaAudio.find(
            (ele) => findShlokaAudio(ele.Number) === shlok[1].verse_number
          );

          if (hindi) {
            if (URLshlok) {
              return (
                <ShlokaInfo
                  key={shlok[1].verse_number}
                  number={shlok[1].verse_number}
                  hindiNumber={hindi.verse_number}
                  hindiWordsMeanings={hindi.word_meanings}
                  text={shlok[1].text}
                  hindiMeaning={hindi.meaning}
                  meaning={shlok[1].meaning}
                  word_meanings={shlok[1].word_meanings}
                  transliteration={shlok[1].transliteration}
                  mp3={URLshlok.Shloka}
                />
              );
            } else {
              return (
                <ShlokaInfo
                  key={shlok[1].verse_number}
                  number={shlok[1].verse_number}
                  hindiNumber={hindi.verse_number}
                  hindiWordsMeanings={hindi.word_meanings}
                  text={shlok[1].text}
                  hindiMeaning={hindi.meaning}
                  meaning={shlok[1].meaning}
                  word_meanings={shlok[1].word_meanings}
                  transliteration={shlok[1].transliteration}
                />
              );
            }
          }
        })}
      </div>
      <div className="footerButtons">
        <div className="changeChapters">
          {chapterNo.chapterNo > 1 && (
            <Link to={`/chapter/${parseInt(chapterNo.chapterNo) - 1}`}>
              <p className="changeChapter">
                {" "}
                ↩ Previous Chapter (पिछला अध्याय)
              </p>
            </Link>
          )}
          {chapterNo.chapterNo < 18 && (
            <Link to={`/chapter/${parseInt(chapterNo.chapterNo) + 1}`}>
              <p className="changeChapter"> Next Chapter (अगला अध्याय) ↪ </p>
            </Link>
          )}
        </div>
        <Link to="/">
          <p className="homepageButton"> Go to Homepage </p>
        </Link>
      </div>
    </div>
  );
}

export default ChapterDetails;
