import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Dave Patrick Bulaso - Full-Stack Developer & Automation Engineer";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 35%, #ffffff 70%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 80px 80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Blue left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "8px",
            background: "#2563EB",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#22C55E",
            }}
          />
          <span style={{ color: "#16A34A", fontSize: "20px", fontWeight: 500 }}>
            Available for freelance & remote roles
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: 800,
            color: "#111827",
            lineHeight: 1.05,
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          Dave Patrick Bulaso
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "30px",
            color: "#2563EB",
            fontWeight: 600,
            marginBottom: "48px",
          }}
        >
          Full-Stack Developer & Automation Engineer
        </div>

        {/* Tech chips */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Next.js", "TypeScript", "Flutter", "Python", "Supabase"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  background: "#EFF6FF",
                  border: "1.5px solid #BFDBFE",
                  borderRadius: "9999px",
                  padding: "6px 18px",
                  fontSize: "18px",
                  color: "#1D4ED8",
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "18px",
            color: "#9CA3AF",
          }}
        >
          davepatrickbulaso.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
