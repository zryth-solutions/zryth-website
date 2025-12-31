export type Industry = "Education" | "Finance" | "Manufacturing" | "Pharma" | "Business";

export type NewsletterItem = {
  id: number;
  type: "fact" | "stay-ahead" | "policy";
  title: string;
  content: string;
};

export type IndustryNews = {
  industry: Industry;
  items: NewsletterItem[];
};

export type ImportantTech = {
  id: number;
  title: string;
  description: string;
};

