"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Hotel } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigationbar = () => {
  const pathname = usePathname();

  const isSignInPage = pathname === "/signin";
  const isSignUpPage = pathname === "/signup";

  // Determine auth button label and route
  const authLabel = isSignInPage
    ? "Register"
    : isSignUpPage
    ? "Sign in"
    : "Sign in";
  const authRoute = isSignInPage
    ? "/signup"
    : isSignUpPage
    ? "/signin"
    : "/signin";

  return (
    <nav className="bg-white">
      <header className="bg-[#8B1538] text-white px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Hotel className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">
                NGBooks.<span className="h-8 w-8 text-amber-600">com</span>
              </span>
            </Link>
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#8B1538] rounded-full px-4 py-2"
          >
            <span className="mr-2">🇬🇧</span>
            EN
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </header>

      <div className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4">
            <Link href={authRoute}>
              <Button className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-2 rounded-full font-medium">
                {authLabel}
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-2 rounded-full font-medium"
              >
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
