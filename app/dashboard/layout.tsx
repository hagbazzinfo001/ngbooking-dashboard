"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import DashboardNavbar from "./dashboardNavbar";
import {
  LayoutDashboard,
  Moon,
  Sun,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    name: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
    active: true,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, signout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-200">
      {/* Sidebar
      <motion.div
        initial={false}
        animate={{
          width: isSidebarCollapsed ? 80 : 256,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col relative"
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute -right-3 top-6 z-10 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-200"
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>

        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <AnimatePresence mode="wait">
            {!isSidebarCollapsed ? (
              <motion.div
                key="expanded-logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NG</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    NGBOOKINGS.COM
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="collapsed-logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NG</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {!isSidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="p-4 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
                  <AvatarFallback className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                    {user?.firstName?.[0]}
                    {user?.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {user?.firstName} {user?.lastName}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Travel Agent
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="flex-1 items-start p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.name === "Dashboard" &&
                  pathname.startsWith("/dashboard"));

              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#660133] text-white font-medium"
                        : "text-black hover:bg-[#F9F2F5] hover:text-[#660133]"
                    }`}
                    title={isSidebarCollapsed ? item.name : undefined}
                  >
                    <item.icon
                      className={`h-5 w-5 ${
                        isActive
                          ? "text-white dark:text-purple-300"
                          : "text-gray-500 dark:text-gray-400"
                      } ${isSidebarCollapsed ? "mx-auto" : ""}`}
                    />
                    <AnimatePresence>
                      {!isSidebarCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="p-4   ">
            <AnimatePresence mode="wait">
              {!isSidebarCollapsed ? (
                <motion.div
                  key="expanded-theme"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Dark Mode
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="p-2"
                  >
                    {isDarkMode ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed-theme"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-center"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="p-2"
                    title={
                      isDarkMode
                        ? "Switch to Light Mode"
                        : "Switch to Dark Mode"
                    }
                  >
                    {isDarkMode ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.div> */}
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
