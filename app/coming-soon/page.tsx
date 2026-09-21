import Button from "../_components/ui/Button";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-100px)] gap-4 px-4">
      <h1>Coming Soon!</h1>
      <p>Feel free to take a look at our homepage while we work.</p>
      <div className="flex gap-4">
        <Button variant={"Medium"} color={"Primary"} href="/">
          Go to Home
        </Button>
        <Button variant={"Medium"} color={"Secondary"} href="/contact">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
