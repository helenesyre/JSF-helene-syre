import Button from "../ui/Button";

// Call to action component
export default function CallToAction() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-72 w-full bg-red-900 px-6 py-8 md:px-12">
      {/* CTA */}
      <h2 className="text-stone-50 mb-2">
        Do you have questions about this product?
      </h2>
      <p className="text-stone-300 mb-6">
        Feel free to reach out to our support team for any inquiries.
      </p>
      <Button variant={"Medium"} color={"Tertiary"} href="/contact">
        Contact Us
      </Button>
    </section>
  );
}
