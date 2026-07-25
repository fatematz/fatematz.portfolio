"use client";

/**
 * Usage:
 * <Typewriter
 *   words={["MERN Stack Developer", "Full Stack Developer", "Problem Solver"]}
 *   typingSpeed={80}
 *   deletingSpeed={40}
 *   pauseDuration={2000}
 *   className="text-[#a0a0a0]"
 *   cursorClassName="text-[#e63946]"
 * />
 */

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Typewriter = ({
  words = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = "",
  cursorClassName = "",
}) => {
  const [display, setDisplay] = useState("");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const stateRef = useRef({ word: 0, char: 0, deleting: false });

  useEffect(() => {
    if (reduceMotion || words.length === 0) return undefined;

    let timeoutId;

    const tick = () => {
      const state = stateRef.current;
      const word = words[state.word];

      if (!state.deleting) {
        state.char += 1;
        setDisplay(word.slice(0, state.char));
        if (state.char === word.length) {
          state.deleting = true;
          timeoutId = setTimeout(tick, pauseDuration);
          return;
        }
        timeoutId = setTimeout(tick, typingSpeed);
      } else {
        state.char -= 1;
        setDisplay(word.slice(0, state.char));
        if (state.char === 0) {
          state.deleting = false;
          state.word = (state.word + 1) % words.length;
        }
        timeoutId = setTimeout(tick, deletingSpeed);
      }
    };

    timeoutId = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [reduceMotion, words, typingSpeed, deletingSpeed, pauseDuration]);

  if (words.length === 0) return null;

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  if (reduceMotion) {
    return (
      <span className={`relative inline-block align-top ${className}`}>
        <span aria-hidden className="invisible">
          {longest}
        </span>
        <span className="absolute inset-0">{words[0]}</span>
      </span>
    );
  }

  return (
    <span className={`relative inline-block align-top ${className}`}>
      <span aria-hidden className="invisible">
        {longest}
      </span>
      <span className="absolute inset-0 left-0 whitespace-nowrap">
        {display}
        <span className={`animate-pulse ${cursorClassName}`}>|</span>
      </span>
    </span>
  );
};

export default Typewriter;
