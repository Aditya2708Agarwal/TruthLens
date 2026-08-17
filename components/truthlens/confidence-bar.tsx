import { formatPercent } from "@/lib/utils";
export function ConfidenceBar({value}:{value:number}){return <div><div className="mb-2 flex items-center justify-between text-xs"><span className="text-muted-foreground">Confidence</span><span className="font-semibold">{formatPercent(value)}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all duration-500" style={{width:`${value*100}%`}} /></div></div>}

