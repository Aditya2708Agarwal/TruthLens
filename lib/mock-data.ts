import type { VerificationReport } from "./types";

export const exampleQuestion="When was BERT introduced, what data was it trained on, and is it still the best NLP model?";
export const exampleResponse="BERT was introduced by Google in 2018 and significantly changed natural language processing. The original BERT model was trained on BooksCorpus and English Wikipedia. BERT was trained on more than 100 languages. BERT remains the best NLP model today.";

export const mockReport:VerificationReport={
  id:"report-001",question:exampleQuestion,response:exampleResponse,reliabilityScore:78,createdAt:"2026-08-17T10:24:00Z",mode:"general",
  claims:[
    {id:"claim-1",text:"BERT was introduced by Google in 2018.",verdict:"supported",confidence:.96,explanation:"The original BERT paper was published by researchers at Google AI Language in 2018.",evidence:[{id:"ev-1",title:"BERT: Pre-training of Deep Bidirectional Transformers",passage:"We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers.",sourceType:"research-paper",relevance:.97,url:"https://arxiv.org/abs/1810.04805"}]},
    {id:"claim-2",text:"The original BERT model was trained on BooksCorpus and English Wikipedia.",verdict:"supported",confidence:.98,explanation:"The paper explicitly names BooksCorpus and English Wikipedia as the pre-training corpus.",evidence:[{id:"ev-2",title:"BERT: Pre-training of Deep Bidirectional Transformers",passage:"The model was pretrained using BooksCorpus (800M words) and English Wikipedia (2,500M words).",sourceType:"research-paper",relevance:.99,url:"https://arxiv.org/abs/1810.04805"}]},
    {id:"claim-3",text:"BERT was trained on more than 100 languages.",verdict:"contradicted",confidence:.94,explanation:"The original BERT model used English corpora. Multilingual BERT was released separately and supports 104 languages.",evidence:[{id:"ev-3",title:"BERT multilingual model documentation",passage:"The multilingual model is trained on the top 104 languages with the largest Wikipedias.",sourceType:"official-documentation",relevance:.95}]},
    {id:"claim-4",text:"BERT remains the best NLP model today.",verdict:"uncertain",confidence:.72,explanation:"“Best” depends on the task, evaluation dataset, cost, and date. The statement is too broad to verify as a stable factual claim.",evidence:[{id:"ev-4",title:"Stanford HELM — Holistic Evaluation of Language Models",passage:"Model performance varies substantially across scenarios, metrics, and deployment considerations.",sourceType:"research-paper",relevance:.81,url:"https://crfm.stanford.edu/helm/"}]},
  ]
};

export const recentReports=[
  {id:"report-001",title:"BERT history and training data",score:78,claims:4,time:"Today, 10:24"},
  {id:"report-002",title:"Global renewable energy adoption",score:91,claims:7,time:"Yesterday, 16:08"},
  {id:"report-003",title:"CRISPR gene editing overview",score:64,claims:6,time:"Aug 14, 09:42"},
];

