
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { state, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16" data-testid="empty-cart">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4" data-testid="empty-cart-title">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8" data-testid="empty-cart-message">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-troli-primary hover:bg-troli-secondary"
                data-testid="continue-shopping-button"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8" data-testid="cart-page-title">
          Shopping Cart ({state.itemCount} items)
        </h1>

        <div className="space-y-6 mb-8">
          {state.items.map((item) => (
            <Card key={item.product.id} data-testid={`cart-item-${item.product.id}`}>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-lg"
                      data-testid={`cart-item-image-${item.product.id}`}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 
                        className="text-lg font-semibold"
                        data-testid={`cart-item-name-${item.product.id}`}
                      >
                        {item.product.name}
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        data-testid={`remove-item-${item.product.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <p 
                      className="text-gray-600 mb-4"
                      data-testid={`cart-item-description-${item.product.id}`}
                    >
                      {item.product.description}
                    </p>

                    <div className="flex justify-between items-center">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Qty:</span>
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            data-testid={`decrease-quantity-${item.product.id}`}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span 
                            className="px-3 py-1 text-center min-w-[2.5rem]"
                            data-testid={`item-quantity-${item.product.id}`}
                          >
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            data-testid={`increase-quantity-${item.product.id}`}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div 
                          className="text-lg font-semibold text-troli-primary"
                          data-testid={`item-total-${item.product.id}`}
                        >
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600">
                          ${item.product.price} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        <Card className="bg-gray-50" data-testid="cart-summary">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Order Summary</h3>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({state.itemCount} items)</span>
                <span data-testid="cart-subtotal">${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span data-testid="cart-tax">${(state.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total</span>
                  <span 
                    className="text-troli-primary"
                    data-testid="cart-total"
                  >
                    ${(state.total * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-testid="continue-shopping-button"
                >
                  Continue Shopping
                </Button>
              </Link>
              <Button
                size="lg"
                className="flex-1 bg-troli-primary hover:bg-troli-secondary"
                onClick={() => navigate('/checkout')}
                data-testid="proceed-to-checkout-button"
              >
                Proceed to Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Cart;
