import ProductCartItemList from "../_components/cart/ProductCartItemList";
import OrderSummary from "../_components/cart/OrderSummary";

// Cart page
export default function Cart() {
  return (
    <div className="py-8 px-6 md:px-12">
      <h1 className="mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Cart items will be listed here */}
        <ProductCartItemList />
        {/* Order summary will be displayed here */}
        <OrderSummary />
      </div>
    </div>
  );
}
