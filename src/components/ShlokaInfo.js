/** @format */

import React from "react";
import "../styles/ShlokaInfo.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToShlokaData } from "../redux/slice";
import { TiArrowRightThick } from "react-icons/ti";
function ShlokaInfo({
  number,
  transliteration,
  text,
  hindiNumber,
  englishMeaning,
  hindiWordsMeanings,
  hindiMeaning,
  mp3,
  chapterNo,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const ShlokaText = (t) => {
    const newText = t.split("\n").map((str) => <p className="text">{str}</p>);
    return newText;
  };
  const goToShlok = (e) => {
    dispatch(
      addToShlokaData({
        chapterNo: chapterNo,
        ShlokaNumber: number,
        text: text,
        noInHindi: hindiNumber,
        meaning: hindiMeaning,
        englishMeaning: englishMeaning,
        songUrl: mp3,
        transliteration: transliteration,
        hindiWordsMeanings: hindiWordsMeanings,
      })
    );
    history.push(`/chapter/${chapterNo}/verse/${number}`);
  };
  return (
    <center>
      <div className="ShlokaInfo">
        <h2 onClick={goToShlok}>
          {number} <TiArrowRightThick />
        </h2>
        {ShlokaText(text)}

        <p className="meaning">
          <span className="bolderText">अनुवाद</span>
          {hindiMeaning}
        </p>
      </div>
    </center>
  );
}

export default ShlokaInfo;
