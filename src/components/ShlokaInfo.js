import React from "react";
import "../styles/ShlokaInfo.css";
import ReactAudioPlayer from "react-audio-player";
function ShlokaInfo({
  meaning,
  number,
  text,
  transliteration,
  hindiNumber,
  hindiWordsMeanings,
  hindiMeaning,
  mp3,
}) {
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
  return (
    <center>
      <div className="ShlokaInfo">
        <h2>
          {number} ({hindiNumber})
        </h2>
        <p className="text">{text}</p>
        <p className="wordMeaning">
          <span className="bolderText">शब्दार्थ</span> {hindiWordsMeanings}
        </p>
        <p className="transliteration">
          <span className="bolderText"> Transliteration</span>
          {transliteration}
        </p>
        <p className="meaning">
          <span className="bolderText">Meaning</span>
          {meaning}
          <span className="bolderText">अनुवाद</span>
          {hindiMeaning}
        </p>
        <p className="meaning">
          <span className="bolderText">Commentary in Kashmiri</span>
        </p>
        <ReactAudioPlayer
          className="audioPlayer"
          style={{
            width: "60%",
            height: "10vh",
            color: "#353434",
          }}
          src={mp3}
          autoPlay={false}
          controls
          controlsList="nodownload"
        />
      </div>
    </center>
  );
}

export default ShlokaInfo;
