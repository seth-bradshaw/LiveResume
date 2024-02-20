'use client'

import Content from "@/components/content/Content";
import Header from "@/components/sidenav/Header";
import { useEffect, useState } from "react";
import '../scrollbar.css'

export default function Home() {
  const [clientX, setClientX] = useState();
  const [clientY, setClientY] = useState();

  const trackMouseMovement = (e) => {
    setClientX(e.pageX);
    setClientY(e.pageY);
  }
  console.log(clientY)
  useEffect(() => {
    window.addEventListener('mousemove', trackMouseMovement)
  }, [])

  return (
    <div id='_next'>

    <div className="flex min-h-screen bg-slate-900 text-slate-400 relative">

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 h-full">
      <div
        class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Content />
        </div>
      </div>
    </div>
          
    </div>
  );
}
