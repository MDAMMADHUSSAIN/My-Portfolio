import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Get in Touch with Ammad !
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        We'd love to hear from you! Fill out the form below or reach us via email, phone.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Full Name</label>
              <input
                type="text"
                placeholder=" Md Ammad Hussain"
                {...register("name", { required: "Name is required" })}
                className={`w-full py-3 px-4 rounded-xl bg-black/40 text-white outline-none border transition ${
                  errors.name ? "border-red-500" : "border-white/10 focus:border-blue-500"
                }`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Email</label>
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
                className={`w-full py-3 px-4 rounded-xl bg-black/40 text-white outline-none border transition ${
                  errors.email ? "border-red-500" : "border-white/10 focus:border-blue-500"
                }`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">Message</label>
              <textarea
                placeholder="Your message..."
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={`w-full py-3 px-4 rounded-xl bg-black/40 text-white outline-none border transition resize-none ${
                  errors.message ? "border-red-500" : "border-white/10 focus:border-blue-500"
                }`}
              ></textarea>
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-green-500 cursor-pointer font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.97] transition disabled:opacity-50"
            >
              <Send size={18} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className="text-green-400 text-center mt-2">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-blue-500"/>
              <span>contact@ammad.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="text-blue-500"/>
              <span>+965 1234 5678</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-blue-500" />
              <span>123 Street, Kuwait City</span>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d47.978!3d29.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9ff!2sKuwait!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
