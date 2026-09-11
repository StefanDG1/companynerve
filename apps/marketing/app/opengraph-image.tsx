import { ImageResponse } from "next/og";
export const alt = "CompanyNerve. A free foundation for your next SaaS.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 75,
        width: "100%",
        height: "100%",
        background: "#f7f9fc",
        color: "#182331",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, color: "#2456d8" }}>
        CompanyNerve
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          lineHeight: 1.1,
          maxWidth: 950,
        }}
      >
        A free foundation for your next SaaS.
      </div>
      <div style={{ display: "flex", fontSize: 26 }}>
        MIT licensed. Your own product.
      </div>
    </div>,
    size,
  );
}
