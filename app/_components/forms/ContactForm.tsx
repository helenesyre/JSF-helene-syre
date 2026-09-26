"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../../_lib/schema";
import { CircleAlert } from "lucide-react";
import Button from "../ui/Button";

type contactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const inputContainerClass = "mb-4";
const labelClass = "font-semibold mb-1";
const asteriskClass = "text-red-600 ml-0.5";
const inputClass =
  "w-full border border-stone-200 rounded-md p-2 mb-2 inset-shadow-sm/8";
const errorContainerClass = "flex items-center space-x-1.5 text-red-600";
const errorClass = "text-red-600 font-medium text-sm";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<contactFormData> = (data, event) => {
    event?.target.reset();
    setSubmitted(true);
  };

  return (
    <div>
      {submitted && (
        <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium rounded p-2">
          Your message has been successfully sent!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={inputContainerClass}>
          <label htmlFor="nameContact" className={labelClass}>
            Full name<span className={asteriskClass}>*</span>
          </label>
          <input
            className={inputClass}
            id="nameContact"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "nameError" : undefined}
          />
          {errors.name && (
            <div className={errorContainerClass}>
              <CircleAlert size={18} strokeWidth={1.75} />
              <p id="nameError" role="alert" className={errorClass}>
                {errors.name.message}
              </p>
            </div>
          )}
        </div>
        <div className={inputContainerClass}>
          <label htmlFor="emailContact" className={labelClass}>
            Email<span className={asteriskClass}>*</span>
          </label>
          <input
            className={inputClass}
            id="emailContact"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "emailError" : undefined}
          />
          {errors.email && (
            <div className={errorContainerClass}>
              <CircleAlert size={18} strokeWidth={1.75} />
              <p id="emailError" role="alert" className={errorClass}>
                {errors.email.message}
              </p>
            </div>
          )}
        </div>
        <div className={inputContainerClass}>
          <label htmlFor="subjectContact" className={labelClass}>
            Subject<span className={asteriskClass}>*</span>
          </label>
          <input
            className={inputClass}
            id="subjectContact"
            {...register("subject")}
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subjectError" : undefined}
          />
          {errors.subject && (
            <div className={errorContainerClass}>
              <CircleAlert size={18} strokeWidth={1.75} />
              <p id="subjectError" role="alert" className={errorClass}>
                {errors.subject.message}
              </p>
            </div>
          )}
        </div>
        <div className={inputContainerClass}>
          <label htmlFor="messageContact" className={labelClass}>
            Message<span className={asteriskClass}>*</span>
          </label>
          <textarea
            className={inputClass}
            id="messageContact"
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "messageError" : undefined}
          />
          {errors.message && (
            <div className={errorContainerClass}>
              <CircleAlert size={18} strokeWidth={1.75} />
              <p id="messageError" role="alert" className={errorClass}>
                {errors.message.message}
              </p>
            </div>
          )}
        </div>
        <Button
          variant={"Medium"}
          color={"Primary"}
          width={"Full"}
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
