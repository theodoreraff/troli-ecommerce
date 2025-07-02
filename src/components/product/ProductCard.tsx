
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This item is currently out of stock.",
        variant: "destructive",
      });
      return;
    }
    
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card 
      className="group hover-lift cursor-pointer bg-white/80 backdrop-blur-sm border-white/20"
      data-testid={`product-card-${product.id}`}
    >
      <Link to={`/product/${product.id}`} data-testid={`product-link-${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid={`product-image-${product.id}`}
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 
              className="font-semibold text-lg group-hover:text-troli-primary transition-colors line-clamp-2"
              data-testid={`product-name-${product.id}`}
            >
              {product.name}
            </h3>
            <Badge 
              variant={product.category === 'Electronics' ? 'default' : 
                      product.category === 'Books' ? 'secondary' : 'outline'}
              data-testid={`product-category-${product.id}`}
            >
              {product.category}
            </Badge>
          </div>
          
          <p 
            className="text-gray-600 text-sm mb-3 line-clamp-3"
            data-testid={`product-description-${product.id}`}
          >
            {product.description}
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span 
              className="text-2xl font-bold text-troli-primary"
              data-testid={`product-price-${product.id}`}
            >
              ${product.price}
            </span>
            {!product.inStock && (
              <Badge variant="destructive" data-testid={`product-stock-${product.id}`}>
                Out of Stock
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-troli-primary hover:bg-troli-secondary transition-colors"
          data-testid={`add-to-cart-${product.id}`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
}
