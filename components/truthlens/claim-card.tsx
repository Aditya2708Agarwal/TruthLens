import { ChevronRight } from "lucide-react";
import type { Claim } from "@/lib/types";
import { ConfidenceBar } from "./confidence-bar";
import { VerdictBadge } from "./verdict-badge";
const accents={supported:"hover:border-success/35 before:bg-success",contradicted:"hover:border-danger/35 before:bg-danger",uncertain:"hover:border-warning/35 before:bg-warning"};
export function ClaimCard({claim,index,selected,onSelect}:{claim:Claim;index:number;selected:boolean;onSelect:()=>void}){return <button onClick={onSelect} className={`relative w-full overflow-hidden rounded-xl border bg-card p-5 text-left shadow-sm transition before:absolute before:inset-y-0 before:left-0 before:w-1 hover:-translate-y-0.5 hover:shadow-md ${accents[claim.verdict]} ${selected?"border-primary ring-2 ring-primary/10":"border-border"}`}><div className="flex items-start justify-between gap-4"><div><span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Claim {index+1}</span><p className="mt-2 text-sm font-medium leading-6 sm:text-base">“{claim.text}”</p></div><ChevronRight className="mt-1 size-4 shrink-0 text-muted-foreground"/></div><div className="mt-4 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-end"><VerdictBadge verdict={claim.verdict}/><ConfidenceBar value={claim.confidence}/></div></button>}

