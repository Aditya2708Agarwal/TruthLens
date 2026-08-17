export type Verdict = "supported" | "contradicted" | "uncertain";
export type VerificationMode = "general" | "academic" | "uploaded";
export type SourceType = "research-paper" | "official-documentation" | "news-article" | "reference";
export interface Evidence { id:string; title:string; passage:string; sourceType:SourceType; relevance:number; url?:string; }
export interface Claim { id:string; text:string; verdict:Verdict; confidence:number; explanation:string; evidence:Evidence[]; }
export interface VerificationReport { id:string; question?:string; response:string; reliabilityScore:number; createdAt:string; mode:VerificationMode; claims:Claim[]; }

