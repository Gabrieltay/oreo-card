"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

function loadEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${EMBED_SCRIPT_SRC}"]`
  );
  if (existing) {
    return new Promise((resolve) =>
      existing.addEventListener("load", () => resolve(), { once: true })
    );
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export default function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="min-h-[500px] w-full overflow-hidden rounded-2xl bg-cream-dark"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          margin: 0,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}
