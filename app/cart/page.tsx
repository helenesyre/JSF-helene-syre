import Button from "../_components/ui/Button";

export default function Cart() {
  return (
    <div className="py-8 px-12">
      <h1>Cart page</h1>
      <Button
        variant={"Medium"}
        color={"Primary"}
        width={"Fit"}
        href="/cart/payment"
      >
        Proceed to Payment
      </Button>
    </div>
  );
}
