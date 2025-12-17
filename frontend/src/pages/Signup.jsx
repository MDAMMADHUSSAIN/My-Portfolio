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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4">
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl my-20">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center">
          Create Your Account
        </h1>
        <p className="text-gray-400 text-center mt-2 mb-8">
          Join us and start your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 text-white outline-none border transition ${
                  errors.name
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

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
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                    message: "Must include upper, lower, number & special char",
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={`w-full pl-10 pr-12 py-3 rounded-xl bg-black/40 text-white outline-none border transition ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 
             text-green-500 cursor-pointer font-semibold tracking-wide hover:scale-[1.02] 
             active:scale-[0.97] transition disabled:opacity-50"
          >
            {isSubmitting ? (
              "Creating account..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                <UserPlus size={18} />
                Sign Up
              </span>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-8">
          Already have an account?{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
            <a href="login">Login</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
