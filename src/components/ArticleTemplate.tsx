import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Article, Category } from '../types';

interface ArticleTemplateProps {
  article: Article;
  category: Category;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article, category }) => {
  // Get today's date
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Commission Disclosure */}
      <p className="text-sm text-gray-600 italic mb-8">
        If you buy something through a link in this article, we may earn commission. Pricing and availability subject to change.
      </p>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={`/${category.slug}`} className="hover:text-indigo-600">{category.name}</Link>
      </nav>

      {/* Main Image and Title Overlay */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
        <img
          src={article.image.url}
          alt={article.image.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      {article.subtitle && (
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-700 text-center">
            {article.subtitle}
          </p>
        </div>
      )}

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>By: {article.author.name}</span>
          <span>•</span>
          <time dateTime={today.toISOString()}>{formattedDate}</time>
        </div>
      </header>

      {/* Intro Text */}
      {article.content && (
        <div
          className="prose prose-lg max-w-none mb-12"
          style={{ '--tw-prose-bold': '#111827' }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}

      {/* Products */}
      {article.products && article.products.map((product, productIndex) => (
        <div key={`${article.id}-product-${productIndex}-${product.id}`} id={product.id} className="not-prose mb-16 scroll-mt-24">
          <div className="not-prose max-w-3xl mx-auto">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2 text-center">
                <a href={product.link} className="text-blue-600 hover:underline">
                  {product.title}
                </a>
              </h2>
              
              {product.badge && (
                <div className="flex justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    {product.badge.text}
                  </span>
                </div>
              )}
              
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[4/3] rounded-xl overflow-hidden mt-4 bg-gray-50 block group"
              >
                <img
                  src={product.image.url}
                  alt={product.image.alt}
                  className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              
              <div
                className="prose prose-lg max-w-none mt-4"
                style={{ '--tw-prose-bold': '#111827' }}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              
              {(product.pros || product.cons) && (
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.pros && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pros</h3>
                        <ul className="space-y-2">
                          {product.pros.map((pro, index) => (
                            <li key={`${article.id}-${product.id}-pro-${index}`} className="flex items-start gap-2 text-gray-700">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.cons && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cons</h3>
                        <ul className="space-y-2">
                          {product.cons.map((con, index) => (
                            <li key={`${article.id}-${product.id}-con-${index}`} className="flex items-start gap-2 text-gray-700">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {product.price.includes('%') && (
                <div className="text-orange-500 text-xl font-semibold my-6 text-center">
                  {product.price}
                </div>
              )}
              
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-orange-500 text-white py-4 px-8 rounded-full font-medium text-center text-lg inline-block hover:bg-orange-600 transition-colors"
              >
                Check Price on Amazon
              </a>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ArticleTemplate;
