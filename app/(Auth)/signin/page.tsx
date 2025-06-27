"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Loader2, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function SignIn() {
  const router = useRouter();
  const { signin, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");

    try {
      const result = await signin(data);

      if (result.success) {
        toast.success("Welcome back!", {
          description: "You have been successfully signed in.",
        });
        router.push("/");
      } else {
        setError(result.error || "Login failed. Please try again.");
        toast.error("Sign in failed", {
          description:
            result.error || "Please check your credentials and try again.",
        });
      }
    } catch (error) {
      const errorMessage = "An unexpected error occurred. Please try again.";
      setError(errorMessage);
      toast.error("Sign in failed", {
        description: errorMessage,
      });
    }
  };
  const sliderImages = [
    "/Swiper1.webp",
    "/Swiper2.webp",
    "/Swiper3.webp",
    "/Swiper4.webp",
    "/Swiper5.webp",
  ];
  const [current2Index, setCurrent2Index] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent2Index((prev) => (prev + 1) % sliderImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen flex mt-8 mb-12 pt-12 w-[95%] mx-auto  gap-x-14">
      <div className="hidden lg:flex lg:w-[40%] relative rounded-2xl overflow-hidden p-6">
        <Image
          src={sliderImages[current2Index]}
          alt="Person looking out window at city skyline"
          fill
          className="object-cover rounded-2xl transition-opacity duration-700"
          key={sliderImages[current2Index]}
          priority
        />
      </div>
      <div className="w-full lg:w-[50%] flex items-center justify-center bg-white rounded-2xl ">
        <div className="w-full ">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#a50050]  text-center mb-4">
              Welcome Back, Traveler!
            </h1>
            <p className="text-gray-600 text-center leading-relaxed">
              Your next adventure is just a click away. Log in to manage your
              bookings, access exclusive offers, and unlock the best deals on
              hotels, flights, and more!{" "}
            </p>
          </div>
          <div className="flex gap-3 mb-6 justify-center">
            <Button
              variant="outline"
              className="w-12 h-12 bg-gray-300 hover:bg-gray-50 rounded-full flex items-center justify-center shadow"
              aria-label="Sign in with Google"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </Button>
            {/* Facebook */}
            <Button
              variant="outline"
              className="w-12 h-12 bg-gray-300 hover:bg-gray-50 rounded-full flex items-center justify-center shadow"
              aria-label="Sign in with Facebook"
            >
              <svg className="w-15 h-15" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Button>
            {/* X/Twitter */}
            <Button
              variant="outline"
              className="w-12 h-12 bg-gray-300 hover:bg-gray-50 rounded-full flex items-center justify-center shadow"
              aria-label="Sign in with Twitter"
            >
              <svg
                className="w-15 h-15"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-400"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-50 text-gray-500 font-medium">
                or
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {error}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
            <div className="space-y-2">
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="pl-2 h-12 bg-white shadow focus:shadow-lg border-0 focus:border-0 focus:ring-0 placeholder:text-[#a50050]"
                  {...register("email")}
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a50050]" />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#a50050]" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 h-12 bg-white shadow focus:shadow-lg border-0 focus:border-0 focus:ring-0 placeholder:text-[#a50050]"
                  placeholder="Password"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#a50050] hover:text-[#880e4f] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-[#a50050] hover:text-[#880e4f] font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#a50050] hover:bg-[#880e4f] text-white font-semibold transition-all duration-200"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
