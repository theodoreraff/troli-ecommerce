import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { ArrowRight, Star, ShoppingCart, Shield } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-hero-gradient text-white py-24 overflow-hidden"
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
            data-testid="hero-title"
          >
            Welcome to <span className="text-yellow-300">Troli</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in"
            data-testid="hero-subtitle"
          >
            Discover premium electronics, inspiring books, and stylish apparel.
            Your perfect shopping destination awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-white text-troli-primary hover:bg-gray-100 font-semibold px-8 py-3"
                data-testid="shop-now-button"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-white/20 hover-lift"
              data-testid="feature-quality"
            >
              <div className="w-16 h-16 bg-troli-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully curated products that meet our high standards for
                quality and performance.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-white/20 hover-lift"
              data-testid="feature-shipping"
            >
              <div className="w-16 h-16 bg-troli-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to get your purchases to you as fast
                as possible.
              </p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-white/20 hover-lift"
              data-testid="feature-secure"
            >
              <div className="w-16 h-16 bg-troli-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">
                Your data and transactions are protected with industry-leading
                security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16" data-testid="featured-products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4 text-gradient"
              data-testid="featured-products-title"
            >
              Featured Products
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-testid="featured-products-subtitle"
            >
              Discover our handpicked selection of the best products across all
              categories
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            data-testid="featured-products-grid"
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-troli-primary hover:bg-troli-secondary px-8 py-3"
                data-testid="view-all-products-button"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="py-16 bg-gray-900 text-white"
        data-testid="newsletter-section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            data-testid="newsletter-title"
          >
            Stay Updated
          </h2>
          <p
            className="text-xl text-gray-300 mb-8"
            data-testid="newsletter-subtitle"
          >
            Subscribe to our newsletter for exclusive deals and new product
            announcements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-troli-primary"
              data-testid="newsletter-email-input"
            />
            <Button
              className="bg-troli-primary hover:bg-troli-secondary px-6 py-3"
              data-testid="newsletter-subscribe-button"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
