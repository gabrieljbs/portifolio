"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/TypewriterText.module.css";

const PHRASES = [
  "Desenvolvedor Fullstack",
  "Apaixonado por tecnologia",
  "Construtor de experiências",
  "Amante de código limpo",
];

const TYPING_SPEED = 65;
const ERASE_SPEED = 35;
const PAUSE_AFTER = 1800;
const PAUSE_BEFORE = 400;

type Phase = "typing" | "pausing" | "erasing";

export default function TypewriterText() {
  const [mounted, setMounted] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const current = PHRASES[phraseIdx];

    let t: number | undefined;

    if (phase === "typing") {
      if (charIdx < current.length) {
        t = window.setTimeout(() => setCharIdx((i) => i + 1), TYPING_SPEED);
      } else {
        t = window.setTimeout(() => setPhase("pausing"), PAUSE_AFTER);
      }
    }

    if (phase === "pausing") {
      t = window.setTimeout(() => setPhase("erasing"), PAUSE_BEFORE);
    }

    if (phase === "erasing") {
      if (charIdx > 0) {
        t = window.setTimeout(() => setCharIdx((i) => i - 1), ERASE_SPEED);
      } else {
        // move to next phrase and start typing
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
        setPhase("typing");
      }
    }

    return () => {
      if (t) clearTimeout(t);
    };
  }, [mounted, phraseIdx, charIdx, phase]);

  const displayed = PHRASES[phraseIdx].slice(0, charIdx);

  if (!mounted) {
    return (
      <span className={styles.typewriterText} aria-live="polite">
        Desenvolvedor Fullstack
        <span className={styles.typewriterCursor} aria-hidden="true" />
      </span>
    );
  }

  return (
    <span className={styles.typewriterText} aria-live="polite">
      {displayed}
      <span className={styles.typewriterCursor} aria-hidden="true" />
    </span>
  );
}
