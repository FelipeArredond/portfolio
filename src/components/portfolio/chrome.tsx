"use client";

import { useEffect, useState } from "react";

export function Chrome() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    function tick() {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="chrome">
      <div className="dots">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
      </div>
      <div className="chrome-title">
        — zsh — felipe@devops: ~/portfolio — 96×40
      </div>
      <div className="chrome-meta">{time}</div>
    </div>
  );
}
