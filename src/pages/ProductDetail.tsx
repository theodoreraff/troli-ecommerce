
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Star, ShoppingCart, Heart, Share } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4" data-testid="product-not-found">Product not found</h1>
          <Button onClick={() => navigate('/products')} data-testid="back-to-products-button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This item is currently out of stock.",
        variant: "destructive",
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }

    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/products')}
            data-testid="back-button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-white border" data-testid="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              data-testid="product-detail-image"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge 
                variant={product.category === 'Electronics' ? 'default' : 
                        product.category === 'Books' ? 'secondary' : 'outline'}
                className="mb-4"
                data-testid="product-detail-category"
              >
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4" data-testid="product-detail-name">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed" data-testid="product-detail-description">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4" data-testid="product-detail-rating">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-troli-primary" data-testid="product-detail-price">
              ${product.price}
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <Badge variant="default" className="bg-green-100 text-green-800" data-testid="product-detail-stock">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive" data-testid="product-detail-stock">
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="font-medium">Quantity:</label>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  data-testid="quantity-decrease"
                >
                  -
                </Button>
                <span 
                  className="px-4 py-2 text-center min-w-[3rem]"
                  data-testid="quantity-display"
                >
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= 10}
                  data-testid="quantity-increase"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-troli-primary hover:bg-troli-secondary"
                data-testid="add-to-cart-detail-button"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="sm:w-auto"
                data-testid="wishlist-button"
              >
                <Heart className="w-5 h-5 mr-2" />
                Wishlist
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="sm:w-auto"
                data-testid="share-button"
              >
                <Share className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Product Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality materials</li>
                <li>• Fast and reliable performance</li>
                <li>• 30-day return policy</li>
                <li>• 1-year warranty included</li>
                <li>• Free shipping on orders over $50</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
