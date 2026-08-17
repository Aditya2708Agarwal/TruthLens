import { AppShell } from "@/components/truthlens/app-shell";
import { Skeleton } from "@/components/ui/skeleton";
export default function ReportLoading(){return <AppShell title="Verification report" description="Preparing claim-level results…"><div className="space-y-6"><div className="card grid gap-5 p-6 md:grid-cols-[150px_1fr]"><Skeleton className="size-32 rounded-full"/><div className="space-y-4"><Skeleton className="h-5 w-48"/><Skeleton className="h-4 w-full"/><Skeleton className="h-4 w-4/5"/></div></div><div className="grid gap-4 lg:grid-cols-2"><Skeleton className="h-40"/><Skeleton className="h-40"/><Skeleton className="h-40"/></div></div></AppShell>}

