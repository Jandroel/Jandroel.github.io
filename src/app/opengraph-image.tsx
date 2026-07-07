import { ImageResponse } from "next/og";

export const alt = "Jandroel Portfolio by Gustavo Jandroel Aguirre Rodríguez";
export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #07070A 0%, #11131A 50%, #15100D 100%)",
        color: "#FFF8EF",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "center",
        padding: 72,
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(232, 74, 42, 0.3)",
          borderRadius: 18,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          padding: 56,
          width: "100%",
        }}
      >
        <div style={{ color: "#F0B19F", fontSize: 28 }}>
          Software Engineering Portfolio
        </div>
        <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1 }}>Jandroel</div>
        <div style={{ color: "#F0B19F", fontSize: 28, lineHeight: 1.2 }}>
          Gustavo Jandroel Aguirre Rodríguez
        </div>
        <div style={{ color: "#D9CDBF", fontSize: 36, lineHeight: 1.25 }}>
          Building my path one project at a time.
        </div>
      </div>
    </div>,
    size,
  );
}
