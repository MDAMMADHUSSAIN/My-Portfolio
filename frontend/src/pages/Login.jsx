import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-24 top-32 h-52 w-52 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      {/* Glass Card */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-400">
            Login to continue your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    : "border-white/10 focus:border-blue-500"
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
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                className={`w-full rounded-xl border bg-black/40 px-10 pr-12 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 ${
                  errors.password
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
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

          {/* Options */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-gray-400">
              <input type="checkbox" className="h-4 w-4 accent-blue-500" />
              Remember me
            </label>

            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60"
          >
            {isSubmitting ? (
              "Logging in..."
            ) : (
              <>
                <LogIn size={18} />
                <span>Login</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-400 sm:text-sm">
          Don’t have an account?{" "}
          <a
            href="signup"
            className="cursor-pointer font-semibold text-blue-400 hover:underline"
          >
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
