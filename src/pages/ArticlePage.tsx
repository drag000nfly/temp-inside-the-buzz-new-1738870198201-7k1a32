import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleTemplate from '../components/ArticleTemplate';
import { articles } from '../data/articles';
import { categories } from '../data/categories';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return <div>Article not found</div>;
  }

  const category = categories.find(c => c.id === article.categoryId);
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return <ArticleTemplate article={article} category={category} />;
};

export default ArticlePage;