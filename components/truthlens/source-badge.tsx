import type { SourceType } from "@/lib/types";
const labels:Record<SourceType,string>={"research-paper":"Research paper","official-documentation":"Official source","news-article":"News article",reference:"Reference"};
export function SourceBadge({type}:{type:SourceType}){return <span className="rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">{labels[type]}</span>}

