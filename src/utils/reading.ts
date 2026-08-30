export interface ReadingStats {
  words: number;
  minutes: number;
}

export function getReadingStats(markdown: string): ReadingStats {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~\-|]/g, ' ')
    .replace(/\s+/g, ' ');

  const cjk = text.match(/[\u4e00-\u9fff]/g)?.length ?? 0;
  const latin = text.match(/[a-zA-Z0-9]+/g)?.length ?? 0;
  const words = cjk + latin;
  const minutes = Math.max(1, Math.ceil(cjk / 300 + latin / 200));
  return { words, minutes };
}
