/** @format */

import React, { useEffect } from "react";
import "../styles/Shloka.css";
import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";
import { selectShlokaDataDetails } from "../redux/slice";
function Shloka() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const shlokaDets = useSelector(selectShlokaDataDetails);
  const ShlokaText = (t) => {
    const newText = t.split("\n").map((str) => <p className="text">{str}</p>);
    return newText;
  };
  document.addEventListener(
    "play",
    function (e) {
      var audios = document.getElementsByClassName("audioPlayer");
      for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] !== e.target) {
          audios[i].pause();
        }
      }
    },
    true
  );
  const hindiNumerals = [
    "१",
    "२",
    "३",
    "४",
    "५",
    "६",
    "७",
    "८",
    "९",
    "१०",
    "११",
    "१२",
    "१३",
    "१४",
    "१५",
    "१६",
    "१७",
    "१८",
  ];

  return (
    <div className="singleShloka">
      <div className="shlokDets">
        <h2>
          Chapter No : {shlokaDets.chapterNo}(
          {hindiNumerals[shlokaDets.chapterNo - 1]})
        </h2>
        <h3>
          Verse No : {shlokaDets.ShlokaNumber}({shlokaDets.noInHindi})
        </h3>
        <h4>Verse Text</h4>
        {ShlokaText(shlokaDets.text)}
        <h4>
          Word-Meanings/<span className="shlokaHindi">शब्दार्थ</span>{" "}
        </h4>
        <p className="shlokaHindi">{shlokaDets.hindiWordsMeanings}</p>
        <h4>
          Meaning/<span className="shlokaHindi">अनुवाद</span>
        </h4>
        <p className="shlokaHindi">{shlokaDets.meaning}</p>
        <p className="shlokaEngData">{shlokaDets.englishMeaning}</p>
        <h4>Transliteration</h4>
        <p className="shlokaEngData">{shlokaDets.transliteration}</p>
        <h4>Commentary in Kashmiri (कॉशुर) </h4>
        <center>
          <ReactAudioPlayer
            className="audioPlayer"
            style={{
              width: "95%",
              height: "8vh",
            }}
            src={shlokaDets.songUrl}
            autoPlay={false}
            controls
            controlsList="nodownload"
          />
        </center>
      </div>
    </div>
  );
}

export default Shloka;
