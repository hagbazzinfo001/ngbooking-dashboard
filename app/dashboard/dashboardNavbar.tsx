import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hotel } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import {
  Search,
  Bell,
  Grid3X3,
  Menu,
  Building2,
  MessageCircle,
  Settings,
  ChevronDown,
  User,
} from "lucide-react";

export default function Component() {
  const { user, signout } = useAuth();

  return (
    <div className="bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Hotel className="h-8 w-8 text-[#a50050]" />
              <span className="text-xl font-bold text-[#a50050]">
                NGBooks.<span className="h-8 w-8 text-amber-600">com</span>
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-full focus:bg-white focus:ring-2 focus:ring-[#8B1538] focus:ring-opacity-20"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
            </Button>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div className="w-10 h-10 bg-[#8B1538] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">
                      {user?.firstName || "Sharon"}
                    </span>
                    <span className="text-xs text-gray-500">Super Admin</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    /* Add profile logic here */
                  }}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signout}>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className=" bg-white  px-6 py-4  ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2  rounded-full bg-[#F5F5F5] ">
          {/* Dashboard - Active */}
          <Button className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-6 py-2 rounded-full flex items-center gap-2">
            <Grid3X3 className="w-4 h-4" />
            Dashboard
          </Button>

          {/* Book Now */}
          <Button
            variant="ghost"
            className="text-gray-600 px-6 py-2 rounded-full flex items-center gap-2"
          >
            <Menu className="w-4 h-4" />
            Book Now
          </Button>

          {/* Finance */}
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 hover:bg-[#F9F2F5] px-6 py-2 rounded-full flex items-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            Finance
          </Button>

          {/* Messages */}
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Messages
          </Button>

          {/* Settings */}
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Settings
          </Button>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
}
