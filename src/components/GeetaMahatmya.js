import React, { useState, useEffect } from "react";
import "../styles/GeetaMahatmya.css";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import { CircleLoading } from "react-loadingg";
function GeetaMahatmya() {
  const [mahatmyaShlokas, setMahatmyaShlokas] = useState([]);
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

  return (
    <div className="geetaMahatmya">
      <center>
        <Pulse>
          <div className="mahatmyaheadingtop">
            <div className="mahatmyaHeading">
              <p>Shrimad BhagavadGeeta Mahatmya</p>
              <p> (श्रीमद भगवद-गीता माहात्म्यं)</p>
            </div>
            <Link to="/basics">
              <h2 className="goToChapters">Go to Chapters</h2>
            </Link>
          </div>
        </Pulse>
        <div className="shloka">
          {mahatmyaShlokas.length > 0 ? (
            mahatmyaShlokas.map((shlok) => {
              return (
                <div key={shlok.shloka.Number} className="mahatmyaShloka">
                  <h2>Shloka (श्लोक) - {shlok.shloka.Number}</h2>
                  <p>{shlok.shloka.Hindi}</p>
                  <p>{shlok.shloka["Hindi-Meaning"]}</p>
                  <p>{shlok.shloka.English}</p>
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
}

export default GeetaMahatmya;
