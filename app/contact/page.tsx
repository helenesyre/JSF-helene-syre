import ContactForm from "../_components/forms/ContactForm";

// Contact page
export default function Contact() {
  return (
    <div className="py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 p-14 bg-stone-50 rounded shadow-md">
        <div>
          <h1 className="mb-2">Get in Touch</h1>
          <p className="text-stone-500">
            Questions about an order or a product? Send us a message.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
