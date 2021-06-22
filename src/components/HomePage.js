/** @format */

import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import { useHistory } from "react-router-dom";
import { PointSpreadLoading } from "react-loadingg";
import Fade from "react-reveal/Fade";
// import { db4, storage4 } from "../firebase/firebase5";
function HomePage() {
  const history = useHistory();
  const [backState, setBackState] = useState(false);

  useEffect(() => {
    fetch(
      "https://assets.entrepreneur.com/content/3x2/2000/1597240199-bhagavadgita-6s.jpg"
    ).then((res) => setBackState(res.ok));
  }, []);

  const goToMahatmya = () => {
    history.push("/geetamahatmya");
    window.location.reload();
  };

  // ------------------------To upload on firebase ----------------------------//

  // function buildVideoSelector() {
  //   const fileSelector = document.createElement("input");
  //   fileSelector.setAttribute("type", "file");
  //   return fileSelector;
  // }
  // const Selectphoto = (e) => {
  //   e.preventDefault();
  //   const fileSelector = buildVideoSelector();
  //   fileSelector.click();
  //   fileSelector.addEventListener("change", (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const uploadTask = storage4.ref(`chapter18/${file.name}`).put(file);
  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           var progress = Math.floor(
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //           );
  //           console.log("Upload is " + progress + "% done");
  //         },
  //         (error) => {
  //           console.log(error);
  //         },
  //         () => {
  //           uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //             db4
  //               .collection("Gita")
  //               .doc("18")
  //               .collection("Shlokas")
  //               .add({
  //                 Number: file.name.slice(6, file.name.length - 4),
  //                 Shloka: downloadURL,
  //               });
  //           });
  //         }
  //       );
  //     }
  //   });
  // };

  //---------------------------------------------------------------//

  if (backState) {
    return (
      <center>
        <div className="homePage">
          <div className="centerHome">
            <Fade bottom duration={1500}>
              <div className="details">
                <Fade bottom delay={1000} duration={1500}>
                  <p>Shrimad Bhagavad-Gita (श्रीमदभगवद् गीता)</p>
                </Fade>
                <Fade bottom delay={2000} duration={1500}>
                  <p>in Kashmiri (कॉशुर)</p>
                  <p>
                    By - Sh. Bhushan Lal Ji Bhat <b>(Sharnagat)</b>
                  </p>{" "}
                </Fade>
                <Fade bottom delay={3000} duration={1500}>
                  <center>
                    <button onClick={goToMahatmya}>Click here</button>
                  </center>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </center>
    );
  } else {
    return <PointSpreadLoading />;
  }
}

export default HomePage;
