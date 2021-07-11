/** @format */

import React, { useState, useEffect } from "react";
import "../styles/GeetaMahatmya.css";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import { CircleLoading } from "react-loadingg";
function GeetaMahatmya() {
  const [mahatmyaShlokas, setMahatmyaShlokas] = useState([]);
  const [mahaytmyaState, setMahaytmyaState] = useState(false);
  useEffect(() => {
    db.collection("Gita")
      .doc("777")
      .collection("GeetaMahatmya")
      .orderBy("Number", "asc")
      .onSnapshot((snapshot) =>
        setMahatmyaShlokas(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            shloka: doc.data(),
          }))
        )
      );
  }, []);
  const ShlokaText = (t) => {
    const newText = t.split("\n").map((str) => <p>{str}</p>);
    return newText;
  };
  const gotoShlokaArry = [1, 2, 3, 4, 5, 6, 7];
  if (mahaytmyaState) {
    return (
      <div className="geetaMahatmya">
        <center>
          <Pulse>
            <div className="mahatmyaTop">
              <div className="mahatmyaheadingtop">
                <div className="mahatmyaHeading">
                  <p>Shrimad BhagavadGeeta Mahatmya</p>
                  <p className="geetaMahatmyaHindiData">
                    {" "}
                    (श्रीमद भगवद-गीता माहात्म्यं)
                  </p>
                </div>
                <Link style={{ textDecoration: "none" }} to="/basics">
                  <h2 className="goToChapters">Go to Chapters</h2>
                </Link>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td className="gotoshlokatitle">Go to Shloka</td>
                    {gotoShlokaArry.map((number) => (
                      <td>
                        <a className="linkMahamtmya" href={`#${number}`}>
                          {number}
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Pulse>
          <div className="shloka">
            {mahatmyaShlokas.length > 0 ? (
              mahatmyaShlokas.map((shlok) => {
                return (
                  <div
                    id={shlok.shloka.Number}
                    key={shlok.shloka.Number}
                    className="mahatmyaShloka">
                    <h2>
                      Shloka{" "}
                      <span
                        id="mahatmyaShloka"
                        className="geetaMahatmyaHindiData">
                        (श्लोक)
                      </span>{" "}
                      - {shlok.shloka.Number}
                    </h2>
                    <p className="geetaMahatmyaHindiData">
                      {ShlokaText(shlok.shloka.Hindi)}
                    </p>
                    <p className="geetaMahatmyaHindiData">
                      {shlok.shloka["Hindi-Meaning"]}
                    </p>
                    <p>{ShlokaText(shlok.shloka.English)}</p>
                    <p>{shlok.shloka["English-Meaning"]}</p>
                  </div>
                );
              })
            ) : (
              <CircleLoading />
            )}
          </div>
        </center>
      </div>
    );
  } else {
    return (
      <div className="noShlokaPage">
        <div className="noShlokas">
          <button
            className="changeMahatmyaState"
            onClick={() => {
              setMahaytmyaState(true);
            }}>
            See Mahatmya Shlokas
          </button>
          <Link style={{ textDecoration: "none" }} to="/basics">
            <h2 className="gotochaptersdirect">Directly go to Chapters↪ </h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default GeetaMahatmya;
