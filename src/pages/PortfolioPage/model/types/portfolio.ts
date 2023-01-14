export type StackItem = {
  id: string;
  name: string;
};

export interface PortfolioType {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: StackItem[];
}

export interface PortfolioSchema {
  portfolio: PortfolioType[];
  isLoading: boolean;
  error?: string;
}
