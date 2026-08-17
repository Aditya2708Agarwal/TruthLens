import { ExternalLink } from "lucide-react";
import type { Evidence } from "@/lib/types";
import { formatPercent } from "@/lib/utils";
import { SourceBadge } from "./source-badge";
export function EvidenceCard({evidence}:{evidence:Evidence}){return <article className="rounded-xl border border-border bg-background p-4"><div className="flex items-start justify-between gap-3"><SourceBadge type={evidence.sourceType}/><span className="text-xs font-medium text-muted-foreground">{formatPercent(evidence.relevance)} relevant</span></div><h4 className="mt-3 text-sm font-semibold leading-5">{evidence.title}</h4><blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-sm leading-6 text-muted-foreground">“{evidence.passage}”</blockquote>{evidence.url&&<a className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline" href={evidence.url} target="_blank" rel="noreferrer">View source <ExternalLink className="size-3"/></a>}</article>}

