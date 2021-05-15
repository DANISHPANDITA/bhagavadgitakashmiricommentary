import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import { useHistory } from "react-router-dom";
import { PointSpreadLoading } from "react-loadingg";
import Flash from "react-reveal/Flash";

function HomePage() {
  const history = useHistory();
  const [backState, setBackState] = useState(false);

  const goToBasic = () => {
    history.push("/geetamahatmya");
  };

  useEffect(() => {
    fetch(
      "https://assets.entrepreneur.com/content/3x2/2000/1597240199-bhagavadgita-6s.jpg"
    ).then((res) => setBackState(res.ok));
  }, []);

  if (backState) {
    return (
      <center>
        <div className="homePage">
          <div className="centerHome">
            <Flash>
              <div className="details">
                <p>Shrimad Bhagavad-Gita (श्रीमदभगवद् गीता)</p>
                <p>in Kashmiri (कॉशुर)</p>
                <p>
                  By - Sh. Bhushan Lal Ji Bhat <b>(Sharnagat)</b>
                </p>
                <center>
                  <button onClick={goToBasic}>Click here.</button>
                </center>
              </div>
            </Flash>
          </div>
        </div>
      </center>
    );
  } else {
    return <PointSpreadLoading />;
  }
}

export default HomePage;
