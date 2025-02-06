import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { categories } from '../data/categories';
import { Article } from '../types';

const FeaturedArticle: React.FC<{ article: Article }> = ({ article }) => (
  <a 
    href={`/articles/${article.slug}`}
    className="relative block group cursor-pointer"
  >
    <div className="relative h-[500px] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
      <img 
        src={article.image.url} 
        alt={article.image.alt} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <h2 className="text-4xl font-bold mb-3 text-white group-hover:text-blue-200">{article.title}</h2>
        {article.subtitle && (
          <p className="text-xl text-gray-200">{article.subtitle}</p>
        )}
      </div>
    </div>
  </a>
);

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <a href={`/articles/${article.slug}`} className="group cursor-pointer">
    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
      <img
        src={article.image.url} 
        alt={article.image.alt} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    <h3 className="font-bold text-xl group-hover:text-blue-600">{article.title}</h3>
  </a>
);

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryArticles = articles.filter(article => article.categoryId === category.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-xl text-gray-600">{category.description}</p>
      </div>

      {categoryArticles.find(article => article.featured) && (
        <FeaturedArticle article={categoryArticles.find(article => article.featured)!} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {categoryArticles.filter(article => !article.featured).map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
};

export default CategoryPage;