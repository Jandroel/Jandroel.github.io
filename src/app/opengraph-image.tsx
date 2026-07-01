import { ImageResponse } from "next/og";

export const alt = "Jandroel Portfolio";
export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #05060A 0%, #0B1020 48%, #12071A 100%)",
          color: "#F8FAFC",
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
            border: "1px solid rgba(103, 232, 249, 0.26)",
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#67E8F9", fontSize: 28 }}>
            Frontend + Backend + Databases
          </div>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1 }}>
            Jandroel
          </div>
          <div style={{ color: "#CBD5E1", fontSize: 36, lineHeight: 1.25 }}>
            Personal portfolio for selected projects, technical skills, and web experiences.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
