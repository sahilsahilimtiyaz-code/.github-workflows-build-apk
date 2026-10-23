
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
import { useCartStore } from '../../store/useCartStore';

export const CartDrawer = () => {
  // ⚡ Bolt Performance Optimization:
  // Using `useShallow` ensures CartDrawer only re-renders when these specific properties change,
  // rather than re-rendering on EVERY state change (like `addItem` modifying the items array implicitly).
  // Impact: Prevents unnecessary renders and improves performance of the drawer animation.
  const { isOpen, closeCart, items, updateQuantity, removeItem, getTotal } = useCartStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      closeCart: state.closeCart,
      items: state.items,
      updateQuantity: state.updateQuantity,
      removeItem: state.removeItem,
      getTotal: state.getTotal,
    }))
  );
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-charcoal border-l border-border z-50 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3 text-electric">
            <ShoppingBag size={20} />
            <h2 className="font-jetbrains text-sm font-bold tracking-[0.08em] uppercase">
              Bag [ {items.length.toString().padStart(2, '0')} ]
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-on-surface-variant hover:text-electric transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} className="text-border" />
              <p className="font-inter text-on-surface-variant">Your bag is empty.</p>
              <button
                onClick={() => {
                  closeCart();
                  navigate('/shop');
                }}
                className="font-jetbrains text-sm text-electric hover:text-ice transition-colors underline underline-offset-4"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.variantId || 'base'}`} className="flex gap-4">
                <div className="w-24 h-32 bg-obsidian border border-border flex-shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-syne font-bold text-on-surface leading-tight">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.product.id, item.variantId)}
                        className="text-on-surface-variant hover:text-error transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="font-jetbrains text-xs text-outline mt-1">
                      {item.product.category.toUpperCase()}
                    </p>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-border bg-obsidian">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variantId)}
                        className="p-2 text-on-surface-variant hover:text-electric transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-jetbrains text-xs w-8 text-center text-on-surface">
                        {item.quantity.toString().padStart(2, '0')}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variantId)}
                        className="p-2 text-on-surface-variant hover:text-electric transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="font-jetbrains text-sm font-medium text-on-surface">
                      ₹{((item.variantId ? item.product.variants?.find(v => v.id === item.variantId)?.price || item.product.price : item.product.price) * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-charcoal">
            <div className="flex justify-between items-center mb-6 font-jetbrains">
              <span className="text-on-surface-variant text-sm tracking-widest">SUBTOTAL</span>
              <span className="text-on-surface text-lg font-bold">₹{getTotal().toLocaleString('en-IN')}</span>
            </div>
            <p className="font-inter text-xs text-outline mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-electric text-obsidian font-jetbrains font-bold tracking-[0.05em] py-4 hover:bg-ice transition-all box-shadow-glow"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};
