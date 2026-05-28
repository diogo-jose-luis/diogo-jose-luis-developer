"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const labels: Record<string, string> = {
  pt: "PT",
  en: "EN",
  fr: "FR",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 rounded-full border border-border/50 bg-card/70 px-2 py-1 text-xs">
      <Languages className="h-3.5 w-3.5" />
      {["pt", "en", "fr"].map((l) => (
        <button
          key={l}
          className={`rounded-full px-2 py-1 transition ${
            locale === l ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          }`}
          onClick={() => router.replace(pathname, { locale: l })}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
