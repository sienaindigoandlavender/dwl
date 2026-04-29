import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dancing with Lions — Travel technology for people who want to arrive considered";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const serif = await fetch(
    "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
  )
    .then((r) => r.text())
    .then((css) => {
      const match = css.match(/url\((https:[^)]+\.woff2)\)/);
      if (!match) return null;
      return fetch(match[1]).then((r) => r.arrayBuffer());
    })
    .catch(() => null);

  const fonts = serif
    ? [
        {
          name: "Instrument Serif",
          data: serif,
          style: "normal" as const,
          weight: 400 as const
        }
      ]
    : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Instrument Serif, serif"
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#a3a3a3",
            fontFamily: "monospace"
          }}
        >
          DANCING WITH LIONS
        </div>

        <div
          style={{
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            maxWidth: 1000,
            display: "flex"
          }}
        >
          Travel technology for people who want to arrive considered.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#a3a3a3",
            fontSize: 22,
            fontFamily: "monospace",
            letterSpacing: "0.04em"
          }}
        >
          <div>Six product lines. One umbrella.</div>
          <div>dancewithlions.com</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
