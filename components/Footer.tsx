import { weddingConfig } from "@/lib/weddingData";

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-dashed border-ink/15 px-6 py-14 text-center">
      <p className="font-display mb-3 text-base font-bold text-ink">
        {weddingConfig.groom.name} &amp; {weddingConfig.bride.name}
      </p>
      <p className="text-sm text-ink-muted">
        Conçu avec beaucoup d&apos;amour et de lignes de code par{" "}
        {weddingConfig.groom.name}.
      </p>
      <p className="eyebrow-tag mt-5">
        {weddingConfig.weddingMonthLabel} · In Sha Allah
      </p>
    </footer>
  );
}
