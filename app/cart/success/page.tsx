import Button from "../../_components/ui/Button";

export default function Success() {
  return (
    <div className="py-8 px-12 max-w-7xl mx-auto">
      <h1>Success page</h1>
      <Button variant={"Medium"} color={"Primary"} width={"Fit"} href="/">
        Back to Home
      </Button>
    </div>
  );
}
