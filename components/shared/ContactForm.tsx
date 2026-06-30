import React, { useState } from "react";
import { formsContent } from "../../data/i18n/content";
import type { ContactFormContent } from "../../data/i18n/content";
import {
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_RAW,
} from "../../utils/siteConfig";
import FadeIn from "../ui/FadeIn";
import { Icons } from "../ui/LucideIcons";

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
};

interface ContactFormProps {
  content?: ContactFormContent;
}

const ContactForm: React.FC<ContactFormProps> = ({ content }) => {
  const contactFormContent = content ?? formsContent.contact;
  const projectOptions = contactFormContent.projectOptions.map((option) => option.label);
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "ready">("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitState("idle");
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formState.name.trim()) nextErrors.name = contactFormContent.validation.nameRequired;
    if (!formState.phone.trim()) nextErrors.phone = contactFormContent.validation.phoneRequired;

    if (!formState.email.trim()) {
      nextErrors.email = contactFormContent.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = contactFormContent.validation.emailInvalid;
    }

    if (!formState.projectType.trim()) {
      nextErrors.projectType = contactFormContent.validation.projectTypeRequired;
    }

    if (!formState.message.trim()) {
      nextErrors.message = contactFormContent.validation.messageRequired;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    const subject = `${contactFormContent.mailto.subjectPrefix} - ${formState.projectType}`;
    const body = [
      `${contactFormContent.mailto.nameLabel}: ${formState.name}`,
      `${contactFormContent.mailto.phoneLabel}: ${formState.phone}`,
      `${contactFormContent.mailto.emailLabel}: ${formState.email}`,
      `${contactFormContent.mailto.projectTypeLabel}: ${formState.projectType}`,
      "",
      `${contactFormContent.mailto.messageLabel}:`,
      formState.message,
    ].join("\n");

    const mailtoUrl = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitState("ready");
    window.location.href = mailtoUrl;
  };

  const fieldClassName = (fieldName: keyof FormState) =>
    `rounded border p-4 outline-none transition-all placeholder:text-gray-400 ${
      errors[fieldName]
        ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-gray-200 bg-gray-50 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
    }`;

  return (
    <section id="contact-form" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container relative z-10 mx-auto max-w-screen-xl px-8 md:px-16 lg:px-32">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="lg:w-7/12">
            <FadeIn>
              <h2 className="mb-2 font-sans text-3xl font-bold text-brand-dark">
                {contactFormContent.heading}
              </h2>
              <p className="mb-10 text-lg text-[#56677A]">
                {contactFormContent.intro}
              </p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2" noValidate>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-bold text-gray-700">
                    {contactFormContent.labels.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    className={fieldClassName("name")}
                    placeholder={contactFormContent.placeholders.name}
                  />
                  {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-phone" className="text-sm font-bold text-gray-700">
                    {contactFormContent.labels.phone}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className={fieldClassName("phone")}
                    placeholder={contactFormContent.placeholders.phone}
                  />
                  {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="contact-email" className="text-sm font-bold text-gray-700">
                    {contactFormContent.labels.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={fieldClassName("email")}
                    placeholder={contactFormContent.placeholders.email}
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="contact-type" className="text-sm font-bold text-gray-700">
                    {contactFormContent.labels.projectType}
                  </label>
                  <div className="relative">
                    <select
                      id="contact-type"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className={`${fieldClassName("projectType")} w-full appearance-none cursor-pointer text-gray-700`}
                    >
                      <option value="">{contactFormContent.placeholders.projectType}</option>
                      {projectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <Icons.ChevronRight className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-gray-400" />
                  </div>
                  {errors.projectType && <p className="text-sm text-red-600">{errors.projectType}</p>}
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-gray-700">
                    {contactFormContent.labels.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`${fieldClassName("message")} resize-none`}
                    placeholder={contactFormContent.placeholders.message}
                  ></textarea>
                  {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="mt-4 md:col-span-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded bg-[#FF6B35] py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF814E]"
                    aria-label={contactFormContent.submit.ariaLabel}
                  >
                    {contactFormContent.submit.label}
                  </button>
                  <p className="mt-3 text-sm text-gray-500">
                    {contactFormContent.submit.helperPrefix}{" "}
                    <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-brand-blue hover:underline">
                      {SITE_EMAIL}
                    </a>
                    {contactFormContent.submit.helperSuffix}
                  </p>
                  {submitState === "ready" && (
                    <p className="mt-2 text-sm text-green-700">
                      {contactFormContent.submit.successPrefix} {SITE_EMAIL}
                      {contactFormContent.submit.successSuffix}
                    </p>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>

          <div className="flex flex-col justify-center lg:w-5/12">
            <FadeIn delay={200}>
              <div className="rounded-2xl border border-gray-100 bg-[#F5F7FA] p-10">
                <h3 className="mb-6 text-xl font-bold text-brand-dark">
                  {contactFormContent.sidebar.heading}
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                      <Icons.Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">
                        {contactFormContent.sidebar.items[0].title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {contactFormContent.sidebar.items[0].text}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                      <Icons.FileCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">
                        {contactFormContent.sidebar.items[1].title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {contactFormContent.sidebar.items[1].text}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                      <Icons.Lock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">
                        {contactFormContent.sidebar.items[2].title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {contactFormContent.sidebar.items[2].text}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 border-t border-gray-200 pt-8">
                  <p className="mb-2 text-sm text-gray-500">
                    {contactFormContent.sidebar.directContactLabel}
                  </p>
                  <a
                    href={`tel:${SITE_PHONE_RAW}`}
                    className="text-2xl font-bold text-brand-dark transition-colors hover:text-brand-orange"
                  >
                    {SITE_PHONE_DISPLAY}
                  </a>
                  <p className="mt-3 text-sm text-gray-500">
                    {contactFormContent.sidebar.emailPrefix}{" "}
                    <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-brand-blue hover:underline">
                      {SITE_EMAIL}
                    </a>
                    {contactFormContent.sidebar.emailSuffix}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
