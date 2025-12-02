
export enum PageView {
  HOME = 'HOME',
  COMMUNITY = 'COMMUNITY',
  FAMILY = 'FAMILY'
}

export interface ArticleSummary {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface StatData {
  name: string;
  value: number;
  [key: string]: any;
}