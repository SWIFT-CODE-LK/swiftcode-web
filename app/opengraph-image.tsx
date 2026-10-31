import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0d2535",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "12px",
              backgroundColor: "#f97316",
            }}
          />
          <div
            style={{ color: "#f97316", fontSize: 28, letterSpacing: "6px" }}
          >
            SWIFTCODE
          </div>
        </div>
        <div style={{ color: "#ffffff", fontSize: 64, fontWeight: 700 }}>
          ERP · POS · Web · Mobile
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 32 }}>
          Software company in Sri Lanka
        </div>
      </div>
    ),
    { ...size },
  );
}
