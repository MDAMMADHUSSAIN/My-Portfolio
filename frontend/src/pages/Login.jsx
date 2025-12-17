import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>
        <p className="text-gray-400 text-center mt-2 mb-8">
          Login to continue your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white outline-none border transition ${
                  errors.email
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                className={`w-full pl-10 pr-12 py-3 rounded-xl bg-black/40 text-white outline-none border transition ${
                  errors.password
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                className="accent-blue-500"
              />
              Remember me
            </label>

            <a
              href="#"
              className="text-blue-400 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.97] transition disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-8">
          Don’t have an account?{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            <a href="signup">Signup</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
