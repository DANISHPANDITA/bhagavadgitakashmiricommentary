/** @format */

import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import { useHistory } from "react-router-dom";
import { PointSpreadLoading } from "react-loadingg";
import Fade from "react-reveal/Fade";

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
