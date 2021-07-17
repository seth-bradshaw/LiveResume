import React from "react";
import PageTitle from "./titles/PageTitle";

export default function LandingPage() {
  window.addEventListener('scroll', () => {
    console.log('here')
    const currentScroll = window.pageYOffset;
    let opacity;
    if (currentScroll <= 500) {
      opacity = 1 - currentScroll / 500;
    } else {
      opacity = 0;
    }
    document.querySelector(".scrollicon").style.opacity = opacity;
  })

  return (
    <div className="h-screen flex flex-col items-center justify-between content">
      <div></div>
      <div>
        <PageTitle title="Welcome." />
      </div>
      <div className="mb-5 scrollicon">
        <img
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
          width="60"
          alt="scrolling mouse animation"
          style={{ willChange: "opacity", opacity: "1" }}
        />
      </div>
    </div>
  );
}
