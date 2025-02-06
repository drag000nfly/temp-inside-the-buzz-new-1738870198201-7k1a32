import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Radio, Menu, X } from 'lucide-react';
import { articles } from './data/articles';
import { categories } from './data/categories';
import { Article, Category } from './types';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import TermsPage from './pages/TermsPage';
import { useScrollToTop } from './hooks/useScrollToTop';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="border-b relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative z-[60]">
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              <Radio className="w-7 h-7 text-indigo-600" />
              <div className="font-bold text-2xl tracking-tight">
                <span className="text-indigo-600">Inside</span>
                <span className="text-gray-700">the</span>
                <span className="text-indigo-600">Buzz</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/${category.slug}`}
                className="font-medium hover:text-blue-600 flex items-center gap-2"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            lg:hidden fixed inset-x-0 top-20 bg-white border-b transform transition-transform duration-300 ease-in-out z-[55]
            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          `}
        >
          <div className="px-4 py-6 space-y-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/${category.slug}`}
                onClick={() => setIsOpen(false)}
                className="block font-medium text-lg py-2 hover:text-blue-600 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-[50]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
};

const FeaturedArticle: React.FC<{ article: Article }> = ({ article }) => (
  <Link 
    to={`/articles/${article.slug}`}
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
  </Link>
);

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <Link to={`/articles/${article.slug}`} className="group cursor-pointer">
    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
      <img
        src={article.image.url} 
        alt={article.image.alt} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    <h3 className="font-bold text-xl group-hover:text-blue-600">{article.title}</h3>
  </Link>
);

function App() {
  useScrollToTop();
  
  const lifestyleCategory = categories[0];
  const beautyCategory = categories[1];
  const techCategory = categories[2];
  
  const lifestyleArticles = articles.filter(article => article.categoryId === lifestyleCategory.id);
  const beautyArticles = articles.filter(article => article.categoryId === beautyCategory.id);
  const techArticles = articles.filter(article => article.categoryId === techCategory.id);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Lifestyle & Home Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{lifestyleCategory.name}</h1>
              <p className="text-xl text-gray-600">{lifestyleCategory.description}</p>
            </div>

            {lifestyleArticles.find(article => article.featured) && (
              <FeaturedArticle article={lifestyleArticles.find(article => article.featured)!} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {lifestyleArticles.filter(article => !article.featured).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Beauty & Wellness Section */}
            <div className="mt-16 mb-8">
              <h1 className="text-4xl font-bold mb-4">{beautyCategory.name}</h1>
              <p className="text-xl text-gray-600 mb-8">From yoga mats to curling irons, our top beauty and wellness picks can enhance your daily routine.</p>
            </div>

            {beautyArticles.find(article => article.featured) && (
              <FeaturedArticle article={beautyArticles.find(article => article.featured)!} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {beautyArticles.filter(article => !article.featured).map(article => (
                <Link key={article.id} to={`/articles/${article.slug}`} className="group cursor-pointer">
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <img
                      src={article.image.url} 
                      alt={article.image.alt} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <h3 className="font-bold text-xl group-hover:text-blue-600">{article.title}</h3>
                </Link>
              ))}
            </div>

            {/* Technology Section */}
            <div className="mt-16 mb-8">
              <h1 className="text-4xl font-bold mb-4">{techCategory.name}</h1>
              <p className="text-xl text-gray-600">{techCategory.description}</p>
            </div>

            {techArticles.find(article => article.featured) && (
              <FeaturedArticle article={techArticles.find(article => article.featured)!} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {techArticles.filter(article => !article.featured).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </main>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/:slug" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;