import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "onTouched" });

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    console.log("Contact Form Data:", data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4 py-16">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-24 top-28 h-60 w-60 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-10 max-w-2xl text-center">
        <h1 className="flex items-center justify-center gap-3 text-3xl font-extrabold text-white sm:text-4xl">
          <MessageCircle className="h-8 w-8 text-blue-400" />
          <span>Get in Touch with Ammad!</span>
        </h1>
        <p className="mt-4 text-sm text-gray-300 sm:text-base">
          We&apos;d love to hear from you. Share an idea, a project, or a quick
          question using the form below, or reach out directly via email or
          phone.
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        {/* Form + contact info */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-1 block text-sm text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Md Ammad Hussain"
                {...register("name", { required: "Name is required" })}
                className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.name
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="ammad@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
                className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.email
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="mb-1 block text-sm text-gray-300">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={`w-full resize-none rounded-xl border bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.message
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r cursor-pointer from-blue-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-[0.97] disabled:opacity-50"
            >
              <Send size={18} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className="mt-2 text-center text-sm text-green-400">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 sm:grid-cols-3 sm:p-5">
            {/* Email */}
            <div className="flex items-start gap-3 sm:col-span-3 md:col-span-1">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Email
                </p>
                <p className="break-all text-sm text-gray-200">
                  md.ammad.hussain@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Phone
                </p>
                <p className="text-sm text-gray-200">+965 1234 5678</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                <MapPin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Location
                </p>
                <p className="text-sm text-gray-200">
                  123 Street, Kuwait City
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/60 lg:h-96">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d47.978!3d29.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9ff!2sKuwait!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
