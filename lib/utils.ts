import type { Verdict } from "./types";
export const formatPercent=(value:number)=>`${Math.round(value*100)}%`;
export const verdictLabels:Record<Verdict,string>={supported:"Supported",contradicted:"Contradicted",uncertain:"Uncertain"};
export const verdictDescriptions:Record<Verdict,string>={supported:"Credible evidence directly supports this claim.",contradicted:"Credible evidence conflicts with this claim.",uncertain:"Available evidence is incomplete or the claim is subjective."};
export function copyText(value:string){ return navigator.clipboard.writeText(value); }

