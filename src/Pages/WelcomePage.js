import React from "react";
import "./MainPage.css";

function WelcomePage() {
  return (
    <div>
      <br />
      <br />
      <div className="center biggerandbetter">
        ברוכים הבאים למסעדת רוי ובניו!!!
      </div>
      <br /> <br />
      <div className="center biggerandbetter">
        ⬆למעבר לתפריט אנא לחצו על כפתור התפריט⬆
      </div>
      <br />
      <br />
      <div className="center">
        <img
          style={{ width: "400px", height: "400px" }}
          src="https://images.squarespace-cdn.com/content/v1/63a6f5cec238cd110ae9b447/258d5258-2edb-4967-9093-a7b33f0a84d6/compress_wonder_gif.gif"
          alt="food gif"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
