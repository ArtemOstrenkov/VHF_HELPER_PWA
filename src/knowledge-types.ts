export type KnowledgeCategory =
  | "navigation"
  | "seamanship"
  | "vhf"
  | "medical"
  | "checklists"
  | "weather"
  | "nav-basics"
  | "troubleshooting";

export interface ContentBlock {
  type: "text" | "heading" | "list" | "table" | "code" | "note" | "warning" | "tip" | "accordion";
  content?: string;
  items?: string[];
  rows?: Array<{ [key: string]: string }>;
  title?: string;
  children?: ContentBlock[];
}

export interface KnowledgeArticle {
  id: string;
  category: KnowledgeCategory;
  titleKey: string;
  descKey: string;
  icon: string;
  order: number;
  content: ContentBlock[];
  quiz?: Quiz;
}

export interface Quiz {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  questionKey: string;
  options: string[];
  correctAnswer: number;
  explanationKey: string;
}

export interface KnowledgeCategoryMeta {
  id: KnowledgeCategory;
  titleKey: string;
  descKey: string;
  icon: string;
  order: number;
}
