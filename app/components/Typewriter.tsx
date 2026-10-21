"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const finished = !deleting && text === current;

    const timeout = setTimeout(
      () => {
        if (finished) {
          setDeleting(true);
        } else if (deleting && text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        } else {
          setText(current.slice(0, text.length + (deleting ? -1 : 1)));
        }
      },
      finished ? 1600 : deleting ? 35 : 80,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span>
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}