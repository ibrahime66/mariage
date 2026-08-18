import { ImageResponse } from "next/og";
import { weddingConfig } from "@/lib/weddingData";

// Générée statiquement au build (compatible `output: export`) — aucune
// dépendance réseau, aucun backend : Next.js produit un PNG figé.
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFDF8",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
        }}
      >
        {/* Taches de couleur, façon fond du site */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: 60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "rgba(242, 137, 109, 0.35)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: 20,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "rgba(235, 187, 78, 0.4)",
            filter: "blur(10px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "3px solid #241F1A",
            backgroundColor: "#EBBB4E",
            borderRadius: 999,
            padding: "10px 26px",
            fontSize: 26,
            fontWeight: 700,
            color: "#241F1A",
            transform: "rotate(-2deg)",
          }}
        >
          Une histoire en cours d&apos;écriture
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 78,
            fontWeight: 800,
            color: "#241F1A",
            textAlign: "center",
            letterSpacing: -2,
            padding: "0 60px",
          }}
        >
          {weddingConfig.groom.name}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 34,
            fontWeight: 700,
            color: "#EA5B3C",
          }}
        >
          Rendez-vous en&nbsp;{weddingConfig.weddingMonthLabel}
        </div>
      </div>
    ),
    { ...size }
  );
}
