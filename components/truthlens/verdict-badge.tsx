import { CheckCircle2, CircleHelp, XCircle } from "lucide-react";
import type { Verdict } from "@/lib/types";
import { verdictDescriptions, verdictLabels } from "@/lib/utils";
const config={supported:{icon:CheckCircle2,styles:"bg-success/10 text-success ring-success/20"},contradicted:{icon:XCircle,styles:"bg-danger/10 text-danger ring-danger/20"},uncertain:{icon:CircleHelp,styles:"bg-warning/10 text-warning ring-warning/20"}};
export function VerdictBadge({verdict}:{verdict:Verdict}){const{icon:Icon,styles}=config[verdict];return <span title={verdictDescriptions[verdict]} className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles}`}><Icon className="size-3.5"/>{verdictLabels[verdict]}</span>}

