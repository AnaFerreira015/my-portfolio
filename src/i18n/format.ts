import type { Lang } from "./config";
import { ui } from "./ui";

/**
 * Formats "2023-09" as "Sep 2023" / "set. 2023".
 * Anything else (e.g. "2025") is returned unchanged.
 */
export const formatDate = (value: string, lang: Lang): string => {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return value;
  const month = ui[lang].months[Number(match[2]) - 1];
  return month ? `${month} ${match[1]}` : value;
};

/** "Sep 2023 - Feb 2026", or "2025 - Present" when there is no end date. */
export const formatPeriod = (start: string, end: string | undefined, lang: Lang): string =>
  `${formatDate(start, lang)} - ${end ? formatDate(end, lang) : ui[lang].present}`;
