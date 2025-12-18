import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, User, UserPlus } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4">
      {/* background glow (same feel as login) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-24 top-32 h-52 w-52 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      {/* Glass Card */}
      <div className="my-20 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Join us and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Ammad"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters required",
                  },
                })}
                className={`w-full rounded-xl border bg-black/40 px-10 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.name
                    ? "border-red-500"
                    : "border-white/10 focus:border-emerald-500"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="ammad@anymail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
                className={`w-full rounded-xl border bg-black/40 px-10 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.email
                    ? "border-red-500"
                    : "border-white/10 focus:border-emerald-500"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                    message:
                      "Must include upper, lower, number & special char",
                  },
                })}
                className={`w-full rounded-xl border bg-black/40 px-10 pr-12 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.password
                    ? "border-red-500"
                    : "border-white/10 focus:border-emerald-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={`w-full rounded-xl border bg-black/40 px-10 pr-12 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-white/10 focus:border-emerald-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 cursor-pointer rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-[0.97] disabled:opacity-50"
          >
            {isSubmitting ? (
              "Creating account..."
            ) : (
              <>
                <UserPlus size={18} />
                <span>Sign Up</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="login"
            className="cursor-pointer font-semibold text-blue-400 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
