import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
export function ComingSoon({icon:Icon,title,description}:{icon:LucideIcon;title:string;description:string}){return <div className="grid min-h-[60vh] place-items-center"><div className="max-w-md text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl border border-primary/15 bg-primary/5 text-primary"><Icon className="size-6"/></div><span className="mt-5 inline-block rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">Coming in Phase 2</span><h2 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p><Link className="button button-primary mt-6 h-10 px-4" href="/analyze">Analyze a response <ArrowRight className="size-4"/></Link></div></div>}

