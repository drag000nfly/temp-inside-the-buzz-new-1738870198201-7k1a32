// Define the valid category IDs as a union type
export type CategoryId = 'lifestyle-home' | 'beauty-wellness' | 'technology';

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description?: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  image: {
    url: string;
    alt: string;
  };
  categoryId: CategoryId;
  featured?: boolean;
  content?: string;
  badge?: {
    text: string;
    color: 'orange' | 'blue' | 'green' | 'purple';
  };
  subtitle?: string;
  introText?: string;
  quickOverview?: Array<{
    id: string;
    title: string;
    image: {
      url: string;
      alt: string;
    };
    price?: {
      type: 'discount' | 'check';
      value?: string;
      label: string;
    };
  }>;
  products?: Array<{
    id: string;
    title: string;
    description: string;
    price: string;
    image: {
      url: string;
      alt: string;
    };
    link: string;
    rating?: number;
   pros?: string[];
   cons?: string[];
  }>;
}