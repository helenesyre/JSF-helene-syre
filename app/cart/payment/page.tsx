import Button from "../../_components/ui/Button";

export default function Payment() {
  return (
    <div className="py-8 px-12">
      <h1>Payment page</h1>
      <Button
        variant={"Medium"}
        color={"Primary"}
        width={"Fit"}
        href="/cart/success"
      >
        Complete Payment
      </Button>
    </div>
  );
}
