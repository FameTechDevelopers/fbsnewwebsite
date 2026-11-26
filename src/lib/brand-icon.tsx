import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Renders the FBS globe (from the logo) on a brand-gradient square.
// Used by app/icon.tsx (favicon) and app/apple-icon.tsx (iPhone home screen).
export async function brandIcon(size: number, radius: number) {
  const globe = await readFile(join(process.cwd(), "public/images/globe-white.png"));
  const src = `data:image/png;base64,${globe.toString("base64")}`;
  const w = Math.round(size * 0.74);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: radius,
          background: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #8b5cf6 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={w} height={Math.round((w * 94) / 113)} alt="" />
      </div>
    ),
    { width: size, height: size },
  );
}
