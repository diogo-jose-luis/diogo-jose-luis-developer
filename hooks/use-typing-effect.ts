"use client";

import { useEffect, useState } from "react";

export function useTypingEffect(words: string[], speed = 80) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === current.length) {
          setDeleting(true);
          return;
        }
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
          return;
        }
        setSubIndex((value) => value + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, speed, subIndex, words]);

  return words[index].substring(0, subIndex);
}
